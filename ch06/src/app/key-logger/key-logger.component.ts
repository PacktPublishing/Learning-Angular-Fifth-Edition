import { Component, ElementRef, OnInit, ViewChild, Input } from '@angular/core';
import { fromEvent, tap, map, filter } from 'rxjs';

@Component({
  selector: 'app-key-logger',
  standalone: true,
  imports: [],
  templateUrl: './key-logger.component.html',
  styleUrl: './key-logger.component.css'
})
export class KeyLoggerComponent implements OnInit {
  @ViewChild('keyContainer', { static: true }) input: ElementRef | undefined;
  @Input() numeric = false;
  keys = '';

  ngOnInit(): void {
    const logger$ = fromEvent<KeyboardEvent>(this.input?.nativeElement, 'keyup');
    logger$.pipe(
      map(evt => evt.key.charCodeAt(0)),
      filter(code => {
        if (this.numeric) {
          return (code > 31 && (code < 48 || code > 57)) === false;
        }
        return true;
      }),
      tap(digit => this.keys += String.fromCharCode(digit))
    ).subscribe();
  }  
}
