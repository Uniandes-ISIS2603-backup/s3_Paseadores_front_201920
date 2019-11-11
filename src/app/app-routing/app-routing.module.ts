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
