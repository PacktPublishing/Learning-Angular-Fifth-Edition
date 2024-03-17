import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-spy',
  standalone: true,
  template: '{{ caption }}'
})
export class SpyComponent implements OnInit {
  caption = '';

  constructor(private title: Title) {}

  ngOnInit(): void {
    this.title.setTitle('My Angular app');
    this.caption = this.title.getTitle();
  }
}
