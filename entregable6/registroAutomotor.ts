import { Auto,Camion,Moto } from "./vehiculos";
//Creo la clase RegistroAutomotor y defino sus estados y metodos.
export class RegistroAutomotor {
    private autos: Auto[];
    private motos: Moto[];
    private camiones: Camion[];

    constructor(autos?: Auto, motos?: Moto, camiones?: Camion) {
        this.autos = [];
        this.motos = [];
        this.camiones = [];
    }

//Funcion que agrega un vehiculo dependiendo de que tipo es.
    public agregarVehiculo(vehiculo: any) : void {
        if (vehiculo instanceof Auto == true) {
            this.autos.push(vehiculo);
            console.log("El vehiculo se agrego exitosamente");
        } else if (vehiculo instanceof Moto == true) {
            this.motos.push(vehiculo);
            console.log("El vehiculo se agrego exitosamente");
        } else if (vehiculo instanceof Camion == true) {
            this.camiones.push(vehiculo);
            console.log("El vehiculo se agrego exitosamente");
        } else {
            console.log("El vehiculo que desea agregar no esta permitido.");
        }
    }

//Getters.
    public getAutos() {
        return this.autos; 
    }
    public getMotos() {
        return this.motos;
    }
    public getCamiones() {
        return this.camiones;
    }

//Funcion que elimina el vehiculo del arreglo de cada tipo de vehiculo.
    public darDeBajaVehiculo(vehiculo: any) : void {
        if (vehiculo instanceof Auto == true) {
            const indice = this.autos.indexOf(vehiculo);
            this.autos.splice(indice, 1);
            console.log("El vehiculo se a dado de baja.");
        } else if (vehiculo instanceof Moto == true) {
            const indice = this.motos.indexOf(vehiculo);
            this.motos.splice(indice, 1);
            console.log("El vehiculo se a dado de baja.");
        } else if (vehiculo instanceof Camion == true) {
            const indice = this.camiones.indexOf(vehiculo);
            this.camiones.splice(indice, 1);
            console.log("El vehiculo se a dado de baja.");
        } else {
            console.log("El vehiculo que desea eliminar no pertenece a ningun tipo de vehiculo registrado.");
        }
        
    }
}