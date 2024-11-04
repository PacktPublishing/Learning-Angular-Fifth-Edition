import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyLoggerComponent } from './key-logger.component';

describe('KeyLoggerComponent', () => {
  let component: KeyLoggerComponent;
  let fixture: ComponentFixture<KeyLoggerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KeyLoggerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KeyLoggerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
