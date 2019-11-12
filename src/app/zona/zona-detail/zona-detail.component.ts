import { Component, OnInit } from '@angular/core';
import { Zona } from '../zona';
import { ActivatedRoute } from '@angular/router';
import { ZonaService } from '../zona.service';


@Component({
  selector: 'app-zona-detail',
  templateUrl: './zona-detail.component.html',
  styleUrls: ['./zona-detail.component.css']
})
export class ZonaDetailComponent implements OnInit {

  constructor( private zonaService : ZonaService , private route: ActivatedRoute) { }

  zonaDetail : Zona;

  zona_id : number;

  getZonaDetail() : void {
    this.zonaService.getZonaDetail(this.zona_id).subscribe( o=>{
      this.zonaDetail =  o;
    });
  }

  ngOnInit() {
    this.zona_id = +this.route.snapshot.paramMap.get('id');
    this.zonaDetail = new Zona();
    this.getZonaDetail();
  }

}
