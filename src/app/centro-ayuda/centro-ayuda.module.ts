import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CentroAyudaDetailComponent } from './centro-ayuda-detail/centro-ayuda-detail.component';
import { AppRoutingModule } from '../app-routing/app-routing.module';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  declarations: [CentroAyudaDetailComponent],
  exports:[CentroAyudaDetailComponent]
})
export class CentroAyudaModule { }
