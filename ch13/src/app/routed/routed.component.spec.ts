import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingHarness } from '@angular/router/testing';

import { RoutedComponent } from './routed.component';
import { Router, provideRouter } from '@angular/router';
import { routes } from '../app.routes';

describe('RoutedComponent', () => {
  let component: RoutedComponent;
  let fixture: ComponentFixture<RoutedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [provideRouter(routes)]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RoutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display a span element', async () => {
    const harness = await RouterTestingHarness.create();
    await harness.navigateByUrl('/routed');
    expect(harness.routeNativeElement?.querySelector('span')?.textContent).toBe('My routed component');
  });

  it('should navigate to the root path', () => {
    component.goBack();
    expect(TestBed.inject(Router).url).toBe('/');
  });
});
