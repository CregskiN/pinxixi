import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { imageSliders, channels } from '../../../data';
import { ImageSlider } from '../../../shared';

export interface Channel {
  id: number;
  icon: string;
  title: string;
  link: string; // 跳转 URL
}

@Component({
  selector: 'app-home-detail',
  templateUrl: './home-detail.component.html',
  styleUrls: ['./home-detail.component.css']
})
export class HomeDetailComponent implements OnInit {
  imageSliders: ImageSlider[] = imageSliders;
  channels: Channel[] = channels;
  selectedTabLink: string; // 当前路由的路由参数

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => { // rxjs 订阅
      console.log("切换子路由 路径参数 pathParams", params);
      this.selectedTabLink = params.get('tabLink');
    });
    this.route.queryParamMap.subscribe(params => {
      console.log("切换子路由 查询参数 queryParams", params);
    });
  }

}
