import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { registerLocaleData } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import localZh from '@angular/common/locales/zh-Hans';

import { AppComponent } from './app.component';
import { SharedModule } from './shared';
import { AppRoutingModule } from './app-routing.module';
import {
  HomeModule,
  NotificationInterceptor,
  ParamInterceptor
} from './home';
import {
  RecommendModule
} from './recommend';
import {
  CategoryModule
} from './category';
import {
  ChatModule
} from './chat';
import {
  MyModule
} from './my';


@NgModule({
  declarations: [ // root module
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    SharedModule,
    AppRoutingModule,
    HomeModule,
    RecommendModule,
    CategoryModule,
    ChatModule,
    MyModule,
    HttpClientModule, // 在根模块导入，子模块都可以导入
  ],
  providers: [{
    provide: LOCALE_ID,
    useValue: 'zh-Hans'
  }, {
    provide: HTTP_INTERCEPTORS, // 多处使用
    useClass: ParamInterceptor,
    multi: true // 多处使用
  }, {
    provide: HTTP_INTERCEPTORS,
    useClass: NotificationInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    registerLocaleData(localZh, 'zh-Hans')
  }
}
