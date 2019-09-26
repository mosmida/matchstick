import {Directive, AfterViewInit, ElementRef} from '@angular/core';
import {WindowRef} from '../../core/services/window-ref.service';


@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements AfterViewInit {

  constructor (private el: ElementRef, private windowRef: WindowRef) {
  }

  ngAfterViewInit () {
    this.windowRef.nativeWindow['hljs'].highlightBlock(this.el.nativeElement);
  }

}
