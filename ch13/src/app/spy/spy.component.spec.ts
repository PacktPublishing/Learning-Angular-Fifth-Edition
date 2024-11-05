import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Title } from '@angular/platform-browser';

import { SpyComponent } from './spy.component';

describe('SpyComponent', () => {
  let component: SpyComponent;
  let fixture: ComponentFixture<SpyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SpyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set the title', () => {
    const title = TestBed.inject(Title);
    const spy = spyOn(title, 'setTitle');
    component.ngOnInit();
    expect(spy).toHaveBeenCalledWith('My Angular app');
  });
});

it('should get the title', async () => {
  const titleSpy = jasmine.createSpyObj('Title', [
    'getTitle', 'setTitle'
  ]);    
  titleSpy.getTitle.and.returnValue('My title');

  await TestBed.configureTestingModule({
    imports: [SpyComponent],
    providers: [
      { provide: Title, useValue: titleSpy }
    ]
  })
  .compileComponents();    
  
  const fixture = TestBed.createComponent(SpyComponent);
  fixture.detectChanges();
  
  expect(fixture.nativeElement.textContent).toContain('My title');
});
