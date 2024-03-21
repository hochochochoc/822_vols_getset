class Vuelo {

    static tones = 0.1;
    // Pertenece a la clase, siempre tiene el mismo valor

    #numPasajeros;   // Hay que definirlo arriba por atributo privado
    huella;

    constructor(numVuelo, distancia, compania, numPasajeros, numMotores ){
        this.numVuelo = numVuelo;
        this.distancia = distancia;
        this.compania = compania;
        this.#numPasajeros = numPasajeros;
        this._numMotores = numMotores;
        this.huella = "no calculado";
    }

    // Getters
    getNumVuelo() {return this.numVuelo}
    getDistancia() {return this.distancia}
    getCompania() {return this.compania}
    getNumPasajeros() {return this.#numPasajeros}
    getNumMotores() {return this._numMotores}
    getHuella() {return this.huella}

    // Setters
    setNumVuelo(numVuelo) {this.numVuelo = numVuelo}
    setDistancia(distancia) {this.distancia = distancia}
    setCompania(compania) {this.compania = compania}
    setNumPasajeros(numPasajeros) {this.#numPasajeros = numPasajeros}
    setNumMotores(numMotores) {this._numMotores = numMotores}

    calculaHuella(){
        this.huella = parseFloat(Vuelo.tones * parseFloat(this.distancia) * this._numMotores).toFixed(0);
        console.log(this.huella);
        return "Huella de carbono: " + this.huella + " toneladas de CO₂.";
    }


    // toString method
    toString() {
        let msj = '';
        msj += 'Vuelo número: ' + this.getNumVuelo() + '<br>'
        msj += 'Compañía: ' + this.getCompania() + '<br>'
        msj += 'Número de pasajeros: ' + this.getNumPasajeros() + '<br>'
        msj += 'Distancia (km): ' + this.getDistancia() + '<br>'
        msj += 'Número de motores: ' + this.getNumMotores() + '<br>'
        msj += 'Huella carbono (t): '+ this.huella + '<br>'
        return msj;
    }
}

const vuelos = [];
vuelos.push(new Vuelo("FR133", 1502, "Ryanair", 200, 2));
vuelos.push(new Vuelo("VN36", 8695, "Vietnam Airlines", 290, 2));
let posicion = 0;