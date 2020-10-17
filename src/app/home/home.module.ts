import { NgModule } from '@angular/core';

import { HomeRoutingModule } from './home-routing.module';

import { SharedModule } from '../shared';
import {
  HomeContainerComponent,
  HomeDetailComponent,
  HomeGrandComponent,
  HomeAuxComponent,
  ParentComponent
} from './components';
import { token } from './services';


@NgModule({
  // component  // ng generate component [path/component] 自动导入
  declarations: [
    HomeContainerComponent,
    HomeDetailComponent,
    HomeGrandComponent,
    HomeAuxComponent,
    ParentComponent,
  ],
  // Model
  imports: [
    SharedModule,
    HomeRoutingModule
  ],
  // service 提供者 DI
  providers: [
    // HomeService, // HomeService 使用 porvideIn: "root" 无需在此导入
    {
      provide: token,
      useValue: 'http://localdev'
    }
  ]
})
export class HomeModule { }
