import { Component } from '@angular/core';
import { PokemonService } from '../../service/pokemon.service';

@Component({
  selector: 'app-pokemones-fuego',
  templateUrl: './pokemones-fuego.component.html',
  styleUrls: ['./pokemones-fuego.component.css'],
})
export class PokemonesFuegoComponent {
  public pokemon: any = [];
  constructor(private pokemon_service: PokemonService) {}

  ngOnInit() {
    this.pokemon_service.tipoPokemon('fire').subscribe((res) => {
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
