import { Component, OnInit, Input, ViewChild, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { TransportadoraformComponent } from '../shared/transportadoraform/transportadoraform.component';
import { TransportadoraService } from '../shared/transportadora.service';
import { Transportadora } from '../core/displaycardstransportadoras/transportadora';

@Component({
  selector: 'app-createtransportadora',
  templateUrl: './createtransportadora.component.html',
  styleUrls: ['./createtransportadora.component.css']
})
export class CreatetransportadoraComponent implements OnInit, AfterViewInit {
  @ViewChild(TransportadoraformComponent, {static:false}) formulario:TransportadoraformComponent;
  @Input() display:String="none;"
  overflow="hidden";
  router: Router;
  constructor(private changeDetector: ChangeDetectorRef, private transportadoraService:TransportadoraService, router: Router) { }

  ngOnInit() {
  }


  ngAfterViewInit(): void {
    this.changeDetector.detectChanges();
  }

    create(event:any){  
      //this.formulario.
      let transportadora:Transportadora = new Transportadora(
                                                              null,
                                                              event.nome, 
                                                              event.codigo,
                                                              event.telefone1,
                                                              event.telefone2,
                                                              event.whatsapp,
                                                              event.email,
                                                              event.modal,
                                                              event.cep,
                                                              event.estado,
                                                              event.cidade,
                                                              event.bairro,
                                                              event.rua,
                                                              event.numero 
                                                              );
      this.transportadoraService.criarTransportadora(transportadora).subscribe(lista => {      
        console.log(lista);
        this.router.navigate(['/', '']);
      });
      }

    

    formEmitterListener(event) {
      console.log('[Create Transportadora Component] chegou novo valor de formulario: ', event);
      this.create(event);
    }

    submitForm() {
      this.formulario.submit();
    }

}
