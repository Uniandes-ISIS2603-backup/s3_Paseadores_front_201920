import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClienteCreateComponent } from './cliente-create/cliente-create.component';
import { ClienteListComponent } from './cliente-list/cliente-list.component';
import { ClienteDetailComponent } from './cliente-detail/cliente-detail.component';
import { AppRoutingModule } from '../app-routing/app-routing.module';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  declarations: [ClienteCreateComponent, ClienteListComponent, ClienteDetailComponent],
  exports: [ ClienteCreateComponent, ClienteListComponent , ClienteDetailComponent ]
})
export class ClienteModule { }
