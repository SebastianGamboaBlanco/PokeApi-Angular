import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonesPlantaComponent } from './pokemones-planta/pokemones-planta.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'planta', component: PokemonesPlantaComponent
      },
      {
        path: '**', redirectTo: "planta"
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlantaRoutingModule { }
