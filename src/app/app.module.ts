import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarModule } from './core/navbar/navbar.module';
import { HomeModule } from './home/home.module';
import { CreatetransportadoraModule } from './createtransportadora/createtransportadora.module';
import { UpdatetransportadoraModule } from './updatetransportadora/updatetransportadora.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavbarModule,
    HomeModule,
    CreatetransportadoraModule,
    UpdatetransportadoraModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
