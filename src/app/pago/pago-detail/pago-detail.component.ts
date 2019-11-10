import { Component, OnInit, Input } from '@angular/core';
import { PagoService } from '../pago.service';

import {PagoDetail} from '../pago-detail';
import { ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-pago-detail',
  templateUrl: './pago-detail.component.html',
  styleUrls: ['./pago-detail.component.css']
})
export class PagoDetailComponent implements OnInit {


  constructor(private pagoService: PagoService,
    private route: ActivatedRoute)
  {}

   @Input() pago_id: number;

  pagoDetail: PagoDetail;

  loader: any;

  getPagoDetail(): void {

    this.pagoService.getPagoDetail(this.pago_id).subscribe(o => {
      this.pagoDetail = o;
    });

  }

  onLoad(params) {
    this.pago_id = parseInt(params["id"]);
    this.pagoDetail = new PagoDetail();
    this.getPagoDetail();

  }

  ngOnInit() {
    this.loader = this.route.params.subscribe((params: Params) =>
      this.onLoad(params)
    );
  }

  ngOnDestroy() {
    this.loader.unsubscribe();
  }

}
