import {NgModule} from '@angular/core';

import {CommonModule} from '@angular/common';
import {MainComponent} from './main.component';
import {MainRoutingModule} from './main-routing.module';

@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    MainRoutingModule,
    CommonModule,
  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class MainModule {
}
