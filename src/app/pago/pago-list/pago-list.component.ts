import { Component, OnInit } from '@angular/core';
import { Pago } from '../pago';
import { PagoService } from '../pago.service';
import { PaseadorService } from '../../paseador/paseador.service';
import { Paseador } from '../../paseador/paseador';


@Component({
  selector: 'app-pago-list',
  templateUrl: './pago-list.component.html',
  styleUrls: ['./pago-list.component.css']
})
export class PagoListComponent implements OnInit {

  pagos: Pago[];
  paseadores: Paseador[];
  constructor(private pagoService: PagoService, paseadorService: PaseadorService) { }
  getPagos(): void{
    this.pagoService.getPagos().subscribe(pagos => this.pagos= pagos);
  }

  getPaseadores(): void{
    this.pagoService.getPaseadores().subscribe(paseadores => this.paseadores = paseadores);
  }

  ngOnInit() {
    this.getPagos();
    this.getPaseadores();
  }

}
