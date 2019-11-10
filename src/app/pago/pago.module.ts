import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagoListComponent } from './pago-list/pago-list.component';
import { PagoService } from './pago.service';
import { PagoDetailComponent } from './pago-detail/pago-detail.component';
import {AppRoutingModule} from '../app-routing/app-routing.module';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  declarations: [PagoListComponent, PagoDetailComponent],
  exports: [PagoListComponent, PagoDetailComponent], 
  providers: [PagoService]
})
export class PagoModule {}
