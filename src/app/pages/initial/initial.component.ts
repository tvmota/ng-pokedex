import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/PokemonService';
import { forkJoin } from 'rxjs'; // equivalente ao Promise.All
import { Router } from '@angular/router';

@Component({
  selector: 'app-initial-page',
  templateUrl: './initial.component.html',
})
export class InitialPageComponent implements OnInit {
  pokemonService: PokemonService;

  randomPkmn: Array<object> = [];

  constructor(pokemonService: PokemonService, private router: Router) {
    this.pokemonService = pokemonService;
    /*let pkmonhttp = []
    this.pokemonService = pokemonService
    Array
      .from({length: 9}, () => this.pokemonService.procurarPorId(Math.floor(Math.random() * 250))
      .subscribe(pkmn => this.randomPkmn.push(pkmn)))
    Array.from({length:9}, () => pkmonhttp.push(this.pokemonService.procurarPorId(Math.floor(Math.random() * 250))))
    forkJoin(pkmonhttp).subscribe(results => results.map(result => this.randomPkmn.push(result)))*/
  }

  ngOnInit() {
    const pkmonhttp = [];
    const pkmonList = [];

    Array.from({ length: 9 }, () => {
      const num = Math.floor(Math.random() * 251) + 1;
      if (pkmonList.indexOf(num) < 0) {
        pkmonList.push(num);
      }
    });

    pkmonList.forEach(num =>
      pkmonhttp.push(this.pokemonService.procurarPkmn(num))
    );

    forkJoin(pkmonhttp).subscribe(results =>
      results.map(result => this.randomPkmn.push(result))
    );
  }

  getAutoCompleteItem(item) {
    this.getPkmnId(item.id);
  }

  getPkmnId(id) {
    this.router.navigate(['/detail', id]);
  }
}
