//La clase base se va a llamar Humano.
class Humano {
    //Propiedades base.
    protected nombre: string;
    protected nvl: number;
    protected salud: number;
    protected armadura: number;

    constructor(nombre: string, nvl: number, salud: number, armadura: number) {
        this.nombre = nombre;
        this.nvl = nvl;
        this.salud = salud;
        this.armadura = armadura;
    }
    
//Getters.
    public getNombre() {
        return this.nombre;
    }
    public getNvl() {
        return this.nvl; 
    }
    public getSalud() {
        return this.salud; 
    }
    public getArmadura() {
        return this.armadura; 
    }

//Setters.
    public setNombre(nuevoNombre: string) : void {
        this.nombre = nuevoNombre;
    }
    public setNvl(nuevoNvl: number) : void {
        this.nvl = nuevoNvl;
    }
    public setSalud(nuevaSalud: number) : void {
        this.salud = nuevaSalud;
    }
    public setArmadura(nuevaArmadura: number) : void {
        this.armadura = nuevaArmadura;
    }

//Metodos.
    //Metodo que muestra en pantalla que el personaje no puede atacar.
    public atacar(): void {
        console.log("Este personaje no puede realizar ataques");
    }
    //Metodo que muestra en pantalla que el personaje se defendio.
    public defender(): void {
        console.log(this.nombre + " se defendio correctamente");
    }
}

//Clase Arquero heredada de la clase Humano.
export class Arquero extends Humano {
    //Creo nuevas propiedades para esta clase.
    private daño: number;
    private precision: number;
    private agilidad: number;
    private habilidades: string[];

    constructor(nombre: string, nvl: number, salud: number, armadura: number, daño: number, precision: number, agilidad: number) {
        super(nombre, nvl, salud, armadura);
        this.daño = daño;
        this.precision = precision;
        this.agilidad = agilidad;
        this.habilidades = [];
    }

//Getters.
    public getDaño() {
        return this.daño;
    }
    public getPrecision() {
        return this.precision;
    }
    public getAgilidad() {
        return this.agilidad;
    }
    public getHabilidades() {
        return this.habilidades;
    }

//Setters.
    public setDaño(nuevoDaño: number) : void {
        this.daño = nuevoDaño;
    }
    public setPrecision(nuevaPrecision: number) : void {
        this.precision = nuevaPrecision;
    }
    public setAgilidad(nuevaAgilidad: number) : void {
        this.agilidad = nuevaAgilidad;
    }

//Metodos.
    //Metodo que muestra en pantalla que el personaje ataco correctamente.
    public atacar(): void {
        console.log(this.nombre + " Realizo un ataque a distancia");
    }
    //Metodo que muestra en pantalla que el personaje esta recargando.
    public recargando(): void {
        console.log(this.nombre + " Esta recargando");
    }
    //Metodo que agrega un string al arreglo "habilidades", y muestra en pantalla lo que agrego. se va a agregar si cumple con los requisitos.
    public aprenderHabilidadNvl(): void {
        if (this.nvl >= 5) {
            this.habilidades.push("Recarga Veloz");
            console.log(this.nombre + " Aprendio la habilidad Recarga Veloz");
        }
        if (this.nvl >= 30) {
            this.habilidades.push("Super Disparo");
            console.log(this.nombre + " Aprendio la habilidad Super Disparo");
        }
    }
    //Metodo que agrega un string al arreglo "habilidades" con un mensaje.
    public apHabilidadCofre(habilidad: string): void {
        this.habilidades.push(habilidad);
        console.log(this.nombre + " Abrio el cofre y aprendo la habilidad" + habilidad);
    }
}

//Clase Luchador heredada de la clase Humano.
export class Luchador extends Humano {
    //Creo nuevas propiedades para esta clase.
    private daño: number;
    private energia: number;
    private agilidad: number;
    private habilidades: string[];

    constructor(nombre: string, nvl: number, salud: number, armadura: number, daño: number, energia: number, agilidad: number) {
        super(nombre, nvl, salud, armadura);
        this.daño = daño;
        this.energia = energia;
        this.agilidad = agilidad;
        this.habilidades = [];
    }

//Getters.
    public getDaño() {
        return this.daño;
    }
    public getResistencia() {
        return this.energia;
    }
    public getAgilidad() {
        return this.agilidad;
    }
    public getHabilidades() {
        return this.habilidades;
    }

//Setters.
    public setDaño(nuevoDaño: number) : void {
        this.daño = nuevoDaño;
    }
    public setResistencia(nuevaEnergia: number) : void {
        this.energia = nuevaEnergia;
    }
    public setAgilidad(nuevaAgilidad: number) : void {
        this.agilidad = nuevaAgilidad;
    }

//Metodos.
    public atacar(): void {
        console.log(this.nombre + " Realizo un ataque fisico");
    }
    //Metodo que muestra en pantalla que el personaje esta recuperando energia.
    public recupEnergia(): void {
        console.log(this.nombre + " Esta recuperando energia");
    }
    public aprenderHabilidad(): void {
        if (this.nvl >= 5) {
            this.habilidades.push("Golpe Cargado");
            console.log(this.nombre + " Aprendio la habilidad Ataque Cargado");
        }
        if (this.nvl >= 30) {
            this.habilidades.push("Inmortal");
            console.log(this.nombre + " Aprendio la habilidad Inmortal");
        }
    }
    public apHabilidadCofre(habilidad: string): void {
        this.habilidades.push(habilidad);
        console.log(this.nombre + " Abrio el cofre y aprendo la habilidad " + habilidad);
    }
    //Metodo que si se cumplen los requisitos el personaje evoluciona a otra clase y se le agrega un string al arreglo "habilidades".
    public evolucion(): void {
        if (this.nvl >= 60) {
            console.log(this.nombre + " Evoluciono a Guerrero");
            this.habilidades.push("Rompe Huesos");
            console.log(this.nombre + " Aprendio la habilidad Rompe Huesos");
        }
    }
}

