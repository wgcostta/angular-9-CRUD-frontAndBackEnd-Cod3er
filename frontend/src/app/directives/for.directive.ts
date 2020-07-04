import { Directive, OnInit, Input } from '@angular/core';

@Directive({
  selector: '[myFor]'
})
export class ForDirective implements OnInit {

  @Input('myForEm') numbers: number[]
  @Input('myForusando') texto: string
  constructor() {
    console.log('MyFor')
  }
  ngOnInit(): void {
    console.log(this.texto)
    console.log(this.numbers)
  }
}
