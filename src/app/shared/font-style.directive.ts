import { Directive, ElementRef, Renderer2, Input } from '@angular/core';


@Directive({
  selector: '[appFontStyle]'
})
export class FontStyleDirective {
  @Input() fontSize: string = '20px'; 
  @Input() fontColor: string = 'green';
  @Input() marginLeft: string = '20px';
constructor(private el: ElementRef, private renderer: Renderer2) {} 
ngOnInit() {
  this.renderer.setStyle(this.el.nativeElement, 'font-size',this.fontSize);
  this.renderer.setStyle(this.el.nativeElement, 'color', this.fontColor);
  this.renderer.setStyle(this.el.nativeElement, 'margin-left', this.marginLeft);
}
}
