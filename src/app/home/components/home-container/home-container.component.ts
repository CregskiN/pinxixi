import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { TopMenu } from '../../../shared';
import { topMenus } from '../../../data';
import { HomeService, token } from '../../services';

@Component({
  selector: 'app-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.css']
})
export class HomeContainerComponent implements OnInit {
  topMenus: TopMenu[] = topMenus;
  username = '';
  @Inject(token) private baseURL: string;
  constructor(
    private router: Router,
    private service: HomeService
  ) { }

  ngOnInit() {
    this.topMenus = this.service.getTabs();
    console.log(this.baseURL); // 
    
  }

  /**
   * 点击首页顶部的 slider-tap 切换子路由
   * @param topMenu 
   */
  handleTabSelected(topMenu: TopMenu): void {
    this.router.navigate(['home', topMenu.link])

  }

}
