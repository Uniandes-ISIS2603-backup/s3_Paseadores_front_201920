import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MascotaDetailComponent } from './mascota-detail/mascota-detail.component';
import { MascotaListComponent } from './mascota-list/mascota-list.component';
import { AppRoutingModule } from '../app-routing/app-routing.module';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MascotaDetailComponent, MascotaListComponent],
  exports: [ MascotaDetailComponent , MascotaListComponent ]
})
export class MascotaModule { }
