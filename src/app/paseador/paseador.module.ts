import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaseadorListComponent } from './paseador-list/paseador-list.component';
import { PaseadorService } from './paseador.service';
import { PaseadorDetailComponent } from './paseador-detail/paseador-detail.component';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { PaseadorCreateComponent } from './paseador-create/paseador-create.component';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  declarations: [PaseadorListComponent, PaseadorDetailComponent, PaseadorCreateComponent],
  exports: [PaseadorListComponent,PaseadorDetailComponent, PaseadorCreateComponent],  
  providers: [PaseadorService]
})
export class PaseadorModule { }
