import { Directive, ElementRef, Renderer2, Input, OnInit, HostListener } from '@angular/core';

@Directive({
	selector: '[appGridItemImage]'
})
export class GridItemImage implements OnInit {
	@Input() appGridItemImage = '2rem'; // <div appGridItemTitle="Xrem">

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

	@HostListener('click', ['$event.target'])
	handleClick(ev): void {
		console.log(ev);
	}
}