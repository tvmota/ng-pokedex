import { PokemonService } from './../../services/PokemonService';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { forkJoin } from 'rxjs'; // equivalente ao Promise.All

@Component({
  selector: 'app-evolution-list',
  templateUrl: './evolution-list.component.html',
  styleUrls: ['./evolution-list.component.scss']
})
export class EvolutionListComponent implements OnChanges {
  @Input() pknmlist: Array<number>;
  @Input() pkmnid: number;

  evolutionList = [];
  pkmnList = [];
  loading = true;
  noEvolution = true;

  constructor(private pkmnService: PokemonService) {}

  ngOnChanges(changes: SimpleChanges) {
    if (Object.keys(changes.pknmlist.currentValue).length > 0) {
      if (changes.pknmlist.currentValue.chain.evolves_to.length > 0) {
        this.evolutionList.push(changes.pknmlist.currentValue.chain.species);
        this.evolutionList.push(
          changes.pknmlist.currentValue.chain.evolves_to[0].species
        );
        changes.pknmlist.currentValue.chain.evolves_to[0].evolves_to.map(
          item => {
            this.evolutionList.push(
              Object.assign(item.species, item.evolution_details[0])
            );
          }
        );
        this.carregarEvolucoes();
      } else {
        this.noEvolution = false;
      }
    }
  }

  carregarEvolucoes() {
    const pkmnHttp = [];

    this.evolutionList.map(list =>
      pkmnHttp.push(this.pkmnService.procurarPkmn(list.name))
    );
    forkJoin(pkmnHttp).subscribe(resp =>
      resp.map(pkmnresp => {
        this.pkmnList.push(pkmnresp);
        this.loading = false;
      })
    );
  }
}
