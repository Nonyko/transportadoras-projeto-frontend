import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DisplaycardstransportadorasComponent } from './displaycardstransportadoras.component';
import { CardtransportadoraComponent } from './cardtransportadora/cardtransportadora.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    DisplaycardstransportadorasComponent,
    CardtransportadoraComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    DisplaycardstransportadorasComponent
  ]
})
export class DisplaycardstransportadorasModule { }
