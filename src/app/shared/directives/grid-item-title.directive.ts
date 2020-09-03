import { Directive, ElementRef, Renderer2, OnInit, Input } from '@angular/core';

@Directive({ selector: '[appGridItemTitle]' })
export class GridItemTitle implements OnInit {
	@Input() appGridItemTitle: string;

	constructor(
		private elem: ElementRef,
		private rd2: Renderer2
	) { }

	ngOnInit(): void {
		this.rd2.setStyle(this.elem.nativeElement, 'grid-area', 'title');
		this.rd2.setStyle(this.elem.nativeElement, 'font-size', this.appGridItemTitle);
		this.rd2.setStyle(this.elem.nativeElement, 'white-space', 'no-wrap');
	}

}