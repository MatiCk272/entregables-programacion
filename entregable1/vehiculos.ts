export class Auto {
    private marca: string;
    private añoDelModelo: number;
    private color: string;
    private motor: string;
    private patente: string;

    constructor(marca: string, añoDelModelo: number, color: string, motor: string, patente: string) {
        this.marca = marca;
        this.añoDelModelo = añoDelModelo;
        this.color = color;
        this.motor = motor;
        this.patente = patente;
    }
    
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
//Funcion que modifica las propiedades de los objetos del clase Auto. 
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

export class Camion {
    private marca: string;
    private añoDelModelo: number;
    private color: string;
    private motor: string;
    private pesoEnKg: number;
    private patente: string;

    constructor(marca: string, añoDelModelo: number, color: string, motor: string, pesoEnKg: number, patente: string) {
        this.marca = marca;
        this.añoDelModelo = añoDelModelo;
        this.color = color;
        this.motor = motor;
        this.pesoEnKg = pesoEnKg;
        this.patente = patente;
    }
    
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
    public getPesoEnKg() {
        return this.pesoEnKg;
    }
    public getPatente() {
        return this.patente;
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
export class Moto {
    private marca: string;
    private añoDelModelo: number;
    private color: string;
    private cilindrada: number;
    private patente: string;

    constructor(marca: string, añoDelModelo: number, color: string, cilindrada: number, patente: string) {
        this.marca = marca;
        this.añoDelModelo = añoDelModelo;
        this.color = color;
        this.cilindrada = cilindrada;
        this.patente = patente;
    }
    
    public getMarca() {
        return this.marca;
    }
    public getAñoDelModelo() {
        return this.añoDelModelo;
    }
    public getColor() {
        return this.color;
    }
    public getCilindrada() {
        return this.cilindrada;
    }
    public getPatente() {
        return this.patente;
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