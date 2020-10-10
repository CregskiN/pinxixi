import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { TopMenu } from '../../../shared';
import { topMenus } from '../../../data';




@Component({
  selector: 'app-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.css']
})
export class HomeContainerComponent implements OnInit {

  topMenus: TopMenu[] = topMenus;
  username = '';

  constructor(private router: Router) { }

  ngOnInit() {

  }

  /**
   * 点击首页顶部的 slider-tap 切换子路由
   * @param topMenu 
   */
  handleTabSelected(topMenu: TopMenu): void {
    this.router.navigate(['home', topMenu.link])

  }

}
