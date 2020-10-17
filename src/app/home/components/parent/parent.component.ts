import {
  Component,
  ElementRef,
  OnInit,
  ViewChild
} from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  @ViewChild('inputRef', { static: true }) inputRef: ElementRef;
  startDate: Date = new Date(2019, 6, 1);
  futureDate: Date = new Date(2019, 6, 2);
  constructor() { }

  ngOnInit(): void {
    // 把事件或数据看成一个流
    // 响应式编程 - 随着事件流中元素的变化随之作出相应的动作
    fromEvent(this.inputRef.nativeElement, 'input')
      .subscribe((ev: any) => {
        console.log(ev.target.value);
      })
  }

}
