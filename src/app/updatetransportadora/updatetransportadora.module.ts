import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UpdatetransportadoraComponent } from './updatetransportadora.component';
import { TransportadoraformModule } from '../shared/transportadoraform/transportadoraform.module';
import { ModalModule } from '../shared/modal/modal.module';



@NgModule({
  declarations: [UpdatetransportadoraComponent],
  imports: [
    CommonModule,
    TransportadoraformModule,
    ModalModule
  ],
  exports: [UpdatetransportadoraComponent]
})
export class UpdatetransportadoraModule { }