//Clase Mago heredada de la clase Humano.
export class Mago extends Humano {
    //Creo nuevas propiedades para esta clase.
    private daño: number;
    private precision: number;
    private agilidad: number;
    private mana: number;
    private habilidades: string[];

    constructor(nombre: string, nvl: number, salud: number, armadura: number, daño: number, precision: number, agilidad: number, mana: number) {
        super(nombre, nvl, salud, armadura);
        this.daño = daño;
        this.precision = precision;
        this.agilidad = agilidad;
        this.mana = mana;
        this.habilidades = [];
    }

//Getters.
    public getDaño() {
        return this.daño;
    }
    public getPrecision() {
        return this.precision;
    }
    public getAgilidad() {
        return this.agilidad;
    }
    public getMana() {
        return this.mana;
    }
    public getHabilidades() {
        return this.habilidades;
    }

//Setters.
    public setDaño(nuevoDaño: number) : void {
        this.daño = nuevoDaño;
    }
    public setPrecision(nuevaPrecision: number) : void {
        this.precision = nuevaPrecision;
    }
    public setAgilidad(nuevaAgilidad: number) : void {
        this.agilidad = nuevaAgilidad;
    }
    public setMana(nuevoMana: number) : void {
        this.mana = nuevoMana;
    }

//Metodos.
    public atacar(): void {
        console.log(this.nombre + " Realizo un ataque magico");
    }
    //Metodo que muestra en pantalla que el personaje esta recuperando mana.
    public recupMana(): void {
        console.log(this.nombre + " Esta recuperando Mana");
    }
    public aprenderHabilidad(): void {
        if (this.nvl >= 5) {
            this.habilidades.push("invisibilidad");
            console.log(this.nombre + " Aprendio la habilidad invisibilidad");
        }
        if (this.nvl >= 30) {
            this.habilidades.push("Cañon de Luz");
            console.log(this.nombre + " Aprendio la habilidad Cañon de Luz");
        }
    }
    public apHabilidadCofre(habilidad: string): void {
        this.habilidades.push(habilidad);
        console.log(this.nombre + " Abrio el cofre y aprendo la habilidad" + habilidad);
    }
    public evolucion(): void {
        if (this.nvl >= 60) {
            console.log(this.nombre + " Evoluciono a Hechicero");
            this.habilidades.push("Destello Final");
            console.log(this.nombre + " Aprendio la habilidad Destello Final");
        }
    }
}

//Clase Druida heredada de la clase Humano.
export class Druida extends Humano {
    //Creo nuevas propiedades para esta clase.
    private agilidad: number;
    private mana: number;
    private poderSanacion: number;
    private habilidades: string[];

    constructor(nombre: string, nvl: number, salud: number, armadura: number, daño: number, agilidad: number, mana: number, poderSanacion: number) {
        super(nombre, nvl, salud, armadura);
        this.agilidad = agilidad;
        this.mana = mana;
        this.poderSanacion = poderSanacion;
        this.habilidades = [];
    }

//Getters.
    public getAgilidad() {
        return this.agilidad;
    }
    public getMana() {
        return this.mana;
    }
    public getPoderSanacion() {
        return this.poderSanacion;
    }
    public getHabilidades() {
        return this.habilidades;
    }

//Setters.
    public setAgilidad(nuevaAgilidad: number) : void {
        this.agilidad = nuevaAgilidad;
    }
    public setMana(nuevoMana: number) : void {
        this.mana = nuevoMana;
    }
    public setPoderSanacion(nuevoPoderSanacion: number): void {
        this.poderSanacion = nuevoPoderSanacion;
    }

//Metodos.
    public recupMana(): void {
        console.log(this.nombre + " Esta recuperando Mana");
    }
    //Metodo que muestra en pantalla que el personaje esta sanando a un aliado.
    public sanar(): void {
        console.log(this.nombre + " Esta sanando a un aliado");
    }
    public aprenderHabilidad(): void {
        if (this.nvl >= 5) {
            this.habilidades.push("Zona de Sanacion");
            console.log(this.nombre + " Aprendio la habilidad Zona de Sanacion");
        }
        if (this.nvl >= 30) {
            this.habilidades.push("Revivir");
            console.log(this.nombre + " Aprendio la habilidad Revivir");
        }
    }
    public apHabilidadCofre(habilidad: string): void {
        this.habilidades.push(habilidad);
        console.log(this.nombre + " Abrio el cofre y aprendo la habilidad" + habilidad);
    }
}