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
  @Input() selectedTabLink: string;
  @Output() tabSelected = new EventEmitter();

  constructor() { }

  ngOnInit(): void { }



  /**
   * 头部 menu 点击事件
   * 向父组件传递被转中的 menu
   * @param index 
   */
  handleSelection(index: number): void {
    this.tabSelected.emit(this.menus[index]);
  }

}
