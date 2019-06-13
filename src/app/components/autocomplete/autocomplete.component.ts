import { Component, Output, EventEmitter } from '@angular/core';
import { PokemonService } from './../../services/PokemonService';

@Component({
  selector: 'app-auto-complete',
  templateUrl: './autocomplete.component.html',
  styles: [' .form-autocomplete-rads { border-radius: 25px; ']
})
export class AutocompleteComponent {
  @Output() selectedItem = new EventEmitter();
  resultados: Array<object> = [];
  selecionados: Array<object> = [];
  pokemonService: PokemonService;
  loadingIcon = false;
  erros = false;

  constructor(pokemonService: PokemonService) {
    this.pokemonService = pokemonService;
  }

  procurar(pkmn: string) {
    this.loadingIcon = true;
    this.pokemonService.procurarPkmn(pkmn).subscribe(
      resp => {
        if (resp) {
          this.resultados[0] = resp;
        }
        this.loadingIcon = false;
      },
      err => {
        this.erros = true;
        this.loadingIcon = false;
        console.error(err);
      }
    );
  }

  limparResultados() {
    setTimeout(() => {
      this.resultados = [];
      this.erros = false;
    }, 1000);
  }

  getSelectedItem(item) {
    this.selectedItem.emit(item);
  }
}