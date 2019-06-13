import { forkJoin } from 'rxjs';
import { PokemonService } from './../../services/PokemonService';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { BadgeComponent } from '../../components/card/badge/badge.component';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail.component.html',
  styles: ['.detail-title { justify-content: space-around; align-items: center }']
})
export class DetailPageComponent {
  pkmnHttp = [];
  pkmnLoad = false;
  pkmn = {};
  pkmnSpecie = {};
  pkmnDescription = {};
  pkmnEntries = {};
  pkmnEvolutions = {};
  math = Math;

  constructor(
    private rota: ActivatedRoute,
    private pkmnService: PokemonService
  ) {
    const patt = new RegExp(/\d{1,}(?!\d|.*\d{1,})/g);
    let idEvolutions = [];

    rota.params.subscribe(param => {
      if (param.id) {
        this.pkmnHttp.push(pkmnService.procurarPkmn(param.id));
        this.pkmnHttp.push(pkmnService.obterEspecie(param.id));

        forkJoin(this.pkmnHttp).subscribe(resp => {
          this.pkmn = resp[0];
          this.pkmnSpecie = resp[1];
          // tslint:disable-next-line:no-string-literal
          idEvolutions = patt.exec(this.pkmnSpecie['evolution_chain']['url']);
          // tslint:disable-next-line:no-string-literal
          this.pkmnDescription = this.pkmnSpecie['flavor_text_entries'].find(
            entrie => entrie.language.name === 'en'
          ).flavor_text;
          this.pkmnLoad = true;
          this.pkmnService
            .obterEvolucoes(idEvolutions[0])
            .subscribe(resp => (this.pkmnEvolutions = resp));
        });
      }
    });
  }
}
