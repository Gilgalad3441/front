import { Component } from '@angular/core';
import { DatosPerrosService } from 'src/app/app.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { Observable } from 'rxjs/internal/Observable';
import { DatePipe } from '@angular/common';

//variables
var isLicencia: string = '';
var isCastrado: string = '';
var isLeishmaniasis: string = '';
var isOperar: string = '';
var isEnfermedades: string = '';
var isTratamiento: string = '';
var isCastrado: string = '';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  [x: string]: any;

  title = 'pppeludos-web';
  datos: any = {};
  ver_peludo: string = 'Ver datos de los peludos';
  modificar_datos: string = 'Modificar datos';
  aniadir_peludo: string = 'Añadir peludo';
  quitar_peludo: string = 'Quitar peludo';
  alerta_peludo: string = 'Alertas';
  document: undefined;
  formulario = document.getElementById('Formulario');
  hierarchicalData: any;
  datosPerros: boolean | undefined = true;
  form: boolean | undefined = false;
  aniadir: boolean | undefined;
  quitar: boolean | undefined;
  alerta: boolean | undefined;
  profileForm: any;
  nuevoPerro: any = {};
  nuevoPerrete: any = {};
  actualizarPerrete: any = {};
  datoPerroActualizar: any = [];
  altperr: any = [];
  mostrarAlerta: any = [];
  perro: boolean | undefined = false;
  idPerroBBDD: any;
  idPerroBBDDActualizar: any;
  products: Observable<any> | undefined;

  //Estilos del formulario mostrar perros
  licencia(licencia: any) {
    if (licencia && licencia.toLowerCase() === 'si') {
      isLicencia = 'badge badge-danger  rounded-pill d-inline';
    } else {
      isLicencia = 'badge badge-success  rounded-pill d-inline';
    }
    return isLicencia;
  }

  castrado(castrado: any) {
    if (castrado.toLowerCase() === 'si') {
      isCastrado = 'badge badge-success  rounded-pill d-inline';
    } else {
      isCastrado = 'badge badge-danger  rounded-pill d-inline';
    }
    return isCastrado;
  }

  leishmaniasis(Leishmaniasis: any) {
    if (Leishmaniasis.toLowerCase() === 'si') {
      isLeishmaniasis = 'badge badge-danger  rounded-pill d-inline';
    } else {
      isLeishmaniasis = 'badge badge-success  rounded-pill d-inline';
    }
    return isLeishmaniasis;
  }
  pendienteOperar(operar: any) {
    if (operar.toLowerCase() === 'si') {
      isOperar = 'badge badge-danger  rounded-pill d-inline';
    } else {
      isOperar = 'badge badge-success  rounded-pill d-inline';
    }
    return isOperar;
  }
  enfermedades(enfermedades: any) {
    if (enfermedades.toLowerCase() === 'si') {
      isEnfermedades = 'badge badge-danger  rounded-pill d-inline';
    } else {
      isEnfermedades = 'badge badge-success  rounded-pill d-inline';
    }
    return isEnfermedades;
  }

  tratamiento(tratamiento: any) {
    if (tratamiento.toLowerCase() === 'si') {
      isTratamiento = 'badge badge-danger  rounded-pill d-inline';
    } else {
      isTratamiento = 'badge badge-success  rounded-pill d-inline';
    }
    return isTratamiento;
  }

  //Lógica para pintar los distintos formularios
  modificarPeludo() {
    this.mostrarAlerta = [];
    this.datosPerros = false;
    this.form = true;
    this.quitar = false;
    this.aniadir = false;
    this.alerta = false;
  }

  aniadirPeludo() {
    this.mostrarAlerta = [];
    this.form = false;
    this.datosPerros = false;
    this.quitar = false;
    this.aniadir = true;
    this.alerta = false;
  }
  quitarPeludo() {
    this.mostrarAlerta = [];
    this.form = false;
    this.datosPerros = false;
    this.aniadir = false;
    this.quitar = true;
    this.alerta = false;
  }

  cerrarFormulario() {
    this.mostrarAlerta = [];
    this.datosPerros = true;
    this.aniadir = false;
    this.quitar = false;
    this.form = false;
    this.alerta = false;
  }

  cerrarAniadir() {
    this.mostrarAlerta = [];
    this.datosPerros = true;
    this.aniadir = false;
    this.quitar = false;
    this.form = false;
    this.alerta = false;
  }

  cerrarQuitario() {
    this.mostrarAlerta = [];
    this.datosPerros = true;
    this.aniadir = false;
    this.quitar = false;
    this.form = false;
    this.alerta = false;
  }
  alertaPeludo() {
    this.datosPerros = false;
    this.form = false;
    this.quitar = false;
    this.aniadir = false;
    this.alerta = true;
    this.mostrarAlerta = [];
    this.alertasppp();
  }

  //ApisDatosPerros
  constructor(
    private DatosPerrosService: DatosPerrosService,
    private SpinnerService: NgxSpinnerService,
    private Datapipe: DatePipe
  ) {}
  ngOnInit() {
    this.mostrarPerros();
  }
  guardarNuevoPerrete() {
    //Invocar endpoint crearPerro
    this.SpinnerService.show('nuevoPerro');
    this.DatosPerrosService.crearPerro(this.nuevoPerrete).subscribe(
      (response) => {
        this.SpinnerService.hide('nuevoPerro');
        this.mostrarPerros();
        this.nuevoPerrete = {};
        this.datosPerros = true;
        this.aniadir = false;
        this.quitar = false;
        this.form = false;
        this.alerta = false;
      }
    );
  }

  //Invocamos el endpoint listaPerros
  mostrarPerros() {
    this.SpinnerService.show('mostrarPerro');
    var getResponse: any;
    getResponse = this.DatosPerrosService.listaPerros().subscribe(
      (response: any) => {
        this.datos = response;
        this.SpinnerService.hide('mostrarPerro');
        this.savelistaPppeludos(this.datos);
        this.form = false;
        this.quitar = false;
        this.aniadir = false;
        this.alerta = false;
        this.datosPerros = true;
      }
    );
  }

  quitarPerrete(idPerroBBDD: any) {
    this.SpinnerService.show('quitarPerro');

    this.DatosPerrosService.borrarPerro(idPerroBBDD).subscribe(
      (response: any) => {
        this.mostrarPerros();
        this.SpinnerService.hide('quitarPerro');
        this.cerrarQuitario();
      }
    );
  }

  actualizarPerretes() {
    this.SpinnerService.show('actualizarperro');
    if (this.actualizarPerrete && this.actualizarPerrete.nombre) {
      var getResponse: any;
      getResponse = this.DatosPerrosService.listaPerros().subscribe(
        (response: any) => {
          this.SpinnerService.show('component');
          this.datos = response;
          this.datos.forEach(
            (element: { idDatosPerros: number; nombre: any }) => {
              if ((element.nombre = this.actualizarPerrete.nombre)) {
                this.datoPerroActualizar = element;
                this.actualizarPerrete.idDatosPerros = element.idDatosPerros;
                this.perro = true;
                this.comparaActualiza(element, this.actualizarPerrete);
                this.DatosPerrosService.actualizarPerro(
                  element.idDatosPerros,
                  this.actualizarPerrete
                ).subscribe((response: any) => {
                  this.mostrarPerros();
                });
                this.actualizarPerrete.nombre = '';
                this.form = false;
              }
            }
          );

          this.form = false;
          this.cerrarQuitario();
          this.SpinnerService.hide('actualizarperro');
        }
      );
    }
  }

  comparaActualiza(response: any, datosNuevos: any) {
    datosNuevos.foto = response.foto ? response.foto : '';
    if (datosNuevos.foto == undefined) {
    }
    if (datosNuevos.donde_esta == undefined) {
      datosNuevos.donde_esta = response.donde_esta;
    }
    if (datosNuevos.numero_chip == undefined) {
      datosNuevos.numero_chip = response.numero_chip;
    }
    if (datosNuevos.fecha_nacimiento == undefined) {
      datosNuevos.fecha_nacimiento = response.fecha_nacimiento;
    }
    if (datosNuevos.licencia == undefined) {
      datosNuevos.licencia = response.licencia;
    }
    if (datosNuevos.raza == undefined) {
      datosNuevos.raza = response.raza;
    }
    if (datosNuevos.castrado == undefined) {
      datosNuevos.castrado = response.castrado;
    }
    if (datosNuevos.ultima_desparasitacion == undefined) {
      datosNuevos.ultima_desparasitacion = response.ultima_desparasitacion;
    }
    if (datosNuevos.vacuna_rabia == undefined) {
      datosNuevos.vacuna_rabia = response.vacuna_rabia;
    }
    if (datosNuevos.leishmaniasis == undefined) {
      datosNuevos.leishmaniasis = response.leishmaniasis;
    }
    if (datosNuevos.pendiente_operacion == undefined) {
      datosNuevos.pendiente_operacion = response.pendiente_operacion;
    }
    if (datosNuevos.enfermedades == undefined) {
      datosNuevos.enfermedades = response.enfermedades;
    }
    if (datosNuevos.tratamiento == undefined) {
      datosNuevos.tratamiento = response.tratamiento;
    }
  }

  //Métodos sessionStorage
  savelistaPppeludos(_datos: any) {
    sessionStorage.setItem('listaPppeludos', JSON.stringify(_datos) || '[]');
  }
  getlistaPppeludos() {
    return sessionStorage.getItem('listaPppeludos');
  }
  removelistaPppeludos() {
    sessionStorage.removeItem('listaPppeludos');
  }
  saveAlertas(_datos: any) {
    sessionStorage.setItem('alertas', JSON.stringify(_datos) || '[]');
  }
  getAlertas() {
    return sessionStorage.getItem('alertas');
  }
  removeAlertas() {
    sessionStorage.removeItem('alertas');
  }

  comparaFechas(fecha: any) {
    let esMayor: boolean = false;
    let fechaComparar: any;
    if (fecha != null) {
      let arrayFecha = fecha.split('/');
      let formatFechaComparar =
        arrayFecha[1] + '/' + arrayFecha[0] + '/' + arrayFecha[2];
      fechaComparar = new Date(Date.parse(formatFechaComparar)).getTime();
    }

    let today = new Date(Date.parse(Date())).getTime();
    if (fechaComparar && fechaComparar > today) {
      esMayor = true;
    }
    return esMayor;
  }

  alertasppp() {
    let perros: any = [];
    perros = this.DatosPerrosService.listaPerros().subscribe(
      (response: any) => {
        let perro = response;
        perro.forEach(
          (element: {
            nombre: any;
            ultima_desparasitacion: any;
            vacuna_rabia: any;
          }) => {
            let alertasPerros = [];
            let alDia = 'Al día';
            let pendienteVacuna = 'Pendiente';
            if (this.comparaFechas(element.vacuna_rabia)) {
              alertasPerros.push(alDia);
            } else {
              alertasPerros.push(pendienteVacuna);
            }
            if (this.comparaFechas(element.ultima_desparasitacion)) {
              alertasPerros.push(alDia);
            } else {
              alertasPerros.push(pendienteVacuna);
            }
            alertasPerros.push(element.nombre);
            this.mostrarAlerta.push(alertasPerros);
          }
        );
      }
    );
  }
}
