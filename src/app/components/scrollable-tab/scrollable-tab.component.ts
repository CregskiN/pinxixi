import { Component, OnInit, Input, Output, EventEmitter, DoCheck } from '@angular/core';

export interface TopMenu {
  title: string;
  link: string;
}

@Component({
  selector: 'app-scrollable-tab',
  templateUrl: './scrollable-tab.component.html',
  styleUrls: ['./scrollable-tab.component.css']
})
export class ScrollableTabComponent implements OnInit {
  @Input() menus: TopMenu[] = [];
  @Input() backgroundColor: string = '#fff';
  @Input() titleActiveColor: string = 'yellow';
  @Input() titleColor: string = 'blue';
  @Input() indicatorColor: string = 'brown';
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
