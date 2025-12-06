const productoSearch = document.getElementById('producto-buscar');
const listaProductos = document.getElementById('listaProductos');
const pProductoSelect = document.getElementById('pProductoSelect');
const btnAgregarProducto = document.getElementById('btn-agregar-producto');
const productoCantidad = document.getElementById('producto-cantidad');
const cuerpoTablaFactura = document.getElementById('cuerpo-tabla-factura');

let productoSeleccionado = null;
let productosFactura = [];

productoSearch.addEventListener('input', (event) => {
    // console.log('Producto seleccionado:', event.target.value);
    //guardo el valor en la caja de texto
    const valorBusqueda = event.target.value.toLowerCase(); 
    listaProductos.innerHTML = ''; //limpio la lista antes de buscar
    pProductoSelect.innerHTML = ''; //limpio el producto seleccionado
    productoSeleccionado = null;

    if (String(valorBusqueda).length >= 3) { //busco solo si hay 3 o mas caracteres
        const productosFiltrados = productosRestaurante.filter(producto =>
            producto.nombre.toLowerCase().includes(valorBusqueda) ||
            producto.descripcion.toLowerCase().includes(valorBusqueda) ||
            producto.codigo.toLowerCase().includes(valorBusqueda)
        );

        for(let i=0; i < productosFiltrados.length; i++) {
            // console.log(`Producto ${i + 1}:`, productosFiltrados[i]);

            const li = document.createElement('li');

            li.addEventListener('click', (event) => {
                productoSeleccionado = productosFiltrados[i];
                pProductoSelect.innerHTML = `Producto seleccionado: ${productoSeleccionado.nombre} - Precio: $${productoSeleccionado.precio}`;
                listaProductos.innerHTML = '';
                productoCantidad.value = 1;
            });

            li.classList.add('producto-item');
            li.innerHTML = 
                `${productosFiltrados[i].codigo} - ${productosFiltrados[i].nombre}: - Precio: $${productosFiltrados[i].precio}`;
            listaProductos.appendChild(li);
        }

        // console.log('Buscando productosFiltrados:', productosFiltrados);
    }
});

btnAgregarProducto.addEventListener('click', () => {

    
    if (productoSeleccionado && productoCantidad.value > 0) {

        const newSelectedProduct = {
            ...productoSeleccionado,
            cantidad: parseInt(productoCantidad.value)
        }
        productosFactura.push(newSelectedProduct);
        

        const filaTabla = document.createElement('tr');
        filaTabla.innerHTML = `
            <td>${newSelectedProduct.codigo} - ${newSelectedProduct.nombre}</td>
            <td>${newSelectedProduct.cantidad}</td>
            <td>$${newSelectedProduct.precio}</td>
            <td>$${parseFloat(newSelectedProduct.precio) * newSelectedProduct.cantidad}</td>           
        `;

        cuerpoTablaFactura.appendChild(filaTabla)

        productoSeleccionado = null;
        productoCantidad.value = 1;
    } else {
        alert('Por favor seleccione un producto antes de agregar y la cantidad debe ser mayor a 0.');
    }

    console.log('Productos en la factura:', productosFactura);
})

