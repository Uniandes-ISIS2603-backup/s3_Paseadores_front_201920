import { Component, OnInit } from '@angular/core';
import {Paseador} from '../paseador';
import { PaseadorService } from '../paseador.service';

@Component({
  selector: 'app-paseador-list',
  templateUrl: './paseador-list.component.html',
  styleUrls: ['./paseador-list.component.css']
})
export class PaseadorListComponent implements OnInit {
  paseadores: Paseador[];

  
  constructor(private paseadorService: PaseadorService) { }
  getPaseadores(): void{
    this.paseadorService.getPaseadores().subscribe(paseadores =>
      this.paseadores = paseadores);
  }

  ngOnInit() {
    this.getPaseadores();
  }

}
