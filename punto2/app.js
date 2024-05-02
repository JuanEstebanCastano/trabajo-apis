


const resultado = document.querySelector('.resultado')
const form = document.querySelector('.contenedorClima');
const nombreCiudad = document.querySelector('#ciudad')
const nombrePais = document.querySelector('#pais')

form.addEventListener('submit', (e) => {
    e.preventDefault()

    if (nombreCiudad.value === '' || nombrePais.value === '') {
        mensajeError('Ambos campos son obligatorios...')
        return;
    }

    callAPI(nombreCiudad.value, nombrePais.value)

})

function callAPI(prtCiudad, prtPais) {
    const apiId = '41d1d7f5c2475b3a16167b30bc4f265c';
    const urlgeteada = `
    http://api.openweathermap.org/data/2.5/weather?q=${prtCiudad},${prtPais}&appid=${apiId}`;

    fetch(urlgeteada)
        .then(data => {
            return data.json()
        })
        .then(dataJSON => {
            if (dataJSON.cod === '404') {
                mensajeError('Ciudad no encontrada...');
            } else {
                resultado.innerHTML = ''
                mostrarClimas(dataJSON)
            }
        })
        .catch(error => {
            console.log(error);
        })
}

function mostrarClimas(data) {
    const { name, main: { temp, temp_min, temp_max }, weather: [arr] } = data;

    const gradosActuales = convertirKelvinaCentigrados(temp);
    const min = convertirKelvinaCentigrados(temp_min);
    const max = convertirKelvinaCentigrados(temp_max);

    const contenidoDiv = document.createElement('div');
    contenidoDiv.innerHTML = `
        <h5>Clima en ${name}</h5>
        <img src="https://openweathermap.org/img/wn/${arr.icon}@2x.png" alt="icono">
        <h2>${gradosActuales}°C</h2>
        <p>Max: ${max}°C</p>
        <p>Min: ${min}°C</p>
    `

    resultado.appendChild(contenidoDiv)
}

function mensajeError(message) {

    const mensaje = document.createElement('p')
    mensaje.classList.add('mensaje-error')
    mensaje.innerHTML = message

    form.appendChild(mensaje)
    setTimeout(() => {
        mensaje.remove()
    }, 3000);
}


function convertirKelvinaCentigrados(parametro) {
    return parseInt(parametro - 273.15);
}

