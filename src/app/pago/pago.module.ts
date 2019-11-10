import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagoListComponent } from './pago-list/pago-list.component';
import { PagoService } from './pago.service';
import { PagoDetailComponent } from './pago-detail/pago-detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PagoListComponent, PagoDetailComponent],
  exports: [PagoListComponent], 
  providers: [PagoService]
})
export class PagoModule {}
