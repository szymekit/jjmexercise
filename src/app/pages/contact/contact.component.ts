import {Component, OnInit} from '@angular/core';
import {ContactInfoModel} from './models/contact-info.model';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  public contactInfo: ContactInfoModel[];

  constructor() {
    this.contactInfo = [
      {
        key: 'Ulica',
        value: 'Koszykowa 80',
      },
      {
        key: 'Miasto',
        value: 'Warszawa',
      },
      {
        key: 'Kod pocztowy',
        value: '01-100',
      },
      {
        key: 'Numer telefonu',
        value: '+48 66600111',
      },
    ];
  }

  ngOnInit(): void {
  }

}
