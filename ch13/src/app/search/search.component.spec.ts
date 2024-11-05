import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { SearchComponent } from './search.component';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchComponent, ReactiveFormsModule]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set the searchText', () => {
    const input: HTMLInputElement = fixture.nativeElement.querySelector('input');
    input.value = 'Angular';
    input.dispatchEvent(new CustomEvent('input'));
    expect(component.searchForm.controls.searchText.value).toBe('Angular');
  });
  
  it('should disable search button', () => {
    const button: HTMLButtonElement = fixture.nativeElement.querySelector('button');
    component.searchForm.controls.searchText.setValue('');
    expect(button.disabled).toBeTrue();
  });
  
  it('should log to the console', () => {
    const button: HTMLButtonElement = fixture.nativeElement.querySelector('button');
    const spy = spyOn(console, 'log');
    component.searchForm.controls.searchText.setValue('Angular');
    fixture.detectChanges();
    button.click();
    expect(spy).toHaveBeenCalledWith('You searched for: Angular');
  });
});
