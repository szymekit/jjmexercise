import {NgModule} from '@angular/core';import {CommonModule} from '@angular/common';
import {ShowPreferenceComponent} from './show-preference.component';
import {ShowPreferenceRoutingModule} from './show-preference-routing.module';

@NgModule({
  declarations: [
    ShowPreferenceComponent
  ],
  imports: [
    ShowPreferenceRoutingModule,
    CommonModule,
  ],
  providers: [],
  bootstrap: [ShowPreferenceComponent]
})
export class ShowPreferenceModule {
}
