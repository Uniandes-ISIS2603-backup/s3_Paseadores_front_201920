import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PqrDetailComponent } from './pqr-detail/pqr-detail.component';
import { AppRoutingModule } from '../app-routing/app-routing.module';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
  ],
  declarations: [PqrDetailComponent],
  exports: [PqrDetailComponent]
})
export class PqrModule { }
