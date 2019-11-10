import { Component, OnInit, SystemJsNgModuleLoader } from '@angular/core';
import {Paseador} from '../paseador';
import { PaseadorService } from '../paseador.service';



@Component({
  selector: 'app-paseador-list',
  templateUrl: './paseador-list.component.html',
  styleUrls: ['./paseador-list.component.css']
})


export class PaseadorListComponent implements OnInit {

  paseadoresPrecio: Array<Paseador> = new Array();
  paseadores: Paseador[];
  paseadoresInicial: Paseador[];
  
  constructor(private paseadorService: PaseadorService) {

   }


  getPaseadores(): void {

    this.paseadorService.getPaseadores().subscribe(paseadores =>
    this.paseadores = paseadores);

    this.paseadorService.getPaseadores().subscribe(paseadoresInicial =>
    this.paseadoresInicial = paseadoresInicial);
    
  }


  getPaseadoresFiltroPrecio(): void {

  let inputMinBox: HTMLElement = document.getElementById("inputMin");
  let  inputMaxBox: HTMLElement = document.getElementById("inputMax");

    var cont: number = 0;

    var minNumber: number = parseInt(inputMinBox["value"]);
    var maxNumber: number = parseInt(inputMaxBox["value"]);

    if(!(minNumber > maxNumber || maxNumber < minNumber)) {

      
    if(inputMinBox["value"] == "" && inputMaxBox["value"] == "") {

      minNumber = 0;
      maxNumber = 10000000;

    }

  
      for(let i = 0; i < this.paseadoresInicial.length; i++) {
  
        let precioActual: number = this.paseadoresInicial[i].precio;

        if(precioActual >= minNumber && precioActual <= maxNumber) {
          
            let paseadorActual:Paseador = this.paseadoresInicial[i];

            this.paseadoresPrecio.push(paseadorActual);

            cont++;
        } 
  
      }

      this.paseadores = [];

      for(let i =0; i < this.paseadoresPrecio.length; i++) {

        this.paseadores[i] = this.paseadoresPrecio[i];

      }

      this.paseadoresPrecio = [];

    } else {

      alert("Ingrese de manera correcta los valores.");

    } 

  }


  ngOnInit() {
    this.getPaseadores();
  }

 

}
