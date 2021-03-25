import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        loadChildren: () => import('./pages/main/main.module').then((module) => module.MainModule)
      },
      {
        path: 'contact',
        loadChildren: () => import('./pages/contact/contact.module').then((module) => module.ContactModule)
      },
      {
        path: 'add-preference',
        loadChildren: () => import('./pages/add-preference/add-preference.module').then((module) => module.AddPreferenceModule)
      },
      {
        path: 'show-preference',
        loadChildren: () => import('./pages/show-preference/show-preference.module').then((module) => module.ShowPreferenceModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
