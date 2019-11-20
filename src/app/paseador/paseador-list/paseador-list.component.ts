import { Component, OnInit, SystemJsNgModuleLoader } from '@angular/core';
import {Paseador} from '../paseador';
import { PaseadorService } from '../paseador.service';
import { format } from 'url';
import { allowPreviousPlayerStylesMerge } from '@angular/animations/browser/src/util';



@Component({
  selector: 'app-paseador-list',
  templateUrl: './paseador-list.component.html',
  styleUrls: ['./paseador-list.component.css']
})


export class PaseadorListComponent implements OnInit {

  //Para los tres tipos de filtros
  paseadoresPrecio: Array<Paseador> = new Array();
  paseadoresCalificacion: Array<Paseador> = new Array();
  paseadoresZona: Array<Paseador> = new Array();

  //Para el inicial y actualizar
  paseadores: Paseador[];
  paseadoresInicial: Paseador[];

  //Criterio de busqueda por calificacion
  numHuella: number = 0;

  //Criterio de busqueda por zona
  zonaElegida: string ="";

  
  constructor(private paseadorService: PaseadorService) {

   }


  getPaseadores(): void {

    this.paseadorService.getPaseadores().subscribe(paseadores =>
    this.paseadores = paseadores);

    this.paseadorService.getPaseadores().subscribe(paseadoresInicial =>
    this.paseadoresInicial = paseadoresInicial);
    
  }

//Se obtiene el numero de la calificacion que se haya elegido
  setNumHuella(cal: number) {

    this.numHuella = cal;

  }

  //Se obtiene la zona elegida para la busqueda por filtro
  setZona(zona: string) {

    this.zonaElegida = zona;

  }



  getPaseadoresFiltroZona() {


    for(let i =0; i < this.paseadoresPrecio.length; i++) {

      for(let j =0; j < this.paseadoresPrecio[i].zonas.length; j++) {

        let zonaActual: string = this.paseadoresPrecio[i].zonas[j].infoZona;

        if(zonaActual == this.zonaElegida) {

          this.paseadoresZona.push(this.paseadoresPrecio[i]);

        }

      }


    }

  }


  getPaseadoresFiltroCalificacion() {

    var sumaCalificacion: number = 0;
    this.paseadoresCalificacion = [];

    for(let i = 0; i < this.paseadoresPrecio.length; i++) {

      for(let j = 0; j < this.paseadoresPrecio[i].calificaciones.length; j++) {

        sumaCalificacion += this.paseadoresPrecio[i].calificaciones[j].calificacion;

      }

      if(this.paseadoresPrecio[i].calificaciones.length > 0) {

        if(sumaCalificacion/(this.paseadoresPrecio[i].calificaciones.length) >= this.numHuella) {

          this.paseadoresCalificacion.push(this.paseadoresPrecio[i]);
  
        }

      }

      sumaCalificacion = 0;

    }

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

    //Se asignan el resultado del filtro por zona a los paseadores de este filtro
    if(this.zonaElegida != "") {

      this.getPaseadoresFiltroZona();
      this.paseadoresPrecio = this.paseadoresZona;
      
    }


    //Se asignan el resultado del filtro por calificacion a los paseadores de este filtro
    if(this.numHuella != 0) {

      this.getPaseadoresFiltroCalificacion();
      this.paseadoresPrecio = this.paseadoresCalificacion;
      
    }

      for(let i =0; i < this.paseadoresPrecio.length; i++) {

        this.paseadores[i] = this.paseadoresPrecio[i];

      }

      this.paseadoresPrecio = [];
      this.paseadoresZona= [];
      this.paseadoresCalificacion = [];
      this.numHuella = 0;

    } else {

      alert("Ingrese de manera correcta los valores.");

    } 

  }


  reiniciar() {
    window.location.reload();
  }


  actualizarCantZonas() {

    let subaLabel: HTMLElement = document.getElementById("suba");
    let usaquenLabel: HTMLElement = document.getElementById("usaquen");
    let chapineroLabel: HTMLElement = document.getElementById("chapinero");
    let fontibonLabel: HTMLElement = document.getElementById("fontibon");

    var subaCount: number = 0;
    var usaquenCount: number = 0;
    var chapineroCount: number = 0;
    var fontibonCount: number = 0;
    

    for(let i = 0; i < this.paseadores.length; i++) {

      for(let j = 0; j < this.paseadores[i].zonas.length; j++) {

        let infoZona: string = this.paseadores[i].zonas[j].infoZona;
        infoZona = infoZona.toLowerCase();

        if(infoZona  == "suba") {

          subaCount++;

        } else if(infoZona  == "usaquen") {

          usaquenCount++;

        } else if(infoZona  == "chapinero") {

          chapineroCount++;

        } else if(infoZona  == "fontibon") {

          fontibonCount++;

        }

      }

    }

    subaLabel["textContent"] = subaCount.toString();
    usaquenLabel["textContent"] = usaquenCount.toString();
    chapineroLabel["textContent"] = chapineroCount.toString();
    fontibonLabel["textContent"] = fontibonCount.toString();

  }

  ngOnInit() {
    this.getPaseadores();
    this.ngAfterViewInit();
  }

 ngAfterViewInit() {
  this.actualizarCantZonas();
 }

}
