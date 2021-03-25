import {ComponentFixture, TestBed} from '@angular/core/testing';

import {AddPreferenceComponent} from './add-preference.component';
import {FormBuilder} from '@angular/forms';
import {ToastrModule} from 'ngx-toastr';
import {RouterTestingModule} from '@angular/router/testing';

describe('AddPreferenceComponent', () => {
  let component: AddPreferenceComponent;
  let fixture: ComponentFixture<AddPreferenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddPreferenceComponent],
      providers: [FormBuilder],
      imports: [ToastrModule.forRoot(), RouterTestingModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPreferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
