import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { HarnessLoader } from '@angular/cdk/testing';
import { MatButtonHarness } from '@angular/material/button/testing';

import { BindingsComponent } from './bindings.component';

@Component({
  standalone: true,
  imports: [BindingsComponent],
  template: `
    <app-bindings [title]="testTitle" (liked)="isFavorite = true"></app-bindings>
  `
})
export class TestHostComponent {
  testTitle = 'My title';
  isFavorite = false;
}

describe('BindingsComponent', () => {
  let component: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestHostComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TestHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the title', () => {
    const titleDisplay: HTMLElement = fixture.nativeElement.querySelector('p');
    expect(titleDisplay.textContent).toEqual(component.testTitle);
  });

  it('should emit the liked event', () => {
    const button: HTMLButtonElement = fixture.nativeElement.querySelector('button');
    button.click();
    expect(component.isFavorite).toBeTrue();
  });

  it('should emit the liked event using harness', async () => {
    const loader = TestbedHarnessEnvironment.loader(fixture);
    const buttonHarness = await loader.getHarness(MatButtonHarness);
    await buttonHarness.click();
    expect(component.isFavorite).toBeTrue();
  });
});
