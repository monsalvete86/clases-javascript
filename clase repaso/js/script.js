const seccionSeleccionarAtaque = document.getElementById('seleccionar-ataque');
const seccionReiniciar = document.getElementById('reiniciar');
const botonMascotaJugador = document.getElementById('boton-mascota');
const botonReiniciar = document.getElementById('boton-reiniciar');

const spanMascotaJugador = document.getElementById("mascota-jugador");

const spanMascotaEnemigo = document.getElementById("mascota-enemigo"); //
const seccionSleccionarMascota = document.getElementById('seleccionar-mascota');

const vidasEnemigoSpan = document.getElementById('vidas-enemigo');
const vidasJugadorSpan = document.getElementById('vidas-jugador');

const sectionMensajes = document.getElementById('resultado');
const ataquesDelJugador = document.getElementById('ataques-del-jugador');
const ataquesDelEnemigo = document.getElementById('ataques-del-enemigo');

const contenedorTarjetas = document.getElementById('contenedor-tarjetas');
const contenedorAtaques = document.getElementById('contenedorAtaques');

let mokepones = [];
let ataqueJugador = [];
let ataqueEnemigo = [];
let opcionDeMokepones;
let vidasJugador = 3;
let vidasEnemigo = 3;
let mascotaJugador = '';
let mascotaEnemigo = '';
let ataquesMokepon;
let ataquesMokeponEnemigo = [];
let botonFuego;
let botonAgua;
let botonTierra;
let botones = [];

class Mokepon {
  constructor(nombre, foto, vida) {
    this.nombre = nombre;
    this.foto = foto;
    this.vida = vida;
    this.ataques = [];
  }
}
let hipodoge = new Mokepon(
  'Hipodoge',
  './assets/mokepons_mokepon_hipodoge_attack.webp',
  5
);

let capipepo = new Mokepon(
  'Capipepo',
  './assets/mokepons_mokepon_capipepo_attack.webp',
  5
);

let ratigueya = new Mokepon(
  'Ratigueya',
  './assets/mokepons_mokepon_ratigueya_attack.webp',
  5
);

hipodoge.ataques.push(
  { nombre: '💧', id: 'boton-agua' },
  { nombre: '💧', id: 'boton-agua' },
  { nombre: '💧', id: 'boton-agua' },
  { nombre: '🔥', id: 'boton-fuego' },
  { nombre: '🪴', id: 'boton-tierra' }
);

capipepo.ataques.push(
  { nombre: '🪴', id: 'boton-tierra' },
  { nombre: '🪴', id: 'boton-tierra' },
  { nombre: '🪴', id: 'boton-tierra' },
  { nombre: '💧', id: 'boton-agua' },
  { nombre: '🔥', id: 'boton-fuego' }
);

ratigueya.ataques.push(
  { nombre: '🔥', id: 'boton-fuego' },
  { nombre: '🔥', id: 'boton-fuego' },
  { nombre: '🔥', id: 'boton-fuego' },
  { nombre: '💧', id: 'boton-agua' },
  { nombre: '🪴', id: 'boton-tierra' }
);

mokepones.push(hipodoge, capipepo, ratigueya);
console.log('Mis mokepones:', mokepones);

function iniciarJuego() {
	
	seccionSeleccionarAtaque.style.display = 'none';

  mokepones.forEach((mokepon) => {
    opcionDeMokepones = `
      <input type="radio" name="mascota" id="${mokepon.nombre}" />
      <label class="tarjeta-de-mokepon" for="${mokepon.nombre}" >
        <p>${mokepon.nombre}</p>
        <img src="${mokepon.foto}" alt="${mokepon.nombre}" />
      </label>
    `;

    contenedorTarjetas.innerHTML += opcionDeMokepones;
  });

	seccionReiniciar.style.display = 'none';

	// Listeners de botones ----------------------------------------------------------
	
	botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador);
	botonReiniciar.addEventListener('click', reiniciarJuego);
}

function reiniciarJuego() {
	ataqueJugador = [];
	ataqueEnemigo = [];
  ataquesDelJugador.innerHTML = '';
  ataquesDelEnemigo.innerHTML = '';
	vidasJugador = 3;
	vidasEnemigo = 3;
	sectionMensajes.innerHTML = 'Mucha suerte';
	vidasEnemigoSpan.innerHTML = vidasEnemigo;
	vidasJugadorSpan.innerHTML = vidasJugador;
	botonMascotaJugador.disabled = false;
	seccionReiniciar.style.display = 'none';
	seccionSeleccionarAtaque.style.display = 'none';
	seccionSleccionarMascota.style.display = 'flex';

	cambiarEstadoBotones(true);
}


function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function ataqueAleatorioeEnemigo() {
	let ataqueAleatorio = aleatorio(0, ataquesMokeponEnemigo.length - 1);

	if (ataqueAleatorio === 0 || ataqueAleatorio === 1) {
		ataqueEnemigo.push('FUEGO');
	} else if (ataqueAleatorio === 4 || ataqueAleatorio === 3) {
		ataqueEnemigo.push('AGUA');
	} else {
		ataqueEnemigo.push('TIERRA');
	}

	crearMensaje();
}

