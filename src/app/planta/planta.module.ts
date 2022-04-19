import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlantaRoutingModule } from './planta-routing.module';
import { PokemonesPlantaComponent } from './pokemones-planta/pokemones-planta.component';
import { PokemonService } from '../service/pokemon.service';
import {  HttpClientModule } from '@angular/common/http';
import { CardModule } from 'primeng/card';


@NgModule({
  declarations: [
    PokemonesPlantaComponent
  ],
  imports: [
    CommonModule,
    PlantaRoutingModule,
    HttpClientModule,
    CardModule
  ],
  providers: [PokemonService]
})
export class PlantaModule { }
