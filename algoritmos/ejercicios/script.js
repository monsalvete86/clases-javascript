async function consultarTasaDolar(base = 'USD', simbolo = 'COP') {
    const url = 'https://api.exchangerate-api.com/v4/latest/' + base;

    const resultado = await fetch(url, { method: 'GET' })
        .then(response => { 
            if (!response.ok) throw new Error(`HTTP ${response.status}`);

            const resJson = response.json();
            return resJson;
        })
        .catch(error => {
            console.error('Error consultando tasa:', error);
            throw error;
        });
        // console.log('Consultando tasa de cambio resultado...', resultado.rates.COP);
    return resultado?.rates[simbolo] || null;
}

(async () => {
    const tasaDolar = await consultarTasaDolar();
    console.log('Consultando tasa de cambio...', tasaDolar);
})();

const fechaNacimiento = document.getElementById('fechaNacimiento');
const botonCalcular = document.getElementById('calcular');
const spanResultado = document.getElementById('resultado');
const spanMayor = document.getElementById('mayor');


botonCalcular.addEventListener('click', () => {
    if (fechaNacimiento.value === '') {
        alert('Por favor ingrese una fecha de nacimiento!');
        return;
    }

    const hoy = new Date();
    const nacimiento = new Date(fechaNacimiento.value);
    let edad = hoy.getFullYear() - nacimiento.getFullYear();
    const mes = hoy.getMonth() - nacimiento.getMonth();

    if (mes < 0 || (mes === 0 && hoy.getDate() < nacimiento.getDate())) {
        edad--;
    }
    
    spanResultado.innerHTML = edad;
    if (edad < 18) {
        spanMayor.innerHTML = 'No eres mayor de edad';
    } else {
        spanMayor.innerHTML = 'Eres mayor de edad';
    }
});
