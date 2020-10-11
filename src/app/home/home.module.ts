import { NgModule } from '@angular/core';

import { HomeRoutingModule } from './home-routing.module';

import { SharedModule } from '../shared';
import {
  HomeContainerComponent,
  HomeDetailComponent,
  HomeGrandComponent,
  HomeAuxComponent
} from './components';
import { HomeService } from './services';


@NgModule({
  // component  // ng generate component [path/component] 自动导入
  declarations: [
    HomeContainerComponent,
    HomeDetailComponent,
    HomeGrandComponent,
    HomeAuxComponent
  ],
  // Model
  imports: [
    SharedModule,
    HomeRoutingModule
  ],
  // service 提供者 DI
  providers: [
    HomeService,
  ]
})
export class HomeModule { }
