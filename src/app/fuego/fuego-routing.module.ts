import { NgModule } from '@angular/core';
import {  RouterModule, Routes } from '@angular/router';
import { PokemonesFuegoComponent } from './pokemones-fuego/pokemones-fuego.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'fuego', component: PokemonesFuegoComponent
      },
      {
        path: '**', redirectTo: "fuego"
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FuegoRoutingModule { }
