import {NgModule} from '@angular/core';

import {ContactComponent} from './contact.component';
import {ContactRoutingModule} from './contact-routing.module';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
    ContactComponent
  ],
  imports: [
    ContactRoutingModule,
    CommonModule,
  ],
  providers: [],
  bootstrap: [ContactComponent]
})
export class ContactModule {
}
