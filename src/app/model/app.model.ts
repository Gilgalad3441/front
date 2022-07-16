export class DatosPerros {
    //? No es obligatorio
    idDatosPerros: number;
    foto!: string;
    nombre!: string;
    donde_esta!: string;
    numero_chip!: any;
    fecha_nacimiento!: string;
    licencia!: string;
    raza!: string;
    castrado!: string;
    ultima_desparasitacion!: string;
    vacuna_rabia!: string;
    leishmaniasis!: string;
    pendiente_operacion!: string;
    enfermedades!: string;
    tratamiento!: string;

    constructor(idDatosPerros: number,
        foto: string,
        nombre: string,
        donde_esta: string,
        numero_chip: any,
        fecha_nacimiento: string,
        licencia: string,
        raza: string,
        castrado: string,
        ultima_desparasitacion: string,
        vacuna_rabia: string,
        leishmaniasis: string,
        pendiente_operacion: string,
        enfermedades: string,
        tratamiento: string) {

        this.idDatosPerros = idDatosPerros;
        this.foto = foto;
        this.nombre = nombre;
        this.donde_esta = donde_esta;
        this.numero_chip = numero_chip;
        this.fecha_nacimiento = fecha_nacimiento;
        this.licencia = licencia;
        this.raza = raza;
        this.castrado = castrado;
        this.ultima_desparasitacion = ultima_desparasitacion;
        this.vacuna_rabia = vacuna_rabia;
        this.leishmaniasis = leishmaniasis;
        this.pendiente_operacion = pendiente_operacion;
        this.enfermedades = enfermedades;
        this.tratamiento = tratamiento;


    }
    

}