function combate() {
	if (ataqueJugador == ataqueEnemigo) return "EMPATE";

	if (
		(ataqueJugador == 'FUEGO' && ataqueEnemigo == 'TIERRA') ||
		(ataqueJugador == 'AGUA' && ataqueEnemigo == 'FUEGO') ||
		(ataqueJugador == 'TIERRA' && ataqueEnemigo == 'AGUA')
	) {
		vidasEnemigo--;
		vidasEnemigoSpan.innerHTML = vidasEnemigo;

		return "GANASTE";
	}

	vidasJugador--;
	vidasJugadorSpan.innerHTML = vidasJugador;

	return "PERDISTE";
}

function crearMensaje() {
	const resultado = combate();

	let nuevoAtaqueDelEnemigo = document.createElement('p');
	let nuevoAtaqueDelJugador = document.createElement('p');

	sectionMensajes.innerHTML = resultado;

	nuevoAtaqueDelJugador.innerHTML = ataqueJugador; // variable global ataqueJugador
	nuevoAtaqueDelEnemigo.innerHTML = ataqueEnemigo; // variable global ataqueEnemigo

	ataquesDelJugador.appendChild(nuevoAtaqueDelJugador);
	ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo);

	crearMensajeFinal();
}

function crearMensajeFinal() {
	if (vidasEnemigo == 0) {
		sectionMensajes.innerHTML = '¡FELICIDADES! ¡GANASTE EL JUEGO!';
		cambiarEstadoBotones();
	} else if (vidasJugador == 0) {
		sectionMensajes.innerHTML = 'Lo siento, perdiste el juego :(';
		cambiarEstadoBotones();
	}

	if (vidasEnemigo == 0 || vidasJugador == 0) {
		seccionReiniciar.style.display = 'block';
	}
}

function seleccionarMascotaJugador() {
  const inputHipodoge = document.getElementById("Hipodoge");
  const inputCapipepo = document.getElementById("Capipepo");
  const inputRatigueya = document.getElementById("Ratigueya");

  if (inputHipodoge.checked) {
    spanMascotaJugador.innerHTML = inputHipodoge.id;
    mascotaJugador = inputHipodoge.id;
  } else if (inputCapipepo.checked) {
    spanMascotaJugador.innerHTML = inputCapipepo.id;
    mascotaJugador = inputCapipepo.id;
  } else if (inputRatigueya.checked) {
    spanMascotaJugador.innerHTML = inputRatigueya.id;
    mascotaJugador = inputRatigueya.id;
  } else {
    alert("Selecciona una mascota");
		return;
  }

	botonMascotaJugador.disabled = true;

  extraerAtaques();
  seleccionarMascotaEnemigo();
}

function extraerAtaques() {
    let ataques
    for (let i = 0; i < mokepones.length; i++) {
        if (mascotaJugador === mokepones[i].nombre) {
            ataques = mokepones[i].ataques
        }
        
    }
    mostrarAtaques(ataques)
}

function mostrarAtaques(ataques) {
  ataques.forEach((ataque, index) => {
    contenedorAtaques.innerHTML += `
      <button id="${ataque.id}-${index}" 
        data-id="${ataque.id}" class="boton-de-ataque BAtaque"
      >${ataque.nombre}</button>
    `;
  });

  // ahora obtenemos NodeLists por tipo en lugar de un único elemento por id
  botonFuego = document.querySelectorAll('[data-id="boton-fuego"]');
  botonAgua = document.querySelectorAll('[data-id="boton-agua"]');
  botonTierra = document.querySelectorAll('[data-id="boton-tierra"]');
  botones = document.querySelectorAll('.BAtaque');
  console.log(" botones: ", botones);
}

function secuenciaAtaque() {
    botones.forEach((boton) => {
        boton.addEventListener('click', (e) => {
            if (e.target.textContent === '🔥') {
                ataqueJugador.push('FUEGO');
                console.log(ataqueJugador);
                boton.style.background = '#112f58';
                boton.style.display = 'none';
            } else if (e.target.textContent === '💧') {
                ataqueJugador.push('AGUA')
                console.log(ataqueJugador);
                boton.style.background = '#112f58';
                boton.style.display = 'none';
            } else {
                ataqueJugador.push('TIERRA')
                console.log(ataqueJugador);
                boton.style.background = '#112f58';
                boton.style.display = 'none';
            }

            ataqueAleatorioeEnemigo();
        })
    })
}

function seleccionarMascotaEnemigo() {
  let mascotaAleatoria = aleatorio(0, mokepones.length - 1);
  
  spanMascotaEnemigo.innerHTML = mokepones[mascotaAleatoria].nombre;
  ataquesMokeponEnemigo = mokepones[mascotaAleatoria].ataques;


	seccionSleccionarMascota.style.display = 'none';	
	seccionSeleccionarAtaque.style.display = 'flex';
  secuenciaAtaque();
	cambiarEstadoBotones();	
}

function cambiarEstadoBotones(reinicio = false) {
	botonFuego.disabled = reinicio ? true : !botonFuego.disabled;
	botonAgua.disabled = reinicio ? true : !botonAgua.disabled;
	botonTierra.disabled =  reinicio ? true : !botonTierra.disabled;
}

window.addEventListener('load', iniciarJuego)