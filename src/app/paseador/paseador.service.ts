import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Paseador } from './paseador';
import { PaseadorDetail } from './paseador-detail';
import {environment} from '../../environments/environment';

const API_URL = environment.apiURL+"/";
const paseadores = "paseadores/";

@Injectable({
  providedIn: 'root'
})



export class PaseadorService {

  constructor(private http: HttpClient) { }

  getPaseadores(): Observable<Paseador[]>{
    return this.http.get<Paseador[]>(API_URL + paseadores);
  }


  getPaseadorDetail(paseadorId): Observable<PaseadorDetail> {
    return this.http.get<PaseadorDetail>(API_URL + paseadores + paseadorId);
  }


   createPaseador(paseador): Observable<Paseador> {

    return this.http.post<Paseador>(API_URL + paseadores, paseador);
}


}
