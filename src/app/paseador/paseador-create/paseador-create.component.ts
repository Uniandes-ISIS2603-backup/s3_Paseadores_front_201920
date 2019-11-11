import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { PaseadorService } from '../paseador.service';
import { ToastrService } from 'ngx-toastr';
import { Paseador } from '../paseador';


@Component({
  selector: 'app-paseador-create',
  templateUrl: './paseador-create.component.html',
  styleUrls: ['./paseador-create.component.css']
})
export class PaseadorCreateComponent implements OnInit {

  @Output() cancel = new EventEmitter;
  @Output() create = new EventEmitter;

      /**
    * The new Paseador
    */
   paseador: Paseador;

  constructor(private paseadorService: PaseadorService,
    private toastrService: ToastrService) {

    }



    cancelCreation() {

      this.cancel.emit();

    }


    createPaseador() {

      alert(this.paseador.nombre);

      this.paseadorService.createPaseador(this.paseador).subscribe(
        (paseador) => {
          this.paseador = paseador;
          this.create.emit();
          this.toastrService.success("The Paseador was created", "Paseador creation");

        },

        err => {

          this.toastrService.error(err, "Error");

        }

      );

      return this.paseador;

    }

  
   /**
   * This function will initialize the component
   */
   ngOnInit() {

    alert("PASEADORCREATE");

    this.paseador = new Paseador();

    this.paseador.precio = 5000;
    this.paseador.nombre= "no";
    this.paseador.infoContacto="s";
    this.paseador.infoAdicional="w";
    this.paseador.ganancias = 2302032;
    this.paseador.foto = "dwd";
    this.paseador.correo = "dsdd";
    this.paseador.contrasena = "dsdsd";

    
    this.createPaseador();
   }

}
