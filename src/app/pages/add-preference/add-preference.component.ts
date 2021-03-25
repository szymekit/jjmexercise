import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {IndustryEnum} from './enums/industry.enum';
import {StorageService} from '../../shared/services/storage.service';
import {ToastrService} from 'ngx-toastr';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-preference',
  templateUrl: './add-preference.component.html',
  styleUrls: ['./add-preference.component.scss']
})
export class AddPreferenceComponent implements OnInit {

  public preferenceForm: FormGroup;
  public industries: string[];
  public industryEnum;
  public formSubmitted: boolean;

  constructor(
    private fb: FormBuilder,
    private storageService: StorageService,
    private toastr: ToastrService,
    private router: Router
  ) {
    this.industries = Object.values(IndustryEnum);
    this.industryEnum = IndustryEnum;
  }

  ngOnInit(): void {
    this.initForm();

    this.preferenceForm.controls.industry.valueChanges.subscribe(res => {
      if (res === IndustryEnum.Industry4) {
        this.preferenceForm.controls.reason.setValidators([Validators.required]);
        this.preferenceForm.controls.reason.updateValueAndValidity();
      } else {
        this.preferenceForm.controls.reason.setValidators([]);
        this.preferenceForm.controls.reason.updateValueAndValidity();
      }
    });
  }

  initForm(): void {
    this.preferenceForm = this.fb.group({
      name: ['', [Validators.minLength(3), Validators.required]],
      surname: ['', [Validators.minLength(3), Validators.required]],
      phoneNumber: [''],
      industry: ['', Validators.required],
      agreement: ['', Validators.required],
      reason: ['']
    });
  }

  saveForm(): void {
    this.formSubmitted = true;
    if (this.preferenceForm.valid) {
      this.storageService.setObject('preferenceForm', this.preferenceForm.value);
      this.toastr.success('Dodano preferencje');
      this.router.navigate(['/show-preference']);
    }
  }
}
