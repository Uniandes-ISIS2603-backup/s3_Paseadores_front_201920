import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Cliente } from './cliente';
import {environment} from '../../environments/environment';

const API_URL = environment.apiURL+"/";
const clientes = "clientes/";

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http : HttpClient) { }

  getClientes(): Observable<Cliente[]>{
    return this.http.get<Cliente[]>(API_URL+clientes);
  }

  getCliente(clienteId): Observable<Cliente>{
    return this.http.get<Cliente>(API_URL + clientes + clienteId);
  }


  createCliente(cliente): Observable<Cliente> {

    return this.http.post<Cliente>(API_URL + clientes, cliente);
}


}
