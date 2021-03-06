import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ToastrModule} from 'ngx-toastr';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpErrorInterceptor} from './interceptors/httperrorinterceptor.service';
import {NgxPermissionsModule} from 'ngx-permissions';
import { ModalDialogModule } from 'ngx-modal-dialog';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing/app-routing.module';
import {AuthModule} from './auth/auth.module';

import { PaseadorModule } from './paseador/paseador.module';
import { PagoModule } from './pago/pago.module';
import { LoginComponent } from './login/login.component';
import { ClienteModule } from './cliente/cliente.module';
import { ZonaModule } from './zona/zona.module';
import { HomeModule } from './home/home.module';
import { IniciarsesionComponent } from './iniciarsesion/iniciarsesion.component';
import { CentroAyudaModule } from './centro-ayuda/centro-ayuda.module';
import { PqrModule } from './pqr/pqr.module';


@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        IniciarsesionComponent
    ],
    imports: [

        HomeModule,
        PagoModule,
        PaseadorModule,
        ClienteModule,
        CentroAyudaModule,
        PqrModule,
        ZonaModule,
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,
        ModalDialogModule.forRoot(),
        AuthModule,
        FormsModule,
        ToastrModule.forRoot({
            timeOut: 10000,
            positionClass: 'toast-bottom-right',
            preventDuplicates: true,
        }),
        NgxPaginationModule,
        NgxPermissionsModule.forRoot(),
        NgbModule
    ],
    bootstrap: [AppComponent],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: HttpErrorInterceptor,
            multi: true
        }
    ]
})
export class AppModule {}
