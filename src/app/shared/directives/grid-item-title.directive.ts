import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({ selector: '[appGridItemTitle]' })
export class GridItemTitle {
    constructor(
        private elem: ElementRef,
        private rd2: Renderer2
    ) {
        this.rd2.setStyle(this.elem.nativeElement, 'grid-area', 'title');
     }
}