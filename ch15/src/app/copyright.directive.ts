import { isPlatformBrowser } from '@angular/common';
import { Directive, ElementRef, inject, OnInit, PLATFORM_ID } from '@angular/core';

@Directive({
  selector: '[appCopyright]'
})
export class CopyrightDirective implements OnInit {

  private platform = inject(PLATFORM_ID);
  private el = inject(ElementRef);

  ngOnInit(): void {
    if (isPlatformBrowser(this.platform)) {
      const currentYear = new Date().getFullYear();
      const targetEl: HTMLElement = this.el.nativeElement;
      targetEl.classList.add('copyright');
      targetEl.textContent = `Copyright ©${currentYear} All Rights Reserved ${targetEl.textContent}`;
    }
  }

}
