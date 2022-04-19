import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonesAguaComponent } from './pokemones-agua/pokemones-agua.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'agua', component: PokemonesAguaComponent
      },
      {
        path: '**', redirectTo: "agua"
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AguaRoutingModule { }
