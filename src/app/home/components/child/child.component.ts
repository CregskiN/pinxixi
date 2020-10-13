import { formatDate } from '@angular/common';
import { AfterViewChecked, Component, ElementRef, NgZone, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, AfterViewChecked {
  _title: string;
  _time: number;
  @ViewChild('timeRef', { static: true }) timeRef: ElementRef;
  constructor(
    private ngZone: NgZone,
    private rd: Renderer2
  ) {
    this._title = 'hi';
  }

  ngOnInit(): void {
    // this._time = Date.now();
  }

  ngAfterViewChecked() {
    this.ngZone.runOutsideAngular(() => { // 同步操作
      setInterval(() => {
        this.rd.setProperty(this.timeRef.nativeElement, 'innerHTML', formatDate(Date.now(), 'HH:mm:ss:SSS', 'zh-Hans'));
      }, 100);
    })
  }
  handleClick() {
    console.log('触发');

  }


  public get time(): number {
    return this._time;
  }


  public get title(): string {
    console.log('脏值检测');
    return this._title;
  }


}
