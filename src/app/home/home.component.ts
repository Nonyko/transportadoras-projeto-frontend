import { Component, OnInit } from '@angular/core';
import { TransportadoraService } from '../shared/transportadora.service';
import { Transportadora } from '../core/displaycardstransportadoras/transportadora';
import { Filtro } from '../core/sidebar/Filtro';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public filtrosSelecionados:Filtro[]=[];
  transportadoras:Transportadora[];
  counter = Array;
  totalelements:string = "0";
  totalpages:number = 0;
  elementsperpage:number=20;
  atualpage:number = 0;
  constructor(private transportadoraService:TransportadoraService) { }

  ngOnInit() {
    this.transportadoraService.getTransportadoras(this.atualpage,this.elementsperpage,null,[],[],[]).subscribe(lista => { 
      console.log(lista);    
      this.totalelements = lista.headers.get("totalelements");
      this.totalpages = Math.ceil(Number(this.totalelements)/this.elementsperpage);
      this.transportadoras = this.transportadoraService.transportadoraParser(lista.body); 
    });
  }



  atualizarListagem(page?: number){
    if(page!=null){
      console.log(page);
      this.atualpage = page;
    }
    this.transportadoraService.getTransportadoras(this.atualpage,this.elementsperpage,this.filtrosSelecionados.filter(filtro => filtro.tipo==="NOME").map(filtro => filtro.nome)[0],
      this.filtrosSelecionados.filter(filtro => filtro.tipo==="CIDADE").map(filtro => filtro.nome),
      this.filtrosSelecionados.filter(filtro => filtro.tipo==="ESTADO").map(filtro => filtro.nome),
      this.filtrosSelecionados.filter(filtro => filtro.tipo==="MODAL").map(filtro => filtro.nome)).subscribe(lista => { 
      console.log(lista);    
      this.totalelements = lista.headers.get("totalelements");
      this.totalpages = Math.ceil(Number(this.totalelements)/this.elementsperpage);
      this.transportadoras = this.transportadoraService.transportadoraParser(lista.body); 
    });
  }

  filtrosEmitterListener(event) {
    console.log('chegou novo valor', event);
    this.filtrosSelecionados = event;
    this.atualizarListagem();
  }

}
