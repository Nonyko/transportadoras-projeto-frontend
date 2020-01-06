import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Filtro } from './Filtro';
import { FiltrosserviceService } from './filtrosservice.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  public filtrosSelecionados:Filtro[];
  @Output() filtrosEmitter: EventEmitter<any> = new EventEmitter();
  public filtrosMunicipios:Filtro[];
  public filtrosEstados:Filtro[];
  public filtrosModalidade:Filtro[];
  @Input()  public quantidadeResultados:number;

  constructor(private filtrosService:FiltrosserviceService) { }

  ngOnInit() {
    this.filtrosSelecionados =[]; 
    this.quantidadeResultados=0;
   
   this.filtrosService.getAllEstadosCount().subscribe(listaEstados => {           
      this.filtrosEstados = this.filtrosService.estadosFiltroParser(listaEstados);
    });

    this.filtrosService.getAllCidadesCount().subscribe(listaCidades => {           
      this.filtrosMunicipios = this.filtrosService.cidadesFiltroParser(listaCidades);
    });


    this.filtrosModalidade = [
      new Filtro("RODOVIARIO", 1, "MODAL"),
      new Filtro("AEREO", 1, "MODAL"),
      new Filtro("AQUAVIARIO", 1, "MODAL"),
    ]; 
  }

  removefiltro(filtro:Filtro){
    if(this.filtrosSelecionados.includes(filtro)){
      this.filtrosSelecionados.splice(this.filtrosSelecionados.indexOf(filtro), 1);
      this.emitirListaFiltros();
    }
  }

  addFiltroNome(event){
    console.log("ativou evento");
    let inputValue = event.target.value;
    let filtro:Filtro = new Filtro(inputValue, 1, "NOME");
    if(this.filtrosSelecionados.filter(filtro => filtro.tipo==="NOME").length==0){
      this.filtrosSelecionados.push(filtro);
      this.emitirListaFiltros();
    }    
  }

  addfiltro(filtro:Filtro){
    if(!this.filtrosSelecionados.includes(filtro)){
      this.filtrosSelecionados.push(filtro);
      this.emitirListaFiltros();
    }    
  }

  emitirListaFiltros() {
    console.log("emitindo filtros");
      this.filtrosEmitter.emit(this.filtrosSelecionados);   
  }

}
