import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { ReqResponse } from '../interfaces/Tipo-pokemon';
import { ReqResponseImage } from '../interfaces/Imagen-Pokemon';

@Injectable()
export class PokemonService {
  constructor(private http: HttpClient) {}

  tipoPokemon(tipo: string) {
    const url = 'https://pokeapi.co/api/v2/type/' + tipo;
    return this.http.get<ReqResponse>(url).pipe(
      map((resp) => {
        return resp.pokemon.map((resp) => {
          return { name: resp.pokemon.name, url: resp.pokemon.url };
        });
      })
    );
  }
  ImagenPokemon(name: string, url: string) {
    return this.http.get<ReqResponseImage>(url).pipe(
      map((resp) => {
        return { name: name, img: resp.sprites.other.home.front_default };
      })
    );
  }
}
