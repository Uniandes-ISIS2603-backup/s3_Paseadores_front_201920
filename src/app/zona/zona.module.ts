import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZonaListComponent } from './zona-list/zona-list.component';
import { ZonaDetailComponent } from './zona-detail/zona-detail.component';
import { AppRoutingModule } from '../app-routing/app-routing.module';

@NgModule({
  imports: [
    CommonModule, AppRoutingModule
  ],
  declarations: [ZonaListComponent, ZonaDetailComponent],
  exports: [ZonaListComponent , ZonaDetailComponent ]
})
export class ZonaModule { }
