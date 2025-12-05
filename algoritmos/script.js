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

const inputCantidad = document.getElementById('cantidad');
const botonConvertir = document.getElementById('convertir');
const spanResultado = document.getElementById('resultado');

const inputCantidadDolares = document.getElementById('cantidadDolares');
const botonConvertirDolares = document.getElementById('convertirDolares');
const spanResultadoDolares = document.getElementById('resultadoDolares');

botonConvertir.addEventListener('click', async () => {
    if (inputCantidad.value === '') {
        alert('Por favor ingrese una cantidad en pesos colombianos.');
        return;
    }
    const tasaDolar = await consultarTasaDolar();
    const cantidadPesos = parseFloat(inputCantidad.value);
    const cantidadDolares = cantidadPesos / tasaDolar;

    spanResultado.innerHTML = cantidadDolares.toFixed(2);
});

botonConvertirDolares.addEventListener('click', async () => {
    if (inputCantidadDolares.value === '') {
        alert('Por favor ingrese una cantidad en Dolares.');
        return;
    }
    const tasaPesos = await consultarTasaDolar('COP', 'USD');
    
    const cantidadDolares = parseFloat(inputCantidadDolares.value);
    const cantidadPesos = cantidadDolares / tasaPesos;

    spanResultadoDolares.innerHTML = cantidadPesos.toFixed(2);
});