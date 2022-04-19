import { Component } from '@angular/core';
import { PokemonService } from '../../service/pokemon.service';

@Component({
  selector: 'app-pokemones-planta',
  templateUrl: './pokemones-planta.component.html',
  styleUrls: ['./pokemones-planta.component.css'],
})
export class PokemonesPlantaComponent {
  public pokemon: any = [];
  constructor(private pokemon_service: PokemonService) {}

  ngOnInit() {
    this.pokemon_service.tipoPokemon('grass').subscribe((res) => {
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
