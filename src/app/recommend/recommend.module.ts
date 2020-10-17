import { NgModule } from '@angular/core';

import { RecommendRoutingModule } from './recommend-routing.module';

import { SharedModule } from '../shared/shared.module';
import { RecommendContainerComponent } from './components/recommend-container/recommend-container.component';
import { RecommendDetailComponent } from './components/recommend-detail/recommend-detail.component';

@NgModule({
  declarations: [RecommendContainerComponent, RecommendDetailComponent],
  imports: [
    SharedModule,
    RecommendRoutingModule
  ]
})
export class RecommendModule { }
