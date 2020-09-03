import { Directive, ElementRef, Renderer2, OnInit } from '@angular/core';

@Directive({ selector: '[appGridItemTitle]' })
export class GridItemTitle implements OnInit {
	
	constructor(
		private elem: ElementRef,
		private rd2: Renderer2
	) { }

	ngOnInit(): void {
		this.rd2.setStyle(this.elem.nativeElement, 'grid-area', 'title');
	}
}