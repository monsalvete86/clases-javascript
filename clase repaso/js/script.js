let ataqueJugador;
let ataqueEnemigo;
let vidasJugador = 3;
let vidasEnemigo = 3;

function iniciarJuego() {
	let seccionSeleccionarAtaque = document.getElementById('seleccionar-ataque');
	seccionSeleccionarAtaque.style.display = 'none';

	let seccionReiniciar = document.getElementById('reiniciar');
	seccionReiniciar.style.display = 'none';

	let botonMascotaJugador = document.getElementById('boton-mascota');
	botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador);

	let botonFuego = document.getElementById('boton-fuego');
	botonFuego.addEventListener('click', ataqueFuego);

	let botonAgua = document.getElementById('boton-agua');
	botonAgua.addEventListener('click', ataqueAgua);

	let botonTierra = document.getElementById('boton-tierra');
	botonTierra.addEventListener('click', ataqueTierra);

	let botonReiniciar = document.getElementById('boton-reiniciar');

	botonReiniciar.addEventListener('click', reiniciarJuego);
}

function reiniciarJuego() {
	ataqueJugador = '';
	ataqueEnemigo = '';
	vidasJugador = 3;
	vidasEnemigo = 3;

	const sectionMensajes = document.getElementById('mensajes');
	sectionMensajes.innerHTML = '';

	const vidasEnemigoSpan = document.getElementById('vidas-enemigo');
	const vidasJugadorSpan = document.getElementById('vidas-jugador');

	vidasEnemigoSpan.innerHTML = vidasEnemigo;
	vidasJugadorSpan.innerHTML = vidasJugador;

	let botonMascotaJugador = document.getElementById('boton-mascota');
	botonMascotaJugador.disabled = false;

	let seccionReiniciar = document.getElementById('reiniciar');
	seccionReiniciar.style.display = 'none';

	let seccionSeleccionarAtaque = document.getElementById('seleccionar-ataque');
	seccionSeleccionarAtaque.style.display = 'none';

	let seccionSleccionarMascota = document.getElementById('seleccionar-mascota');
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
	// lógica de combate
	const vidasEnemigoSpan = document.getElementById('vidas-enemigo');
	const vidasJugadorSpan = document.getElementById('vidas-jugador');

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
	let parrafo = document.createElement('p');
	parrafo.innerHTML = 'Tu mascota atacó con ' + ataqueJugador + ', la mascota del enemigo atacó con ' + ataqueEnemigo + ' - ' + resultado;

	let sectionMensajes = document.getElementById('mensajes');
	sectionMensajes.appendChild(parrafo);

	if (vidasEnemigo == 0) {
		alert('¡FELICIDADES! ¡GANASTE EL JUEGO!');
		cambiarEstadoBotones();
	} else if (vidasJugador == 0) {
		alert('Lo siento, perdiste el juego :(');
		cambiarEstadoBotones();
	}
}

function seleccionarMascotaJugador() {
  let inputHipodoge = document.getElementById("hipodoge");
  let inputCapipepo = document.getElementById("capipepo");
  let inputRatigueya = document.getElementById("ratigueya");
  let spanMascotaJugador = document.getElementById("mascota-jugador");

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

	let botonMascotaJugador = document.getElementById('boton-mascota');
	botonMascotaJugador.disabled = true;

  seleccionarMascotaEnemigo();
}

function seleccionarMascotaEnemigo() {
  let ataqueAleatorio = aleatorio(1, 3); // 1-Hipodoge, 2-Capipepo, 3-Ratigueya trae un numero aleatorio entre 1 y 3
let spanMascotaEnemigo = document.getElementById("mascota-enemigo"); //

  if (ataqueAleatorio == 1) {
    spanMascotaEnemigo.innerHTML = 'Hipodoge'
  } else if (ataqueAleatorio == 2) {
    spanMascotaEnemigo.innerHTML = 'Capipepo'
  } else {
    spanMascotaEnemigo.innerHTML = 'Ratigueya'
  }

	let seccionSleccionarMascota = document.getElementById('seleccionar-mascota');
	seccionSleccionarMascota.style.display = 'none';

	let seccionSeleccionarAtaque = document.getElementById('seleccionar-ataque');
	seccionSeleccionarAtaque.style.display = 'flex';

	let seccionReiniciar = document.getElementById('reiniciar');
	seccionReiniciar.style.display = 'block';

	cambiarEstadoBotones();	
}

function cambiarEstadoBotones(reinicio = false) {
	

	const botonFuego = document.getElementById('boton-fuego');
	const botonAgua = document.getElementById('boton-agua');
	const botonTierra = document.getElementById('boton-tierra');

	botonFuego.disabled = reinicio ? true : !botonFuego.disabled;
	botonAgua.disabled = reinicio ? true : !botonAgua.disabled;
	botonTierra.disabled =  reinicio ? true : !botonTierra.disabled;
}

window.addEventListener('load', iniciarJuego)