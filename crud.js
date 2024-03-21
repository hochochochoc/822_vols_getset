window.onload = function() {
    irAPosicionVuelo();
    document.getElementById("siguiVuelo").onclick = siguiVuelo;
    document.getElementById("antVuelo").onclick = antVuelo;
    document.getElementById("modifVuelo").onclick = modifVuelo;
    document.getElementById("mostrarVuelo").onclick = mostrarVuelo;
    document.getElementById("crearVuelo").onclick = crearVuelo;
    document.getElementById("borrarVuelo").onclick = borrarVuelo;
    document.getElementById("calcHuella").onclick = mostrarHuella; 
};

function irAPosicionVuelo() {
    if(vuelos.length === 0){
        document.getElementById('vueloMost').innerHTML = "No vuelos disponibles.";
    } else {
        const vuelo = vuelos[posicion];
        document.getElementById('vueloMost').innerHTML = vuelo.toString();
    }
}

function mostrarHuella() {
    const huella = vuelos[posicion].calculaHuella();
    alert(huella);
    irAPosicionVuelo();
}


function siguiVuelo() {
    posicion = (posicion + 1) % vuelos.length;
    irAPosicionVuelo();
}


function antVuelo() {
    posicion = (posicion - 1 + vuelos.length) % vuelos.length;
    irAPosicionVuelo();
}


function crearVuelo() {
    
    let numVuelo = prompt("Indica el número del vuelo:");
    let yaExiste = false;

    for (let i = 0; i < vuelos.length; i++) {
        if (vuelos[i].numVuelo.toLowerCase() === numVuelo.toLowerCase()) {
            yaExiste = true;
            break;
        }
    }

    if (!yaExiste) { // Si no existe ya
        let distancia = prompt("Indica la distancia del vuelo:");
        let compania = prompt("Indica la compañia del vuelo:");
        let numPasajeros = prompt("Indica el número de pasajeros:");
        let numMotores = prompt("Indica el número de motores:");

        // Crear nuevo vuelo
        let nuevoVuelo = new Vuelo(numVuelo, distancia, compania, numPasajeros, numMotores);
        vuelos.push(nuevoVuelo);
        
        posicion = vuelos.length - 1; // Ven a posicion de la nueva imagen
        irAPosicionVuelo();

    } else {
        alert("El vuelo ya existe");
    }
}

// 
function borrarVuelo() {
    let confirmacion = confirm("¿Estás seguro de querer eliminar este vuelo?");
    if (confirmacion) {
        vuelos.splice(posicion, 1);

        if (posicion === vuelos.length) {
            posicion = vuelos.length - 1;
        }

        irAPosicionVuelo();
    }
}


function mostrarVuelo() {
    let numVuelo = prompt("Indica el número del vuelo:");
    let yaExiste = false;
    let indicator = 0;

    for (let i = 0; i < vuelos.length; i++) {
        if (vuelos[i].numVuelo.toLowerCase() === numVuelo.toLowerCase()) {
            yaExiste = true;
            indicator = i;
            break;
        }
    }

    if (!yaExiste) { // Si no existe ya
        alert("El vuelo no existe")
    
    } else {
        posicion = indicator; // Ven a posicion de la nueva imagen
        
        mostrarHuella();
        irAPosicionVuelo(); 
    }
}

function modifVuelo() {
    // Pedir vuelo a modificar
    let numVuelo = prompt("Indica el número del vuelo que quieres modificar:");
    let vueloToModify = vuelos.find(vuelo => vuelo.getNumVuelo() === numVuelo.toUpperCase());

    if (!vueloToModify) {
        alert("Vuelo no encontrado.");
        return;
    }

    // Pedir atributo a modificar
    let cambAtributo = prompt("Qué atributo quieres cambiar? \n 1 para número \n 2 para distancia \n 3 para compañía \n 4 para número de pasajeros \n 5 para número de motores");

    cambAtributo = parseInt(cambAtributo);

    if (cambAtributo === 1) {
        let newNumVuelo = prompt("Número actual: " + vueloToModify.getNumVuelo() + ". Número nuevo:", vueloToModify.getNumVuelo());
        if (newNumVuelo !== null) {
            vueloToModify.setNumVuelo(newNumVuelo.toUpperCase());
        }
    } else if (cambAtributo === 2) {
        let distancia = prompt("Distancia actual: " + vueloToModify.getDistancia() + ". Nueva distancia (km):", vueloToModify.getDistancia());
        if (distancia !== null) {
            vueloToModify.setDistancia(parseFloat(distancia));
        }
    } else if (cambAtributo === 3) {
        let compania = prompt("Compañía actual: " + vueloToModify.getCompania() + ". Nueva compañía:", vueloToModify.getCompania());
        if (compania !== null) {
            vueloToModify.setCompania(compania);
        }
    } else if (cambAtributo === 4) {
        let numPasajeros = prompt("Número de pasajeros actual: " + vueloToModify.getNumPasajeros() + ". Nuevo número de pasajeros:", vueloToModify.getNumPasajeros());
        if (numPasajeros !== null) {
            vueloToModify.setNumPasajeros(parseInt(numPasajeros));
        }
    } else if (cambAtributo === 5) {
        let numMotores = prompt("Número de motores actual: " + vueloToModify.getNumMotores() + ". Nuevo número de motores:", vueloToModify.getNumMotores());
        if (numMotores !== null) {
            vueloToModify.setNumMotores(parseInt(numMotores));
        }
    } else {
        alert("Opción no válida. Seleciona: \n 1 para número \n 2 para distancia \n 3 para compañía \n 4 para número de pasajeros \n 5 para número de motores");
    }

    alert("Vuelo actualizado.");
    irAPosicionVuelo();
}

function aplicarModificacion() {
    let nombreAtributo = document.getElementById("nombreAtributo").value;
    let nuevoValor = document.getElementById("nuevoValor").value;
    
    vuelos[posicion][nombreAtributo] = nuevoValor;
    
    // Refrescar
    irAPosicionVuelo(); 
    document.getElementById("nuevoValor").value = "";
    document.getElementById("modificar").style.display = "none";  
}
