import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'pokemonesAgua',
    loadChildren: () =>import("./agua/agua.module").then(m => m.AguaModule)
  },
  {
    path: 'pokemonesFuego',
    loadChildren: () =>import("./fuego/fuego.module").then(m => m.FuegoModule)
  },
  {
    path: 'pokemonesPlanta',
    loadChildren: () =>import("./planta/planta.module").then(m => m.PlantaModule)
  },
  {
    path: '**',
    redirectTo: "pokemonesAgua"
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot( routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
