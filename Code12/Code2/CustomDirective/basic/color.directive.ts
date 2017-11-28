import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[myColor]'
})


export class ColorDirective implements OnInit {
  constructor(private elementRef: ElementRef) {
  }

  ngOnInit() {
    this.elementRef.nativeElement.style.backgroundColor = 'green';
  }
}
