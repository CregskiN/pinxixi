import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ScrollableTabComponent } from './components';
import { ImageSliderComponent } from './components';
import { HorizontalGridComponent } from './components';

@NgModule({
  declarations: [ // root module
    AppComponent,
    ScrollableTabComponent,
    ImageSliderComponent,
    HorizontalGridComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
