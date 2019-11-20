import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Mascota } from './mascota';
import {environment} from '../../environments/environment';

const API_URL = environment.apiURL+"/";
const clientes = "clientes/";
const mascotas = "mascotas/";

@Injectable({
  providedIn: 'root'
})
export class MascotaService {

  constructor( private http : HttpClient ) { }

  getMascotas( clientesId ):  Observable<Mascota[]>{
    return this.http.get<Mascota[]>(API_URL+clientes+clientesId+mascotas);
  }

  getMascota( clientesId , mascotasId ):  Observable<Mascota[]>{
    return this.http.get<Mascota[]>(API_URL+clientes+clientesId+mascotas+mascotasId);
  }

  createZona( mascota , clientesId ): Observable<Mascota>{
    return this.http.post<Mascota>(API_URL+clientes+clientesId+mascotas ,mascota );
  }

}
