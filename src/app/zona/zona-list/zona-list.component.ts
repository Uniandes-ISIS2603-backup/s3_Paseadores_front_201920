import { Component, OnInit ,  Output, EventEmitter} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ZonaService } from '../zona.service';
import {Zona} from '../zona';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-zona-list',
  templateUrl: './zona-list.component.html',
  styleUrls: ['./zona-list.component.css']
})
export class ZonaListComponent implements OnInit {

  @Output() create = new EventEmitter;

  constructor( private zonaService : ZonaService ,
    private toastrService: ToastrService, private route: ActivatedRoute) { }

  zonas : Zona[];

  zona: Zona =new Zona();

  getZonas(): void {
    this.zonaService.getZonas().subscribe( zonas =>
       this.zonas = zonas);
  }

  ngOnInit() {
    this.getZonas();
  }

  getInfo() {

    let inputZona : HTMLElement = document.getElementById("nombreZona");
    var zonaNombre : string = (inputZona["value"]);
    this.zona.infoZona = zonaNombre;
    alert(zonaNombre);

    this.zonaService.createZona(this.zona).subscribe(
      (zona)=>{
        this.zona = zona;
        this.create.emit();
        this.toastrService.success("The Zone was created", "Zone creation");
          alert("Zona creado con exito!");
      },
      err => {

        this.toastrService.error(err, "Error");

      }
    );
    return this.zona;
  }

  

}
