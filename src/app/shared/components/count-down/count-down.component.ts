import { Component, Input, OnInit } from '@angular/core';
import { interval, Observable } from 'rxjs';
import { map, takeWhile, tap } from 'rxjs/operators';

@Component({
  selector: 'app-count-down',
  templateUrl: './count-down.component.html',
  styleUrls: ['./count-down.component.css']
})
export class CountDownComponent implements OnInit {
  @Input() startDate: Date; // 起始时间
  @Input() futureDate: Date; // 到期时间
  countDown$: Observable<string>; // 显示
  private _MS_PRE_SECOND: number = 1000;

  constructor() { }

  ngOnInit(): void {
    this.countDown$ = interval(1000).pipe(
      map(elapse => this.diffInSec(this.startDate, this.futureDate) - elapse),
      takeWhile(gap => gap >= 0),
      // tap(val => console.log(val)), // 在流之间作出操作
      map(sec => ({
        day: Math.floor(sec / 3600 / 24),
        hour: Math.floor(sec / 3600),
        minute: Math.floor(sec / 60) % 60,
        second: Math.floor(sec % 60)
      })),
      map(({ hour, minute, second }) => `${hour}:${minute}:${second}`)
    )
  }

  /**
   * 计算秒差
   * @param start 
   * @param future 
   * @return 时间差(s)
   */
  private diffInSec(start: Date, future: Date): number {
    const diff = future.getTime() - start.getTime(); // 毫秒值差
    return Math.floor(diff / this._MS_PRE_SECOND);
  }

}
