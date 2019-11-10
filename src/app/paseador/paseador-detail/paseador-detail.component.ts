import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from "@angular/router";

import { PaseadorService } from '../paseador.service';
import { PaseadorDetail } from '../paseador-detail';

@Component({
  selector: 'app-paseador-detail',
  templateUrl: './paseador-detail.component.html',
  styleUrls: ['./paseador-detail.component.css']
})
export class PaseadorDetailComponent implements OnInit {

  

  constructor(private paseadorService: PaseadorService,
    private route: ActivatedRoute) { }

    paseadorDetail: PaseadorDetail;

    paseador_id: number;
  


    getPaseadorDetail(): void {

      this.paseadorService.getPaseadorDetail(this.paseador_id).subscribe(o => {
        this.paseadorDetail = o;
      });

    }
  
  
    ngOnInit() {
      this.paseador_id = +this.route.snapshot.paramMap.get('id');
      this.paseadorDetail = new PaseadorDetail();
      this.getPaseadorDetail();
    }


}
