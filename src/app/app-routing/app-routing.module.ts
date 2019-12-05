import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {NgxPermissionsGuard} from 'ngx-permissions';

import { AuthLoginComponent } from '../auth/auth-login/auth-login.component';
import { AuthSignUpComponent } from '../auth/auth-sign-up/auth-sign-up.component';
import { PagoDetailComponent } from '../pago/pago-detail/pago-detail.component';
import { PagoListComponent } from '../pago/pago-list/pago-list.component';
import { PaseadorDetailComponent } from '../paseador/paseador-detail/paseador-detail.component';
import { PaseadorListComponent } from '../paseador/paseador-list/paseador-list.component';
import { LoginComponent } from '../login/login.component';
import { PaseadorCreateComponent } from '../paseador/paseador-create/paseador-create.component';
import { Cliente } from '../cliente/cliente';
import { ClienteListComponent } from '../cliente/cliente-list/cliente-list.component';
import { ClienteDetailComponent } from '../cliente/cliente-detail/cliente-detail.component';
import { ZonaListComponent } from '../zona/zona-list/zona-list.component';
import { ZonaDetailComponent } from '../zona/zona-detail/zona-detail.component'
import { HomeComponent } from '../home/home/home.component';
import { IniciarsesionComponent } from '../iniciarsesion/iniciarsesion.component';
import { CentroAyudaDetailComponent } from '../centro-ayuda/centro-ayuda-detail/centro-ayuda-detail.component';
import { PqrDetailComponent } from '../pqr/pqr-detail/pqr-detail.component'


const routes: Routes = [

    {

      path: 'paseadores',
      children: [
        {
          path: "list",
          component: PaseadorListComponent
          
        },
      {
        path: ':id',
        component: PaseadorDetailComponent
      }
      ]
    },


    {
      
      path: 'pago',

    children: [{

      path: ':id',
      component: PagoListComponent

    }, {

      path: ':valorServicio',
      component: PagoDetailComponent,
      outlet:'detail'

    }
    ]
  },

  {
      
    path: 'login',

  children: [{

    path: 'registro',
    component: LoginComponent

  }
  ]
},

{
      
  path: 'clientes',

children: [{

  path: 'list',
  component: ClienteListComponent

},
{

  path: ':id',
  component: ClienteDetailComponent,
  outlet:'detail'

}
]
},
{
  path: 'zonas',
  children: [
    {
      path:'list',
      component: ZonaListComponent
    },
    {
      path: ':id',
      component: ZonaDetailComponent,
      outlet:'detail'
    }
  ]
},

{
  path: 'inicio',
  children: [
    {
      path:'home',
      component: HomeComponent
    }
  ]
},


{
  path: 'centro',
  children: [
    {
      path:'pqa',
      component: CentroAyudaDetailComponent
    }
  ]
},
{
  path: 'atencion',
  children: [
    {
      path:'pqr',
      component: PqrDetailComponent
    }
  ]
},


{
  path: 'iniciar',
  children: [
    {
      path:'sesion',
      component: IniciarsesionComponent
    }
  ]
}

  ];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})
    ],
    exports: [RouterModule],
    declarations: []
})
export class AppRoutingModule {

}
//Push Juan
