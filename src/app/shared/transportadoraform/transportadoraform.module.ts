import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { TransportadoraformComponent } from './transportadoraform.component';



@NgModule({
  declarations: [TransportadoraformComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [TransportadoraformComponent]
})
export class TransportadoraformModule { }
