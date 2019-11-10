import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaseadorListComponent } from './paseador-list/paseador-list.component';
import { PaseadorService } from './paseador.service';
import { PaseadorDetailComponent } from './paseador-detail/paseador-detail.component';
import { AppRoutingModule } from '../app-routing/app-routing.module';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  declarations: [PaseadorListComponent, PaseadorDetailComponent],
  exports: [PaseadorListComponent,PaseadorDetailComponent],  
  providers: [PaseadorService]
})
export class PaseadorModule { }
