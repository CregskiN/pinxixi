import { Directive, ElementRef, Renderer2, Input, OnInit } from '@angular/core';

@Directive({
	selector: '[appGridItemImage]'
})
export class GridItemImage implements OnInit {
	@Input() appGridItemImage: string = '2rem'; // <div appGridItemTitle="Xrem">

	constructor(
		private elem: ElementRef,
		private rd2: Renderer2
	) { }

	ngOnInit(): void {
		this.rd2.setStyle(this.elem.nativeElement, 'grid-area', 'image');
		this.rd2.setStyle(this.elem.nativeElement, 'width', this.appGridItemImage);
		this.rd2.setStyle(this.elem.nativeElement, 'height', this.appGridItemImage);
		this.rd2.setStyle(this.elem.nativeElement, 'object-fit', 'cover');
	}
}