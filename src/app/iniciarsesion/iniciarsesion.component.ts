import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-iniciarsesion',
  templateUrl: './iniciarsesion.component.html',
  styleUrls: ['./iniciarsesion.component.css']
})
export class IniciarsesionComponent implements OnInit {

  constructor(private toastrService: ToastrService) { }

  ngOnInit() {
  }

  login() {

    this.toastrService.success("Has iniciado sesion", "Login");
    

  }

}
