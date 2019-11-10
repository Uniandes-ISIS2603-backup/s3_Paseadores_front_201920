import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Paseador } from './paseador';

const API_URL = "../../assets/";
const paseadores = "paseadores.json";

@Injectable({
  providedIn: 'root'
})



export class PaseadorService {

  constructor(private http: HttpClient) { }

  getPaseadores(): Observable<Paseador[]>{
    return this.http.get<Paseador[]>(API_URL + paseadores);
  }


  getPaseadoresFiltro(): Observable<Array<Paseador>>{
    return this.http.get<Array<Paseador>>(API_URL + paseadores);
  }


}
