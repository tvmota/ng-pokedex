import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html'
})
export class CardComponent implements OnInit {
  @Input() pkmn;
  @Output() pkmnid = new EventEmitter();

  destruido = false;
  constructor() {}

  ngOnInit() {}

  destruirCiclo() {
    this.destruido = true;
  }

  returnId(id) {
    this.pkmnid.emit(id);
  }

  getImgClicked(evt) {
    this.pkmnid.emit(this.pkmn.id);
  }
}
