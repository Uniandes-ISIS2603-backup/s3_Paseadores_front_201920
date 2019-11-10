import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pago } from './pago';
import { PaseadorService } from '../paseador/paseador.service';
import { Paseador } from '../paseador/paseador';

const API_URL = "../../assets/";
const pagos = "pagos.json";


@Injectable({
  providedIn: 'root'
})
export class PagoService {

  constructor(private http: HttpClient) { }
    getPagos(): Observable<Pago[]>{
    return this.http.get<Pago[]>(API_URL + pagos);  
  }

  getPaseadores(): Observable<Paseador[]>{
    return this.http.get<Paseador[]>(API_URL + "paseadores.json");
  }
}
