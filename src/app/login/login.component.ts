import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Paseador } from '../paseador/paseador';


import {PaseadorCreateComponent} from '../paseador/paseador-create/paseador-create.component';
import { PaseadorService } from '../paseador/paseador.service';
import { ToastrService } from 'ngx-toastr';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Output() cancel = new EventEmitter;
  @Output() create = new EventEmitter;

  constructor(private paseadorService: PaseadorService,
    private toastrService: ToastrService, private route: ActivatedRoute) { }



  paseador: Paseador;

  pc: number;


  isPaseador() {

    this.pc = 0;
    document.getElementById("pc").textContent = "Bienvenido Paseador!";

  }

  isCliente() {

    this.pc = 1;
    document.getElementById("pc").textContent = "Bienvenido Cliente!";

  }


  getInfo(): void {

    this.paseador = new Paseador(); 

    let inputCorreo: HTMLElement = document.getElementById("correo");
    let inputContrasena: HTMLElement = document.getElementById("contrasena");
    let inputNombre: HTMLElement = document.getElementById("nombre");
    let inputApellido: HTMLElement = document.getElementById("apellido");


    var correo: string = (inputCorreo["value"]);
    var contrasena: string = (inputContrasena["value"]);
    var nombre: string = (inputNombre["value"]);
    var apellido: string = (inputApellido["value"]);

    var nombreCompleto: string = nombre + " " + apellido;


    if(this.pc == 0) {

      this.paseador.correo = correo;
      this.paseador.contrasena = contrasena;
      this.paseador.nombre = nombreCompleto;
  
      //Por default
  
      this.paseador.foto = "https://png.pngtree.com/svg/20170602/avatar_107646.png";
      this.paseador.precio = 7000;
      this.paseador.ganancias = 0;
      this.paseador.infoAdicional = "Me encantan los canes!";
      this.paseador.infoContacto = "Informacion de contacto";

    //Se crea el paseador
    this.createPaseador();
      
    } else {



    }


  }

  cancelCreation() {

    this.cancel.emit();

  }


    createPaseador() {


      this.paseadorService.createPaseador(this.paseador).subscribe(
        (paseador) => {
          this.paseador = paseador;
          this.create.emit();
          this.toastrService.success("The Paseador was created", "Paseador creation");
          alert("Usuario creado con exito!");

        },

      err => {

        this.toastrService.error(err, "Error");

      }

    );

    return this.paseador;

  }

  ngOnInit() {
  }

}
