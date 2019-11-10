import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaseadorListComponent } from './paseador-list/paseador-list.component';
import { PaseadorService } from './paseador.service';
import { PaseadorDetailComponent } from './paseador-detail/paseador-detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PaseadorListComponent, PaseadorDetailComponent],
  exports: [PaseadorListComponent,PaseadorDetailComponent],  
  providers: [PaseadorService]
})
export class PaseadorModule { }
