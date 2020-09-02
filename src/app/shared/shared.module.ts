import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {
  ScrollableTabComponent,
  ImageSliderComponent,
  HorizontalGridComponent,
} from './components';

import {
  GridItemDirective,
  GridItemImage,
  GridItemTitle
} from './directives';


@NgModule({
  declarations: [
    ScrollableTabComponent,
    ImageSliderComponent,
    HorizontalGridComponent,
    GridItemDirective,
    GridItemImage,
    GridItemTitle
  ],
  imports: [
    CommonModule, FormsModule
  ],
  exports: [
    CommonModule, FormsModule,
    ScrollableTabComponent, ImageSliderComponent, HorizontalGridComponent,
    GridItemDirective, GridItemImage, GridItemTitle
  ]
})
export class SharedModule { }
