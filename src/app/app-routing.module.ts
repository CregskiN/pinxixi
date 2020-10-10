import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {
  HomeContainerComponent,
  HomeDetailComponent,
  HomeGrandComponent,
  HomeAuxComponent
} from './home';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full' // 完全匹配'' 时，重定向到home
  },
  {
    path: 'home',
    component: HomeContainerComponent,
    children: [
      {
        path: '',
        redirectTo: 'hot',
        pathMatch: 'full'
      },
      {
        path: ':tabLink',
        component: HomeDetailComponent,
        children: [
          {
            path: 'aux',
            component: HomeAuxComponent,
            outlet: 'second'
          },
          {
            path: 'grand',
            component: HomeGrandComponent
          }
        ]
      }
    ]
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)], // 根模块使用 forRoot 其他使用 forChild
  exports: [RouterModule]
})
export class AppRoutingModule {

}
