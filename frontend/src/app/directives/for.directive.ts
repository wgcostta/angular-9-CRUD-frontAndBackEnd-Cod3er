import { Directive, OnInit, Input, ViewContainerRef, TemplateRef } from '@angular/core';

@Directive({
  selector: '[myFor]'
})
export class ForDirective implements OnInit {

  @Input('myForBrasil') numbers: number[];
  constructor(
    private container: ViewContainerRef,
    private template: TemplateRef<any>

  ) {
    console.log('MyFor')
  }
  ngOnInit(): void {
    for (let number of this.numbers) {
      // this.container.createEmbeddedView(
      //  this.template, { $implicit: number });
    }

    console.log(this.numbers)
  }
}
