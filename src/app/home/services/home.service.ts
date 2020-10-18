import { Injectable } from '@angular/core';
import {
  Ad,
  ImageSlider,
  TopMenu
} from 'src/app/shared';
import {
  Channel
} from '../components';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ParamInterceptor } from '../index';

@Injectable({
  providedIn: 'root' // 自动导入到根模块
})
export class HomeService {
  constructor(
    private http: HttpClient
  ) { }

  /**
   * @return 获取 home页 顶部的 tabs
   */
  public getTabs() {
    return this.http.get<TopMenu[]>(`${environment.baseURL}/tabs`, {
      params: { icode: `123` }
    });
  }

  /**
   * @return 获取 home页 顶部轮播图 imageSliders
   */
  public getBanners() {
    return this.http.get<ImageSlider[]>(`${environment.baseURL}/banners`, {
      params: {
        icode: `123`
      }
    });
  }

  /**
   * @return 获取 home页 轮播图下方 icons
   */
  public getChannels() {
    return this.http.get<Channel[]>(`${environment.baseURL}/channels`, {
      params: {
        icode: `123`
      }
    });
  }

  public getAdByTab(tab: string) {
    return this.http.get<Ad>(`${environment.baseURL}/ads`, {
      params: {
        categories_like: tab,
        icode: '123'
      }
    })
  }
}