const productosRestaurante = [
  // --- CERVEZAS Y BEBIDAS ---
  {
    id: 1,
    codigo: "BEB-001",
    nombre: "Cerveza Artesanal Rubia",
    descripcion: "Cerveza de la casa tipo Golden Ale, refrescante y suave.",
    precio: 12000
  },
  {
    id: 2,
    codigo: "BEB-002",
    nombre: "Cerveza Importada",
    descripcion: "Botella de 330ml, lager premium internacional.",
    precio: 15000
  },
  {
    id: 3,
    codigo: "BEB-003",
    nombre: "Limonada de Coco",
    descripcion: "Bebida cremosa a base de leche de coco y limón fresco.",
    precio: 10000
  },
  {
    id: 4,
    codigo: "BEB-004",
    nombre: "Gaseosa 400ml",
    descripcion: "Bebida carbonatada sabor a elección con hielo.",
    precio: 5000
  },
  {
    id: 5,
    codigo: "BEB-005",
    nombre: "Agua Manantial",
    descripcion: "Botella de agua sin gas 500ml.",
    precio: 4000
  },
  {
    id: 6,
    codigo: "BEB-006",
    nombre: "Jugo Natural",
    descripcion: "Jugo de fruta de temporada (Mango, Mora, Maracuyá) en agua.",
    precio: 7000
  },

  // --- CÓCTELES ---
  {
    id: 7,
    codigo: "COC-001",
    nombre: "Mojito Cubano",
    descripcion: "Ron blanco, hierbabuena, limón, azúcar y soda.",
    precio: 22000
  },
  {
    id: 8,
    codigo: "COC-002",
    nombre: "Margarita Clásica",
    descripcion: "Tequila, triple sec y jugo de limón, borde de sal.",
    precio: 24000
  },
  {
    id: 9,
    codigo: "COC-003",
    nombre: "Gin Tonic",
    descripcion: "Ginebra premium, agua tónica y rodaja de pepino.",
    precio: 26000
  },
  {
    id: 10,
    codigo: "COC-004",
    nombre: "Piña Colada",
    descripcion: "Ron, crema de coco y jugo de piña, servido frappé.",
    precio: 23000
  },
  {
    id: 11,
    codigo: "COC-005",
    nombre: "Old Fashioned",
    descripcion: "Whisky bourbon, amargo de angostura y cáscara de naranja.",
    precio: 28000
  },
  {
    id: 12,
    codigo: "COC-006",
    nombre: "Sangría Tinta (Jarra)",
    descripcion: "Vino tinto, frutas picadas, brandy y un toque de soda.",
    precio: 65000
  },

  // --- ENTRADAS ---
  {
    id: 13,
    codigo: "ENT-001",
    nombre: "Nachos de la Casa",
    descripcion: "Totopos con queso fundido, guacamole, pico de gallo y jalapeños.",
    precio: 25000
  },
  {
    id: 14,
    codigo: "ENT-002",
    nombre: "Alitas BBQ (6 unidades)",
    descripcion: "Alitas de pollo bañadas en salsa BBQ ahumada.",
    precio: 18000
  },
  {
    id: 15,
    codigo: "ENT-003",
    nombre: "Aros de Cebolla",
    descripcion: "Aros de cebolla empanizados y fritos, acompañados de salsa ranch.",
    precio: 14000
  },
  {
    id: 16,
    codigo: "ENT-004",
    nombre: "Patacones con Hogao",
    descripcion: "Tres patacones grandes con salsa criolla colombiana.",
    precio: 12000
  },
  {
    id: 17,
    codigo: "ENT-005",
    nombre: "Deditos de Queso",
    descripcion: "Palitos de queso mozzarella apanados con salsa de frutos rojos.",
    precio: 16000
  },
  {
    id: 18,
    codigo: "ENT-006",
    nombre: "Ceviche de Chicharrón",
    descripcion: "Trozos de chicharrón crocante con cebolla, limón y cilantro.",
    precio: 22000
  },

  // --- PLATOS FUERTES ---
  {
    id: 19,
    codigo: "PLA-001",
    nombre: "Hamburguesa Artesanal",
    descripcion: "Carne 150g, queso cheddar, tocineta, lechuga y tomate.",
    precio: 28000
  },
  {
    id: 20,
    codigo: "PLA-002",
    nombre: "Costillas St. Louis",
    descripcion: "Costillas de cerdo ahumadas en salsa BBQ con papas fritas.",
    precio: 35000
  },
  {
    id: 21,
    codigo: "PLA-003",
    nombre: "Pizza Pepperoni",
    descripcion: "Pizza personal de masa delgada, salsa napolitana y pepperoni.",
    precio: 24000
  },
  {
    id: 22,
    codigo: "PLA-004",
    nombre: "Tacos al Pastor",
    descripcion: "Tres tortillas de maíz con cerdo marinado, piña y cilantro.",
    precio: 20000
  },
  {
    id: 23,
    codigo: "PLA-005",
    nombre: "Picada para Dos",
    descripcion: "Mix de carnes, morcilla, chorizo, papa criolla y arepa.",
    precio: 55000
  },
  {
    id: 24,
    codigo: "PLA-006",
    nombre: "Burrito Mexicano",
    descripcion: "Tortilla de harina rellena de carne, frijol, arroz y queso.",
    precio: 22000
  },
  {
    id: 25,
    codigo: "PLA-007",
    nombre: "Pechuga Gratinada",
    descripcion: "Filete de pollo con champiñones y queso fundido.",
    precio: 29000
  },
  {
    id: 26,
    codigo: "PLA-008",
    nombre: "Lomo Saltado",
    descripcion: "Trozos de lomo fino salteados con vegetales y papas a la francesa.",
    precio: 32000
  },

  // --- POSTRES ---
  {
    id: 27,
    codigo: "POS-001",
    nombre: "Brownie con Helado",
    descripcion: "Brownie de chocolate caliente con bola de helado de vainilla.",
    precio: 12000
  },
  {
    id: 28,
    codigo: "POS-002",
    nombre: "Cheesecake de Maracuyá",
    descripcion: "Pastel de queso suave con salsa de maracuyá.",
    precio: 14000
  },
  {
    id: 29,
    codigo: "POS-003",
    nombre: "Volcán de Chocolate",
    descripcion: "Bizcocho de chocolate con centro líquido.",
    precio: 15000
  },
  {
    id: 30,
    codigo: "POS-004",
    nombre: "Flan de Caramelo",
    descripcion: "Postre tradicional cremoso con salsa de caramelo.",
    precio: 10000
  }
];