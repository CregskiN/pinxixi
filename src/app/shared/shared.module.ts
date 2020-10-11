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

import {
  AgoPipe
} from './pipes';

@NgModule({
  declarations: [
    ScrollableTabComponent,
    ImageSliderComponent,
    HorizontalGridComponent,
    GridItemDirective,
    GridItemImage,
    GridItemTitle,
    AgoPipe
  ],
  imports: [
    CommonModule, FormsModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ScrollableTabComponent,
    ImageSliderComponent,
    HorizontalGridComponent,
    GridItemDirective,
    GridItemImage,
    GridItemTitle,
    AgoPipe
  ]
})
export class SharedModule { }
