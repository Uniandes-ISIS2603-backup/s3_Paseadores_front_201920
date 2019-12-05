import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pqr-detail',
  templateUrl: './pqr-detail.component.html',
  styleUrls: ['./pqr-detail.component.css']
})
export class PqrDetailComponent implements OnInit {
  

  constructor( private toastrService: ToastrService, private route: ActivatedRoute) { }

  mostrarAlertaEnvio(){
    this.toastrService.success("Contestaremos en el menor tiempo posible", "Envío de peticiones");
   
  }

  ngOnInit() {
  }

}
