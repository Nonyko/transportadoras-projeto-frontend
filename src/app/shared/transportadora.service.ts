import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'

import { HttpClient, HttpResponse } from '@angular/common/http';
import { Transportadora } from '../core/displaycardstransportadoras/transportadora';

@Injectable({
  providedIn: 'root'
})
export class TransportadoraService {
  endpoint = "http://localhost:8080/api/transportadoras/";
  constructor(private http: HttpClient) { }

  criarTransportadora(transportadora:Transportadora){
    return this.http.post<any[]>(this.endpoint+"criar", {
                                                        id: transportadora.id,
                                                        nome:transportadora.nome,
                                                        email:transportadora.email,
                                                        empresa: transportadora.codigo,
                                                        telefone: transportadora.telefone1,
                                                        celular: transportadora.telefone2,
                                                        whatsapp: transportadora.whatsapp,
                                                        bairro: transportadora.bairro,
                                                        rua: transportadora.rua,
                                                        numero: transportadora.numero,
                                                        municipio: transportadora.cidade,
                                                        uf: transportadora.estado,
                                                        cep: transportadora.cep,
                                                        modal: transportadora.modal,
                                                      });
  }

  editarTransportadora(transportadora:Transportadora,id:number){
    return this.http.put<any[]>(this.endpoint+"editar/"+id, {
                                                        id: transportadora.id,
                                                        nome:transportadora.nome,
                                                        email:transportadora.email,
                                                        empresa: transportadora.codigo,
                                                        telefone: transportadora.telefone1,
                                                        celular: transportadora.telefone2,
                                                        whatsapp: transportadora.whatsapp,
                                                        bairro: transportadora.bairro,
                                                        rua: transportadora.rua,
                                                        numero: transportadora.numero,
                                                        municipio: transportadora.cidade,
                                                        uf: transportadora.estado,
                                                        cep: transportadora.cep,
                                                        modal: transportadora.modal,
                                                      });
  }

  deletarTransportadora(id:number){
    return this.http.delete<any[]>(this.endpoint+"deletar/"+id);
  }

  getTransportadoras(
    page:number,
    size:number,
    nomeTransportadora:string,
    municipioList:string[],
    ufList:string[],
    tipoModal:string[]
    ): Observable<HttpResponse<any[]>>{
      //montar endpoint com parametros enviados
      let endpointComParamentros = this.montarEnpointComParametros(page,size,nomeTransportadora,municipioList,ufList, tipoModal);
      console.log(endpointComParamentros);
    return this.http.get<any[]>(endpointComParamentros, {observe: 'response'})
  }

  transportadoraParser(transportadoraslist:any[]):Transportadora[]{    
    let transportadoraList:Transportadora[] = [];
    transportadoraslist.forEach(item => {
      transportadoraList.push(new Transportadora(item.id, item.nome, item.empresa,item.telefone,item.celular, item.whatsapp,item.email,
        item.modal,item.cep,item.uf,item.municipio,item.bairro,item.rua,item.numero)
        );
    });
    return transportadoraList;
  }



  montarEnpointComParametros(
    page:number,
    size:number,
    nomeTransportadora:string,
    municipioList:string[],
    ufList:string[],
    tipoModal:string[]
  ){

    let endpointComParamentros = this.endpoint+"list-transportadoras/?";
    endpointComParamentros += page!=null ? "page="+page+"&" : "";
    endpointComParamentros += size!=null ? "size="+size+"&" : "";
    endpointComParamentros += nomeTransportadora!=null ? "nomeTransportadora="+nomeTransportadora+"&" : "";
    if(municipioList.length>0){
      municipioList.forEach(municipio => {
        endpointComParamentros += "municipioList="+municipio+"&";
      });
    }
    if(ufList.length>0){
      ufList.forEach(uf => {
        endpointComParamentros += "ufList="+uf+"&";
      });
    }
    if(tipoModal.length>0){
      tipoModal.forEach(modal => {
        endpointComParamentros += "tipoModal="+modal+"&";
      });
    }
    return endpointComParamentros;

  }

  
}
