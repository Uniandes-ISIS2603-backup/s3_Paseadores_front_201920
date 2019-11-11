import { Component, OnInit } from '@angular/core';
import { Pago } from '../pago';
import { PagoService } from '../pago.service';
import { PaseadorService } from '../../paseador/paseador.service';
import { Paseador } from '../../paseador/paseador';
import {ActivatedRoute} from '@angular/router';
import 'rxjs/add/operator/filter';
import { NONE_TYPE } from '@angular/compiler/src/output/output_ast';
import { PaseadorDetail } from 'src/app/paseador/paseador-detail';

@Component({
  selector: 'app-pago-list',
  templateUrl: './pago-list.component.html',
  styleUrls: ['./pago-list.component.css']
})
export class PagoListComponent implements OnInit {

 
  pagoDetail: Pago;
  paseador: PaseadorDetail;

  constructor(private pagoService: PagoService, private paseadorService: PaseadorService, private route: ActivatedRoute) { }
 
  pago_id: number;
  paseador_id: number;


  getPagoDetail() {

    this.pagoService.getPagoDetail(this.pago_id).subscribe(o => {
      this.pagoDetail = o;
    });

    return this.pagoDetail;

  }

  getPaseador() {

    this.paseadorService.getPaseadorDetail(this.paseador_id).subscribe(o => {
      this.paseador = o;
    });

  }


  ngOnInit() {
    this.paseador_id = +this.route.snapshot.paramMap.get('id');
    this.getPaseador();
  }

}
