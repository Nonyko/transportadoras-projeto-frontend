import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CreatetransportadoraModule } from '../../createtransportadora/createtransportadora.module';
import { NavbarComponent } from './navbar.component';



@NgModule({
  declarations: [NavbarComponent],
  imports: [
    CommonModule,
    RouterModule,
    CreatetransportadoraModule
  ],
  exports: [NavbarComponent]
})
export class NavbarModule { }
