import { Component } from '@angular/core';
import { PokemonService } from '../../service/pokemon.service';

@Component({
  selector: 'app-pokemones-agua',
  templateUrl: './pokemones-agua.component.html',
  styleUrls: ['./pokemones-agua.component.css'],
})
export class PokemonesAguaComponent {
  public pokemon: any = [];
  constructor(private pokemon_service: PokemonService) {}

  ngOnInit() {
    this.pokemon_service.tipoPokemon('water').subscribe((res) => {
      res.map((info) => {
        this.pokemon_service
          .ImagenPokemon(info.name, info.url)
          .subscribe((res) => {
            this.pokemon.push(res);
          });
      });
    });
  }
}
