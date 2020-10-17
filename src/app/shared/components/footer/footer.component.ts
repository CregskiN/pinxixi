import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { TabItem } from '../../domain';

/**
 * 设计策略：
 * 1. 事件处理逻辑交给上层组件，使用 @Output()
 * 2. 笨组件，使用 onPush 策略
 */

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent implements OnInit {
  tabItems: TabItem[] = [{
    title: '首页',
    icon: '/assets/tabs/home.png',
    link: 'home',
    selectedIcon: '/assets/tabs/home_selected.png'
  },
  {
    title: '推荐',
    icon: '/assets/tabs/recommend.png',
    link: 'recommend',
    selectedIcon: '/assets/tabs/recommend_selected.png'
  },
  {
    title: '分类',
    icon: '/assets/tabs/category.png',
    link: 'category',
    selectedIcon: '/assets/tabs/category_selected.png'
  },
  {
    title: '聊天',
    icon: '/assets/tabs/chat.png',
    link: 'chat',
    selectedIcon: '/assets/tabs/chat_selected.png'
  },
  {
    title: '个人中心',
    icon: '/assets/tabs/my.png',
    link: 'my',
    selectedIcon: '/assets/tabs/my_selected.png'
  }];

  @Input() selectedIndex: number = 0;
  @Output() tabSelected = new EventEmitter();

  constructor() { }

  ngOnInit(): void { }

  /**
   * 点击 footer 切换
   * @param idx 
   */
  toogleSelectedTab(idx: number) {
    this.selectedIndex = idx;
    this.tabSelected.emit(this.tabItems[idx]);
  }

}
