import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

import { TopMenu } from '../../../shared';
import { HomeService } from '../../services';

@Component({
  selector: 'app-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.css']
})
export class HomeContainerComponent implements OnInit {
  topMenus$: Observable<TopMenu[]>;
  selectedTabLink$: Observable<string>;

  constructor(
    private router: Router,
    private service: HomeService,
    private route: ActivatedRoute, // 当前激活的路由
  ) { }

  ngOnInit() {
    this.topMenus$ = this.service.getTabs();
    this.selectedTabLink$ = this.route.firstChild.paramMap.pipe(
      filter(params => params.has('tabLink')),
      map(params => params.get('tabLink'))
    )
  }

  /**
   * 点击首页顶部的 slider-tap 切换子路由
   * @param topMenu 
   */
  handleTabSelected(topMenu: TopMenu): void {
    this.router.navigate(['home', topMenu.link])
  }

}
