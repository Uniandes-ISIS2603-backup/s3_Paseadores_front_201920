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
        component: PaseadorDetailComponent,
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
