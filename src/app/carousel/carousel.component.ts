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

  moveNext(){
    let items = document.querySelectorAll(`.item-${this.carouselId[0]}`)
    let boxcont = document.querySelector(`.cont-${this.carouselId[0]}`)

    boxcont?.appendChild(items[0])
  }
  movePrev(){
    let items = document.querySelectorAll(`.item-${this.carouselId[0]}`)
    let boxcont = document.querySelector(`.cont-${this.carouselId[0]}`)

    boxcont?.prepend(items[items.length - 1])
  }
  
  

  ngOnInit(){
    this.itemId.emit(this.carouselId);
    this.array = this.carouselId[1]
  }

}
interface OnInit {
  ngOnInit(): void;
}