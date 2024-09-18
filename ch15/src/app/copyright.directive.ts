import { isPlatformBrowser } from '@angular/common';
import { Directive, ElementRef, Inject, OnInit, PLATFORM_ID } from '@angular/core';

@Directive({
  selector: '[appCopyright]',
  standalone: true
})
export class CopyrightDirective implements OnInit {

  constructor(
    private el: ElementRef,
    @Inject(PLATFORM_ID) private platform: Object
  ) {}
  
  ngOnInit(): void {
    if (isPlatformBrowser(this.platform)) {
      const currentYear = new Date().getFullYear();
      const targetEl: HTMLElement = this.el.nativeElement;
      targetEl.classList.add('copyright');
      targetEl.textContent = `Copyright ©${currentYear} All Rights Reserved ${targetEl.textContent}`;
    }
  }    

}
