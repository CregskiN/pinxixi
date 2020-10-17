import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Observable, Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';

import { ImageSlider } from '../../../shared';
import { HomeService } from '../../services';

export interface Channel {
  id: number;
  icon: string;
  title: string;
  link: string; // 跳转 URL
}

@Component({
  selector: 'app-home-detail',
  templateUrl: './home-detail.component.html',
  styleUrls: ['./home-detail.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeDetailComponent implements OnInit, OnDestroy {
  imageSliders$: Observable<ImageSlider[]>;
  channels$: Observable<Channel[]>;
  selectedTabLink$: Observable<string>; // 当前路由的路由参数
  sub: Subscription;

  constructor(
    private route: ActivatedRoute,
    private service: HomeService,
    private cd: ChangeDetectorRef,
  ) { }

  ngOnInit(): void {
    this.selectedTabLink$ = this.route.paramMap.pipe(
      filter(params => params.has('tabLink')), // 为真，放行，为假，拦截
      map(params => params.get('tabLink')) // 获取 tabLink
    )

    this.sub = this.route.queryParamMap.subscribe(params => {
      console.log("切换子路由 查询参数 queryParams", params);
      this.cd.markForCheck();
    });

    this.imageSliders$ = this.service.getBanners();
    this.channels$ = this.service.getChannels();
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }


}
