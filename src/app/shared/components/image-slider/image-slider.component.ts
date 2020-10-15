import {
  Component,
  OnInit,
  AfterViewInit,
  Input,
  ViewChild,
  ElementRef,
  Renderer2,
  OnDestroy,
  ChangeDetectionStrategy,
} from '@angular/core';

export interface ImageSlider {
  id: number;
  imgURL: string;
  link: string;
  caption: string; // 周年庆xxx 文字
}

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ImageSliderComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input() sliders: ImageSlider[] = [];
  @Input() sliderHeight: string = '160px';
  @Input() intervalBySeconds: number = 2;
  @ViewChild('imageSlider', { static: true }) imageSlider: ElementRef; // 不在ngFor/ngIf内，则为静态

  selectedIndex: number = 0;
  intervalId: number; // 防止内存泄漏

  constructor(
    private rd2: Renderer2
  ) { }

  ngOnInit(): void {

  }

  /**
   * 完全加载完成。
   * 可用 @ViewChild @ViewChildren 获取 DOM ref
   */
  ngAfterViewInit(): void {
    if (this.intervalBySeconds <= 0) {
      return;
    }
    this.intervalId = setInterval(() => {
      this.rd2.setProperty(this.imageSlider.nativeElement, 'scrollLeft', (this.getIndex(++this.selectedIndex) * this.imageSlider.nativeElement.scrollWidth) / this.sliders.length);
    }, this.intervalBySeconds * 1000);
  }

  getIndex(idx: number): number {
    return idx >= 0 ? idx % this.sliders.length : this.sliders.length - (Math.abs(idx) % this.sliders.length);
  }

  handleScroll(ev) {
    const ratio = ev.target.scrollLeft / (ev.target.scrollWidth / this.sliders.length);
    this.selectedIndex = Math.round(ratio);
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }




}
