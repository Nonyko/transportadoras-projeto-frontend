import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeleteconfimationmodalComponent } from './deleteconfimationmodal.component';
import { ModalModule } from '../../shared/modal/modal.module';



@NgModule({
  declarations: [DeleteconfimationmodalComponent],
  imports: [
    CommonModule,
    ModalModule
  ],
  exports: [DeleteconfimationmodalComponent]
})
export class DeleteconfimationmodalModule { }
