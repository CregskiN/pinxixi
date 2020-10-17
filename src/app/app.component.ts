import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

import { TabItem } from './shared/domain';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  selectedIndex$: Observable<number>; // 外部输入，由路由流获取。问题：路由获取的是string，而不是number

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    // 监听路由事件
    this.selectedIndex$ = this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map((event: NavigationEnd) => {
        const arr = event.url.split('/');
        // console.warn('抓取到路由NavigationEnd事件',event); // 抓取到路由NavigationEnd事件
        return arr.length > 1 ? arr[1] : 'home';
      }),
      map(path => this._getSelectedIndex(path))
    )
  }
  /**
   * 响应 footer 输出的选择事件
   * @param tab 
   */
  handleTabSelect(tab: TabItem) {
    this.router.navigate([tab.link]);
  }

  /**
   * 辅助函数，获取路由中特定页面在 footer 中的下标
   * @param tab 
   */
  private _getSelectedIndex(tab: string): number {
    return tab === 'recommend' ? 1
      : tab === 'category' ? 2
        : tab === 'chat' ? 3
          : tab === 'my' ? 4
            : 0
  }



}
