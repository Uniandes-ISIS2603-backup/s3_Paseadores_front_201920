import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { PaseadorService } from '../paseador.service';
import { ToastrService } from 'ngx-toastr';
import { Paseador } from '../paseador';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-paseador-create',
  templateUrl: './paseador-create.component.html',
  styleUrls: ['./paseador-create.component.css']
})
export class PaseadorCreateComponent implements OnInit {

  @Output() cancel = new EventEmitter;
  @Output() create = new EventEmitter;



  constructor(private paseadorService: PaseadorService,
    private toastrService: ToastrService, private route: ActivatedRoute) {

    }



    cancelCreation() {

      this.cancel.emit();

    }


    createPaseador(  paseadorX: Paseador) {


    }




  
   /**
   * This function will initialize the component
   */
   ngOnInit() {

       
    
   }

}
