import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { IniciarsesionComponent } from './iniciarsesion.component';
import { HomeComponent } from '../home/home/home.component';


@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  declarations: [IniciarsesionComponent, HomeComponent],
  exports:[IniciarsesionComponent, HomeComponent]
})
export class IniciarsesionModule { }
