import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AddPreferenceComponent} from './add-preference.component';

const routes: Routes = [
  {
    path: '',
    component: AddPreferenceComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddPreferenceRoutingModule {
}
