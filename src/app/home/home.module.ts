import { NgModule } from '@angular/core';

import { HomeRoutingModule } from './home-routing.module';

import { SharedModule } from '../shared';
import { HomeContainerComponent } from './components';
import { HomeDetailComponent } from './components/home-detail/home-detail.component';
import { HomeGrandComponent } from './components/home-grand/home-grand.component';
import { HomeAuxComponent } from './components/home-aux/home-aux.component';

@NgModule({
  // Home 模块下的组件 ng generate component [path/component] 自动导入
  declarations: [
    HomeContainerComponent,
    HomeDetailComponent,
    HomeGrandComponent,
    HomeAuxComponent
  ],
  // Home 模块下引入的 Model
  imports: [
    SharedModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
