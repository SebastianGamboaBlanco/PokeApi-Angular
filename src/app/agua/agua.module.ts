import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AguaRoutingModule } from './agua-routing.module';
import { PokemonesAguaComponent } from './pokemones-agua/pokemones-agua.component';
import { PokemonService } from '../service/pokemon.service';
import {  HttpClientModule } from '@angular/common/http';
import { CardModule } from 'primeng/card';


@NgModule({
  declarations: [
    PokemonesAguaComponent
  ],
  imports: [
    CommonModule,
    AguaRoutingModule,
    HttpClientModule,
    CardModule,
  ],
  providers: [PokemonService]
})
export class AguaModule { }
