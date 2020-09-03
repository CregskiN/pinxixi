import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
    selector: '[appGridItem]'
})
export class GridItemDirective {
    constructor(
        private elem: ElementRef,
        private rd2: Renderer2
    ) { }

    /**
     * 外部属性设置全部完成
     */
    ngOnInit(): void {
        this.rd2.setStyle(this.elem.nativeElement, 'display', 'grid');
        this.rd2.setStyle(this.elem.nativeElement, 'grid-template-areas', `'image' 'title'`);
        this.rd2.setStyle(this.elem.nativeElement, 'place-items', 'center');
        this.rd2.setStyle(this.elem.nativeElement, 'width', '4rem');
    }
}