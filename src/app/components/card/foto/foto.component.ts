import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-foto',
  templateUrl: './foto.component.html'
})
export class FotoComponent {
  constructor() {}

  @Input() titulo;
  @Input() url;
  @Output() imgClicked = new EventEmitter();

  imgClick() {
    this.imgClicked.emit(true);
  }
}
