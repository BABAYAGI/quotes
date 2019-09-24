import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appSrikethrough]'
})
export class SrikethroughDirective {
 
  constructor(private elem:ElementRef) { this.elem.nativeElement.style.textDecoration='line-through'; }

}
