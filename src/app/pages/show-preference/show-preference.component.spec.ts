import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowPreferenceComponent } from './show-preference.component';
import {ToastrModule} from 'ngx-toastr';
import {RouterTestingModule} from '@angular/router/testing';

describe('ShowPreferenceComponent', () => {
  let component: ShowPreferenceComponent;
  let fixture: ComponentFixture<ShowPreferenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowPreferenceComponent ],
      imports: [ToastrModule.forRoot(), RouterTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowPreferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
