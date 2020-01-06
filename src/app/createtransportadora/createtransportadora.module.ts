import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreatetransportadoraComponent } from './createtransportadora.component';
import { ModalModule } from '../shared/modal/modal.module';
import { TransportadoraformModule } from '../shared/transportadoraform/transportadoraform.module';



@NgModule({
  declarations: [CreatetransportadoraComponent],
  imports: [
    CommonModule,
    TransportadoraformModule
  ],
  exports: [CreatetransportadoraComponent]
})
export class CreatetransportadoraModule { }
