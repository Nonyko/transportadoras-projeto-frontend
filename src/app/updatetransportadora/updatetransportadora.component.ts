import { Component, OnInit, ViewChild, Input, ChangeDetectorRef, AfterViewInit } from '@angular/core';
import { TransportadoraformComponent } from '../shared/transportadoraform/transportadoraform.component';
import { Router } from '@angular/router';
import { TransportadoraService } from '../shared/transportadora.service';
import { Transportadora } from '../core/displaycardstransportadoras/transportadora';

@Component({
  selector: 'app-updatetransportadora',
  templateUrl: './updatetransportadora.component.html',
  styleUrls: ['./updatetransportadora.component.css']
})
export class UpdatetransportadoraComponent implements OnInit, AfterViewInit  {
  @ViewChild(TransportadoraformComponent, {static:false}) formulario:TransportadoraformComponent;
  display:String="none";
  overflow:String="hidden";
  constructor(private changeDetector: ChangeDetectorRef, private router: Router, private transportadoraService:TransportadoraService) { }
  id:number;
  ngOnInit() {
    if (history.state.transportadora) {
      console.log(history.state);
      this.id=history.state.transportadora.id;
    } else {
      this.router.navigate(['']);
    }
  }


  ngAfterViewInit(): void {
    console.log(history.state);
    this.formulario.fillForm(history.state.transportadora);
    this.changeDetector.detectChanges();
  }

  open(){  
    this.display="block";
    this.overflow="scroll";
    console.log(this.display);
    }
    
    update(event:any, id){  
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
      this.transportadoraService.editarTransportadora(transportadora, id).subscribe(lista => {      
      console.log(lista);
      }, err => {}, () => {
        this.router.navigate(['']);
      });

      }
    
      delete(id:number){
        this.transportadoraService.deletarTransportadora(id).subscribe(lista => {      
          console.log(lista);
          this.router.navigate(['']);
          });
      }

    close(){  
    this.overflow="hidden";
    this.display="none";
    }

    formEmitterListener(event) {
      console.log('chegou novo valor de formulario: ', event);
      this.update(event, this.id);
    }

    submitForm() {
      this.formulario.submit();
    }

}
