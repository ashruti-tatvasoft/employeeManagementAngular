import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appChangeColor]'
})
export class ChangeColorDirective implements OnInit {

  @Input('appChangeColor') option:any; 
  constructor(private el: ElementRef) {}
  ngOnInit(): void {
    if(!this.option.isActive){
      this.el.nativeElement.style.color = 'Red'
    }
    else{
      this.el.nativeElement.style.color = 'Green'
    }
  }
 
}
