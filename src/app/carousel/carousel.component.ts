import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-carousel',
  standalone: false,
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})
export class CarouselComponent {
  @Input() carouselId: any = [];
  @Output() itemId = new EventEmitter<number>();

  array:any = [];

  // card transition code
  transitionTime:string = "220ms";
  cubicbezier:string = 'cubic-bezier(0.79, 0.06, 0.37, 0.89)'
  transitioncode:string = `transition: all ${this.transitionTime} ${this.cubicbezier} !important; -o-transition: all ${this.transitionTime} ${this.cubicbezier} !important; -ms-transition: all ${this.transitionTime} ${this.cubicbezier} !important; -moz-transition: all ${this.transitionTime} ${this.cubicbezier} !important; -webkit-transition: all ${this.transitionTime} ${this.cubicbezier} !important;`

  moveNext(){
    let items = document.querySelectorAll(`.item-${this.carouselId[0]}`)
    let boxcont = document.querySelector(`.cont-${this.carouselId[0]}`)

    boxcont!.appendChild(items[0])
  }
  movePrev(){
    let items = document.querySelectorAll(`.item-${this.carouselId[0]}`)
    let boxcont = document.querySelector(`.cont-${this.carouselId[0]}`)

    boxcont!.prepend(items[items.length - 1])
  }
  ngOnInit(){
    this.itemId.emit(this.carouselId);
    this.array = this.carouselId[1]

    document.addEventListener("DOMContentLoaded", () => {
      let items:any = document.querySelectorAll(`.item-${this.carouselId[0]}`)
      items.forEach((item: any) => item.setAttribute("style", this.transitioncode) )
    })
    
  }

}
interface OnInit {
  ngOnInit(): void;
}