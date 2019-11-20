import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Zona } from './zona';
import {environment} from '../../environments/environment';

const API_URL = environment.apiURL+"/";
const zonas = "zonas/";

@Injectable({
  providedIn: 'root'
})

export class ZonaService {

  constructor( private http : HttpClient) { }

  getZonas() : Observable<Zona[]>{
    return this.http.get<Zona[]>(API_URL+zonas);
  }

  getZonaDetail( zonasId ) : Observable<Zona>{
    return this.http.get<Zona>(API_URL+zonas+zonasId);
  }

  createZona( zona ): Observable<Zona>{
    return this.http.post<Zona>(API_URL+zonas ,zona );
  }
}
