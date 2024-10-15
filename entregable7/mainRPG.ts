import { Arquero,Luchador,Mago,Druida } from "./personajesRPG";
//Creo cada instancia de cada clase.
const arquero1: Arquero = new Arquero("Legolas", 5, 150, 10, 50, 70, 20);
const luchador1: Luchador = new Luchador("Hercules", 30, 250, 40, 30, 75, 15);
const mago1: Mago = new Mago("Harry Potter", 60, 100, 20, 70, 50, 10, 100);
const druida1: Druida = new Druida("Merlin", 1, 300, 40, 0, 10, 150, 35);
//Ejecuto algunas funciones de prueba.
arquero1.atacar();
luchador1.aprenderHabilidad()
mago1.evolucion();
druida1.defender()

luchador1.apHabilidadCofre("Velocidad Extrema");