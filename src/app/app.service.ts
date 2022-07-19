import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { map, Observable, Subject } from 'rxjs';

import { DatosPerros } from 'src/app/model/app.model';
import { NgxSpinnerService } from 'ngx-spinner';
@Injectable({
  providedIn: 'root'
})
export class DatosPerrosService {
  

  baseUrl = environment.baseUrl;
  static listaPerros: any;
  
  heroes: Object | undefined;
  postResponse: string | undefined;

  
  constructor(private http: HttpClient, private SpinnerService: NgxSpinnerService) { }

  public listaPerros(): Observable<DatosPerros[]> {
    return this.http.get<DatosPerros[]>(`${this.baseUrl}/listaDatosPerros`);
    this.SpinnerService.hide('mostrarPerro');
  }

  public perrosById(idDatosPerros: number): Observable<DatosPerros> {
    return this.http.get<DatosPerros>(`${this.baseUrl}/detalleDatosPerros/${idDatosPerros}`);
  }

  public crearPerro(perros: any) {   
    return this.http.post(`${this.baseUrl}/crearDatosPerros`, perros);
    
  }

  public actualizarPerro(idDatosPerros: number, perros: DatosPerros): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/actualizarDatosPerros/${idDatosPerros}`, perros);
  }

  public borrarPerro(idDatosPerros: number): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/borrarDatosPerros/${idDatosPerros}`);
  }

}



