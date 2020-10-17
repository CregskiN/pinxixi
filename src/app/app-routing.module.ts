import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {
  HomeContainerComponent,
  HomeDetailComponent,
  HomeGrandComponent,
  HomeAuxComponent,
} from './home';
import {
  RecommendContainerComponent
} from './recommend';
import {
  CategoryContainerComponent
} from './category';
import {
  ChatContainerComponent
} from './chat';
import {
  MyContainerComponent
} from './my';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full', // 完全匹配'' 时，重定向到home
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
  {
    path: 'recommend',
    component: RecommendContainerComponent,
  },
  {
    path: 'category',
    component: CategoryContainerComponent
  },
  {
    path: 'chat',
    component: ChatContainerComponent
  },
  {
    path: 'my',
    component: MyContainerComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)], // 根模块使用 forRoot 其他使用 forChild // 激活路由事件
  exports: [RouterModule]
})
export class AppRoutingModule { }
