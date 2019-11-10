import { Component, OnInit } from '@angular/core';
import { Paseador } from '../paseador';
import { PaseadorService } from '../paseador.service';

@Component({
  selector: 'app-paseador-detail',
  templateUrl: './paseador-detail.component.html',
  styleUrls: ['./paseador-detail.component.css']
})
export class PaseadorDetailComponent implements OnInit {

  paseadores: Paseador[];
  constructor(private paseadorService: PaseadorService) { }
  getPaseadores(): void{
    this.paseadorService.getPaseadores().subscribe(paseadores => this.paseadores = paseadores);
  }

  ngOnInit() {
    this.getPaseadores();
  }

}
