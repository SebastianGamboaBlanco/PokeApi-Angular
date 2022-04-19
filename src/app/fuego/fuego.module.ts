import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FuegoRoutingModule } from './fuego-routing.module';
import { PokemonesFuegoComponent } from './pokemones-fuego/pokemones-fuego.component';
import {  HttpClientModule } from '@angular/common/http';
import { CardModule } from 'primeng/card';
import { PokemonService } from '../service/pokemon.service';


@NgModule({
  declarations: [
    PokemonesFuegoComponent
  ],
  imports: [
    CommonModule,
    FuegoRoutingModule,
    HttpClientModule,
    CardModule
  ],
  providers: [PokemonService]
})
export class FuegoModule { }
