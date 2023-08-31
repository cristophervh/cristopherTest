import { Component } from '@angular/core';

@Component({
  selector: 'app-contenido',
  templateUrl: './contenido.component.html',
  styleUrls: ['./contenido.component.css']
})


export class ContenidoComponent {

  array:any = [];
  sum:number = 100;
  throttle:number = 300;
  scrollDistance:number = 1;
  scrollUpDistance:number = 2;
  direction:string = "";
  modalOpen:boolean = false;

  constructor() {
    this.appendItems(0, this.sum);
  }

  addItems(startIndex:any, endIndex:any, _method:any) {
    for (let i = 0; i < this.sum; ++i) {
      this.array[_method]([i, " ", this.generateWord()].join(""));
    }
  }

  appendItems(startIndex:any, endIndex:any) {
    this.addItems(startIndex, endIndex, "push");
  }

  prependItems(startIndex:any, endIndex:any) {
    this.addItems(startIndex, endIndex, "unshift");
  }

  onScrollDown(ev:any) {
    console.log("scrolled down!!", ev);

    // add another 20 items
    const start = this.sum;
    this.sum += 20;
    this.appendItems(start, this.sum);

    this.direction = "down";
  }

  onUp(ev:any) {
    console.log("scrolled up!", ev);
    const start = this.sum;
    this.sum += 20;
    this.prependItems(start, this.sum);

    this.direction = "up";
  }
  generateWord() {
    //return chance.word();
  }

  toggleModal() {
    this.modalOpen = !this.modalOpen;
  }


}
