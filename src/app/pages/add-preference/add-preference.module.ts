import {NgModule} from '@angular/core';

import {CommonModule} from '@angular/common';
import {AddPreferenceComponent} from './add-preference.component';
import {AddPreferenceRoutingModule} from './add-preference-routing.module';
import {ReactiveFormsModule} from '@angular/forms';
import {NgxMaskModule} from 'ngx-mask';

@NgModule({
  declarations: [
    AddPreferenceComponent
  ],
  imports: [
    AddPreferenceRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot()
  ],
  providers: [],
  bootstrap: [AddPreferenceComponent]
})
export class AddPreferenceModule {
}
