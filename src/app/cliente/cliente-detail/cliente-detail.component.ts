import { Component, OnInit } from '@angular/core';
import { ClienteDetail } from '../cliente-detail';
import { ActivatedRoute } from '@angular/router';
import { ClienteService } from '../cliente.service';
import { Cliente } from '../cliente';

@Component({
  selector: 'app-cliente-detail',
  templateUrl: './cliente-detail.component.html',
  styleUrls: ['./cliente-detail.component.css']
})
export class ClienteDetailComponent implements OnInit {

  constructor(private clienteService: ClienteService,
    private route: ActivatedRoute) { }

  clienteDetail: Cliente;

  cliente_id: number;

  getClienteDetail(): void {

    this.clienteService.getCliente(this.cliente_id).subscribe(o => {
      this.clienteDetail = o;
    });
  }


  ngOnInit() {
    this.cliente_id = +this.route.snapshot.paramMap.get('id');
    this.clienteDetail = new Cliente();
    this.getClienteDetail();
  }


}
