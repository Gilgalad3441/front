import { Component } from '@angular/core';
// Importo el archivo JSON 
import datos_peludos from 'src/assets/json/datos_peludos.json';
import { DatosPerrosService } from 'src/app/app.service';


//variables
var isLicencia: string = "";
var isCastrado: string = "";
var isLeishmaniasis: string = "";
var isOperar: string = "";
var isEnfermedades: string = "";
var isTratamiento: string = "";
var isCastrado: string = "";




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

  

})
 
export class AppComponent {
  [x: string]: any;

  title = 'pppeludos-web';
  datos: any = {};
  ver_peludo: string = "Ver datos de los peludos";
  modificar_datos: string = "Modificar datos";
  aniadir_peludo: string = "Añadir peludo";
  quitar_peludo: string = "Quitar peludo";
  document: undefined;
  formulario = document.getElementById('Formulario');
  hierarchicalData: any;
  datosPerros: boolean | undefined = true;
  form: boolean | undefined = false;
  aniadir: boolean | undefined;
  quitar: boolean | undefined;
  profileForm: any;
  nuevoPerro: any = {};
  nuevoPerrete:any = {};
  idPerroBBDD: any;
  ngOnInit() {
    this.mostrarPerros();
  }

  licencia(licencia: any) {

    if (licencia && licencia.toLowerCase() === "si") {
      isLicencia = "badge badge-danger  rounded-pill d-inline";
    } else {
      isLicencia = "badge badge-success  rounded-pill d-inline";
    }
    return isLicencia;
  }

  castrado(castrado: any) {

    if (castrado.toLowerCase() === "si") {
      isCastrado = "badge badge-success  rounded-pill d-inline";
    } else {
      isCastrado = "badge badge-danger  rounded-pill d-inline";
    }
    return isCastrado;
  }

  leishmaniasis(Leishmaniasis: any) {

    if (Leishmaniasis.toLowerCase() === "si") {
      isLeishmaniasis = "badge badge-danger  rounded-pill d-inline";
    } else {
      isLeishmaniasis = "badge badge-success  rounded-pill d-inline";
    }
    return isLeishmaniasis;
  }
  pendienteOperar(operar: any) {

    if (operar.toLowerCase() === "si") {
      isOperar = "badge badge-danger  rounded-pill d-inline";
    } else {
      isOperar = "badge badge-success  rounded-pill d-inline";
    }
    return isOperar;
  }
  enfermedades(enfermedades: any) {

    if (enfermedades.toLowerCase() === "si") {
      isEnfermedades = "badge badge-danger  rounded-pill d-inline";
    } else {
      isEnfermedades = "badge badge-success  rounded-pill d-inline";
    }
    return isEnfermedades;
  }

  tratamiento(tratamiento: any) {

    if (tratamiento.toLowerCase() === "si") {
      isTratamiento = "badge badge-danger  rounded-pill d-inline";
    } else {
      isTratamiento = "badge badge-success  rounded-pill d-inline";
    }
    return isTratamiento;
  }

  

  modificarPeludo() {
    this.datosPerros = false
    this.form = true
    this.quitar = false
    this.aniadir = false;
  }

  aniadirPeludo() {
    this.form = false
    this.datosPerros = false
    this.quitar = false
    this.aniadir = true;
  }
  quitarPeludo() {
    this.form = false
    this.datosPerros = false
    this.aniadir = false
    this.quitar = true;
  }

  cerrarFormulario() {
    this.datosPerros = true
    this.aniadir = false
    this.quitar = false
    this.form = false
  }

  cerrarAniadir() {
    this.datosPerros = true
    this.aniadir = false
    this.quitar = false
    this.form = false
  }

  cerrarQuitario() {
    this.datosPerros = true
    this.aniadir = false
    this.quitar = false
    this.form = false
  }

  //invocamos al api crearPerro
  constructor(private DatosPerrosService: DatosPerrosService){}
  guardarNuevoPerrete(){
    
    //Invocar endpoint crearPerro
    this.DatosPerrosService.crearPerro(this.nuevoPerrete).subscribe(response => {

    });
    this.nuevoPerrete = {};    
    this.datosPerros = true
    this.aniadir = false
    this.quitar = false
    this.form = false
    this.mostrarPerros();
  }

  //Invocamos el endpoint listaPerros
  mostrarPerros() {
    var  getResponse: any;
    
    getResponse =  this.DatosPerrosService.listaPerros().subscribe(response => {

      this.datos = response;
    })
    this.datosPerros = true
    this.form = false
    this.quitar = false
    this.aniadir = false;
  }

  quitarPerrete(idPerroBBDD: any){   
    this.DatosPerrosService.borrarPerro(idPerroBBDD).subscribe(response => {
    });
    this.form = false
    this.mostrarPerros();
    this.cerrarQuitario();
    
  }

}