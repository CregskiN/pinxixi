import { Injectable } from '@angular/core';
import {
  ImageSlider,
  TopMenu
} from 'src/app/shared';
import {
  channels,
  imageSliders,
  topMenus
} from 'src/app/data';
import {
  Channel,
} from '../components';


@Injectable({
  providedIn: 'root' // 自动导入到根模块
})
export class HomeService {
  topMenus: TopMenu[] = [];
  imageSliders: ImageSlider[] = [];
  channels: Channel[] = [];

  constructor() {
    this.topMenus = topMenus;
    this.imageSliders = imageSliders;
    this.channels = channels;
  }

  /**
   * @return 获取首页顶部的 tabs
   */
  public getTabs() {
    return this.topMenus;
  }

  /**
   * @return 获取轮播图 imageSliders
   */
  public getBanners() {
    return this.imageSliders;
  }

  /**
   * @return 获取轮播图下方 icons
   */
  public getChannels() {
    return this.channels;
  }
}
