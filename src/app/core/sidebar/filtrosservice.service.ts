import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'

import { HttpClient } from '@angular/common/http';
import { Filtro } from './Filtro';

@Injectable({
  providedIn: 'root'
})
export class FiltrosserviceService {
  endpoint = "http://localhost:8080/api/transportadoras/";
  estadosFiltro:Filtro[];
  constructor(private http: HttpClient) { }

  getAllEstadosCount(): Observable<any>{
    return this.http.get<any[]>(this.endpoint+"get-ufcount").pipe(map(responseList => {
      return responseList.map(item => ({ufCount: item.ufCount, uf: item.uf}))
    }));
  }

  getAllCidadesCount(): Observable<any>{
    return this.http.get<any[]>(this.endpoint+"get-municipiocount").pipe(map(responseList => {
      return responseList.map(item => ({municipioCount: item.municipioCount, municipio: item.municipio}))
    }));
  }

  estadosFiltroParser(estadoslist:any[]):Filtro[]{
    let filtroList:Filtro[] = [];
    estadoslist.forEach(item => {
      filtroList.push(new Filtro(item.uf, item.ufCount, "ESTADO"));
    });
    return filtroList;
  }

  cidadesFiltroParser(cidadeslist:any[]):Filtro[]{
    let filtroList:Filtro[] = [];
    cidadeslist.forEach(item => {
      filtroList.push(new Filtro(item.municipio, item.municipioCount, "CIDADE"));
    });
    return filtroList;
  }


}
