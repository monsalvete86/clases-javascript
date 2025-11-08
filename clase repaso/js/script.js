const seccionSeleccionarAtaque = document.getElementById('seleccionar-ataque');
const seccionReiniciar = document.getElementById('reiniciar');
const botonMascotaJugador = document.getElementById('boton-mascota');
const botonFuego = document.getElementById('boton-fuego');
const botonAgua = document.getElementById('boton-agua');
const botonTierra = document.getElementById('boton-tierra');
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

let mokepones = [];
let ataqueJugador;
let ataqueEnemigo;
let opcionDeMokepones;
let vidasJugador = 3;
let vidasEnemigo = 3;

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
      <input type="radio" name="mascota" id="${mokepon.nombre.toLowerCase()}" />
      <label class="tarjeta-de-mokepon" for="${mokepon.nombre.toLowerCase()}" >
        <p>${mokepon.nombre}</p>
        <img src="${mokepon.foto}" alt="${mokepon.nombre}" />
      </label>
    `;

    contenedorTarjetas.innerHTML += opcionDeMokepones;
  });

	seccionReiniciar.style.display = 'none';

	// Listeners de botones ----------------------------------------------------------
	
	botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador);
	botonFuego.addEventListener('click', ataqueFuego);
	botonAgua.addEventListener('click', ataqueAgua);
	botonTierra.addEventListener('click', ataqueTierra);
	botonReiniciar.addEventListener('click', reiniciarJuego);
}

function reiniciarJuego() {
	ataqueJugador = '';
	ataqueEnemigo = '';
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

function ataqueFuego() {
	ataqueJugador = 'FUEGO';
	ataqueAleatorioeEnemigo();
}

function ataqueAgua() {
	ataqueJugador = 'AGUA';
	ataqueAleatorioeEnemigo();
}

function ataqueTierra() {
	ataqueJugador = 'TIERRA';
	ataqueAleatorioeEnemigo();
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function ataqueAleatorioeEnemigo() {
	let ataqueAleatorio = aleatorio(1, 3);

	if (ataqueAleatorio == 1) {
		ataqueEnemigo = 'FUEGO';
	} else if (ataqueAleatorio == 2) {
		ataqueEnemigo = 'AGUA';
	} else {
		ataqueEnemigo = 'TIERRA';
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
  const inputHipodoge = document.getElementById("hipodoge");
  const inputCapipepo = document.getElementById("capipepo");
  const inputRatigueya = document.getElementById("ratigueya");

  if (inputHipodoge.checked) {
    spanMascotaJugador.innerHTML = "Hipodoge";
  } else if (inputCapipepo.checked) {
    spanMascotaJugador.innerHTML = "Capipepo";
  } else if (inputRatigueya.checked) {
    spanMascotaJugador.innerHTML = "Ratigueya";
  } else {
    alert("Selecciona una mascota");
		return;
  }

	botonMascotaJugador.disabled = true;

  seleccionarMascotaEnemigo();
}

function seleccionarMascotaEnemigo() {
  let ataqueAleatorio = aleatorio(1, 3); // 1-Hipodoge, 2-Capipepo, 3-Ratigueya trae un numero aleatorio entre 1 y 3
  
  if (ataqueAleatorio == 1) {
    spanMascotaEnemigo.innerHTML = 'Hipodoge'
  } else if (ataqueAleatorio == 2) {
    spanMascotaEnemigo.innerHTML = 'Capipepo'
  } else {
    spanMascotaEnemigo.innerHTML = 'Ratigueya'
  }
	
	seccionSleccionarMascota.style.display = 'none';	
	seccionSeleccionarAtaque.style.display = 'flex';

	cambiarEstadoBotones();	
}

function cambiarEstadoBotones(reinicio = false) {
	botonFuego.disabled = reinicio ? true : !botonFuego.disabled;
	botonAgua.disabled = reinicio ? true : !botonAgua.disabled;
	botonTierra.disabled =  reinicio ? true : !botonTierra.disabled;
}

window.addEventListener('load', iniciarJuego)