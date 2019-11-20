import { Calificacion } from "../calificacion/calificacion";
import { Zona } from "../zona/zona";

export class Paseador {
    foto: string;
    precio: number;
    ganancias: number;
    infoAdicional: string;
    nombre: string;
    correo: string;
    contrasena: string;
    infoContacto: string;
    id: number;


    calificaciones: Calificacion[];
    zonas: Zona[];

}
