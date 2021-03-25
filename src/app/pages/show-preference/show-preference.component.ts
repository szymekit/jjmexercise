import {Component, OnInit} from '@angular/core';
import {StorageService} from '../../shared/services/storage.service';
import {ToastrService} from 'ngx-toastr';
import {Router} from '@angular/router';
import {PreferenceModel} from '../../shared/models/preference.model';

@Component({
  selector: 'app-show-preference',
  templateUrl: './show-preference.component.html',
  styleUrls: ['./show-preference.component.scss']
})
export class ShowPreferenceComponent implements OnInit {

  public preferences: PreferenceModel;

  constructor(
    private storageService: StorageService,
    private toastr: ToastrService,
    private router: Router
    ) {
  }

  ngOnInit(): void {
    this.preferences = this.storageService.getObject('preferenceForm');

    if (!this.preferences) {
      this.toastr.error('Nie znaleziono żadnych preferencji');
      this.router.navigate(['/add-preference']);
    }
  }
}
