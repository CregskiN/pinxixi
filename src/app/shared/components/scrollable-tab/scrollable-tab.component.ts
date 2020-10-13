import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

export interface TopMenu {
  id: number;
  title: string;
  link: string;
}

@Component({
  selector: 'app-scrollable-tab',
  templateUrl: './scrollable-tab.component.html',
  styleUrls: ['./scrollable-tab.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ScrollableTabComponent implements OnInit {
  @Input() menus: TopMenu[] = [];
  @Output() tabSelected = new EventEmitter();

  selectedIndex: number = 0;

  constructor() { }

  ngOnInit(): void {
  }



  /**
   * 头部 menu 点击事件
   * 1. 改变selectedIndex
   * 2. 向父组件传递被转中的 menu
   * @param index 
   */
  handleSelection(index: number): void {
    this.selectedIndex = index;
    this.tabSelected.emit(this.menus[this.selectedIndex]);
  }

}
