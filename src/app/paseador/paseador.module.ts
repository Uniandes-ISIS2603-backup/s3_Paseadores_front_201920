import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaseadorListComponent } from './paseador-list/paseador-list.component';
import { PaseadorService } from './paseador.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PaseadorListComponent],
  exports: [PaseadorListComponent],
  providers: [PaseadorService]
})
export class PaseadorModule { }
