import { Auto,Camion,Moto } from "./vehiculos";
//Creo la clase RegistroAutomotor y defino sus estados y metodos.
class RegistroAutomotor {
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
//Creo el objeto registroAutomotor1 y le asigno los parametros, Lo hago de esta manera para poder agregarle un nombre a cada vehiculo.
const consecionaria: RegistroAutomotor = new RegistroAutomotor();

const auto1: Auto = new Auto("Ford", 2016, "Gris", "1.6 Naftero", "NVZ039");
const auto2: Auto = new Auto("Fiat", 2011, "Azul", "2.0 Naftero", "OWP332");
const auto3: Auto = new Auto("Chevrolet", 2020, "Rojo", "1.9 Gasolero", "HGF919");

const moto1: Moto = new Moto("Zanella", 2005, "Verde", 150,"K403BCD");
const moto2: Moto = new Moto("Honda", 20020, "Negro", 300,"P664MNB");

const camion1: Camion = new Camion("Iveco", 2010, "Blanco", "Diesel", 8.600,"QL123OP");

consecionaria.agregarVehiculo(auto1);
consecionaria.agregarVehiculo(auto2);
consecionaria.agregarVehiculo(auto3);

consecionaria.agregarVehiculo(moto1);
consecionaria.agregarVehiculo(moto2);

consecionaria.agregarVehiculo(camion1);

//Ejecuto el metodo para modificar vehiculos.
auto2.modificarVehiculo("marca","Rojo"); 
moto1.modificarVehiculo("cilindrada","170");
//Ejecuto el metodo para dar de baja un vehiculo.
consecionaria.darDeBajaVehiculo(auto3);