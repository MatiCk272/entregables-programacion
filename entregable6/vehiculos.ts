export class Auto {
    protected marca: string;
    protected añoDelModelo: number;
    protected color: string;
    protected motor: string;
    protected patente: string;

    constructor(marca: string, añoDelModelo: number, color: string, motor: string, patente: string) {
        this.marca = marca;
        this.añoDelModelo = añoDelModelo;
        this.color = color;
        this.motor = motor;
        this.patente = patente;
    }

//Getters.
    public getMarca() {
        return this.marca;
    }
    public getAñoDelModelo() {
        return this.añoDelModelo;
    }
    public getColor() {
        return this.color;
    }
    public getMotor() {
        return this.motor;
    }
    public getPatente() {
        return this.patente; 
    }

//Setters.
    public setMarca(nuevaMarca: string) : void {
        this.marca = nuevaMarca;
    }
    public setAñoDelModelo(nuevoAño: string) : void {
        this.marca = nuevoAño;
    }
    public setColor(nuevoColor: string) : void {
        this.marca = nuevoColor;
    }
    public setMotor(nuevoMotor: string) : void {
        this.marca = nuevoMotor;
    }
    public setPatente(nuevaPatente: string) : void {
        this.marca = nuevaPatente;
    }

//Funcion que modifica las propiedades de los objetos del clase Auto dependiendo que elija el cliente. 
    public modificarVehiculo(propiedad: string, cambio: any) : void {
        if (propiedad == "marca") {
            this.marca = cambio;
        } else if (propiedad == "añoDelModelo") {
            this.añoDelModelo = cambio;
        } else if (propiedad == "color") {
            this.color = cambio;
        } else if (propiedad == "motor") {
            this.motor = cambio;
        } else if (propiedad == "patente") {
            this.patente = cambio;
        } else {
            console.log("La propiedad es incorrecta para este vehiculo o no existe.");
        }
    }
}

export class Camion extends Auto {
    private pesoEnKg: number;

    constructor(marca: string, añoDelModelo: number, color: string, motor: string, pesoEnKg: number, patente: string) {
        super(marca, añoDelModelo, color, motor, patente);
        this.pesoEnKg = pesoEnKg;
    }

//Getters.
    public getPesoEnKg() {
        return this.pesoEnKg;
    }

//Setters.
    public setPesoEnKg(nuevoPeso: number) : void {
        this.pesoEnKg = nuevoPeso;
    }

//Funcion que modifica las propiedades de los objetos del clase Camion. 
    public modificarVehiculo(propiedad: string, cambio: any) : void {
        if (propiedad == "marca") {
            this.marca = cambio;
        } else if (propiedad == "añoDelModelo") {
            this.añoDelModelo = cambio;
        } else if (propiedad == "color") {
            this.color = cambio;
        } else if (propiedad == "motor") {
            this.motor = cambio;
        } else if (propiedad == "pesoEnKg") {
            this.pesoEnKg = cambio;
        } else if (propiedad == "patente") {
            this.patente = cambio;
        } else {
            console.log("La propiedad es incorrecta para este vehiculo o no existe.");
        }
    }
}

export class Moto extends Auto {
    private cilindrada: number;

    constructor(marca: string, añoDelModelo: number, color: string, cilindrada: number, patente: string) {
        super(marca, añoDelModelo, color, patente, "");
        this.cilindrada = cilindrada;
    }

//Getters.
    public getCilindrada() {
        return this.cilindrada;
    }

//Setters.
    public setCilindrada(nuevaCilindrada: number) : void {
        this.cilindrada = nuevaCilindrada;
    }
    
//Funcion que modifica las propiedades de los objetos del clase Moto. 
    public modificarVehiculo(propiedad: string, cambio: any) : void {
        if (propiedad == "marca") {
            this.marca = cambio;
        } else if (propiedad == "añoDelModelo") {
            this.añoDelModelo = cambio;
        } else if (propiedad == "color") {
            this.color = cambio;
        } else if (propiedad == "cilindrada") {
            this.cilindrada = cambio;
        } else if (propiedad == "patente") {
            this.patente = cambio;
        } else {
            console.log("La propiedad es incorrecta para este vehiculo o no existe.");
        }
    }
}