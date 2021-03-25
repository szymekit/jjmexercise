import {Component, OnInit} from '@angular/core';
import {MenuItemModel} from './models/menuItem.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public menuItems: MenuItemModel[];

  constructor() {
    this.menuItems = [
      {
        name: 'Strona główna',
        path: ''
      },
      {
        name: 'Dodaj preferencje',
        path: '/add-preference'
      },
      {
        name: 'Pokaż preferencje',
        path: '/show-preference'
      },
      {
        name: 'Kontakt',
        path: '/contact'
      }
    ];
  }

  ngOnInit(): void {
  }

}
