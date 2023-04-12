import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[Vrow]'
})
export class VrowDirective {

  constructor(el:ElementRef) { 
    el.nativeElement.style.cssText="display:flex; flex-direction:row";
  }

}
