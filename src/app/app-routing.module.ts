import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreatetransportadoraComponent } from './createtransportadora/createtransportadora.component';
import { UpdatetransportadoraComponent } from './updatetransportadora/updatetransportadora.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'criar-transportadora',
    component: CreatetransportadoraComponent
  },
  {
    path: 'atualizar-transportadora',
    component: UpdatetransportadoraComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
