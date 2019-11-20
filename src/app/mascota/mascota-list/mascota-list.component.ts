import { Component, OnInit ,  Output, EventEmitter} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MascotaService } from '../mascota.service';
import {Mascota} from '../mascota';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-mascota-list',
  templateUrl: './mascota-list.component.html',
  styleUrls: ['./mascota-list.component.css']
})
export class MascotaListComponent implements OnInit {

  constructor( private mascotaService : MascotaService ,
    private toastrService: ToastrService, private route: ActivatedRoute) { }

  mascotas : Mascota[];

  mascota: Mascota =new Mascota();

  idCliente: number;

  getZonas(): void {
    this.mascotaService.getMascotas( this.idCliente ).subscribe( mascotas =>
       this.mascotas = mascotas);
  }

  ngOnInit() {
    this.idCliente = 0;
    this.getZonas();
  }

  

}
