import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ShowPreferenceComponent} from './show-preference.component';

const routes: Routes = [
  {
    path: '',
    component: ShowPreferenceComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShowPreferenceRoutingModule {
}
