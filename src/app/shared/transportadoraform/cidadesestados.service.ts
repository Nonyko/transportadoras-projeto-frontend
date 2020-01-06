import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CidadesestadosService {
  endpointEstados = "http://servicodados.ibge.gov.br/api/v1/localidades/estados/";
  constructor(private http: HttpClient) { }

  getAllEstados(): Observable<any>{
    return this.http.get<any[]>(this.endpointEstados).pipe(map(responseList => {
      return responseList.map(item => ({id: item.id, nome: item.nome, sigla: item.sigla}))
    }));
  }

  getAllCidadesByEstadoId(id:number): Observable<any>{
    return this.http.get<any[]>(this.endpointEstados+id+"/municipios/").pipe(map(responseList => {
      return responseList.map(item => ({nome: item.nome}))
    }));
  }

}

