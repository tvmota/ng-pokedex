import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PokemonService {
  private baseUrl = 'https://pokeapi.co/api/v2';
  private http: HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
  }

  procurarPkmn(param) {
    return this.http
      .get(`${this.baseUrl}/pokemon/${param}/`);
      // .map(pkmn => pkmn.json());
  }

  obterEspecie(param) {
    return this.http
      .get(`${this.baseUrl}/pokemon-species/${param}/`);
      // .map(pkmn => pkmn.json());
  }

  obterEvolucoes(param) {
    return this.http
      .get(`${this.baseUrl}/evolution-chain/${param}`);
      // .map(evolution => evolution.json());
  }

  obterTipos() {
    return this.http.get(`${this.baseUrl}/type/`);
    // .map(types => types.json());
  }
}
