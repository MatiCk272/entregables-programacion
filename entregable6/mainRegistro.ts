import { Auto,Camion,Moto } from "./vehiculos";
import { RegistroAutomotor } from "./registroAutomotor";
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