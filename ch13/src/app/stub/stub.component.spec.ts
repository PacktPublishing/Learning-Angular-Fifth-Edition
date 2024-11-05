import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StubComponent } from './stub.component';
import { StubService } from '../stub.service';

describe('StubComponent', () => {
  let component: StubComponent;
  let fixture: ComponentFixture<StubComponent>;
  const serviceStub: Partial<StubService> = {
    name: 'Boothstomper'
  };
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StubComponent],
      providers: [
        { provide: StubService, useValue: serviceStub }
      ]
    })
    .compileComponents();  
    
    fixture = TestBed.createComponent(StubComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('status', () => {
    let service: StubService;
    let msgDisplay: HTMLElement;
  
    beforeEach(() => {
      service = TestBed.inject(StubService);
      msgDisplay = fixture.nativeElement.querySelector('span');
    })
  
    it('should be on a mission', () => {
      service.isBusy = true;
      fixture.detectChanges();
      expect(msgDisplay.textContent).toContain('is on mission');
    });
  
    it('should be available', () => {
      service.isBusy = false;
      fixture.detectChanges();
      expect(msgDisplay.textContent).toContain('is available');
    });
  });
});
