import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { DisplaycardstransportadorasModule } from '../core/displaycardstransportadoras/displaycardstransportadoras.module';
import { SidebarModule } from '../core/sidebar/sidebar.module';



@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    SidebarModule,
    DisplaycardstransportadorasModule
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
