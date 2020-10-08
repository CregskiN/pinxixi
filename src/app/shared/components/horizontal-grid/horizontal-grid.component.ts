import { Component, OnInit, Input } from '@angular/core';

export interface Channel {
  id: number;
  icon: string;
  title: string;
  link: string; // 跳转 URL
}

@Component({
  selector: 'app-horizontal-grid',
  templateUrl: './horizontal-grid.component.html',
  styleUrls: ['./horizontal-grid.component.css']
})
export class HorizontalGridComponent implements OnInit {
  @Input() cols: number = 8;
  @Input() displayCols: number = 5;
  sliderMargin: string = '0';

  constructor() { }

  ngOnInit(): void {
    
  }

  /**
   * 当前列数 > 一行的列数，可滚动
   */
  public get scrollable(): boolean {
    return this.cols > this.displayCols;
  }


  /**
   * 返回可视化行数
   * @return CSS-Style
   */
  public get templateRows(): string {
    return `minmax(auto, max-content)`;
  }


  /**
   * 返回可视化列数
   */
  public get templateColmns(): string {
    return `repeat(${this.cols}, calc((100vw - ${this.displayCols * 0.4}rem) / ${this.displayCols}))`;
  }


}
