
/*ecommers*/
let carrito = JSON.parse(localStorage.getItem("carrito")) || []
let productos = [
    { id: "1", nombre: "Buzo Negro", categoria: "prenda superior", precio: 6000, stock: 10, rutaImagen: "buzoNegro.png" },
    { id: "2", nombre: "Pantalon Negro", categoria: "prenda inferior", precio: 5000, stock: 10, rutaImagen: "pantalonN.jpg" },
    { id: "3", nombre: "Zapatillas negras", categoria: "calzado", precio: 11000, stock: 4, rutaImagen: "zapasN.jpg" },
    { id: "4", nombre: "Conjunto Negro", categoria: "conjuntos", precio: 14000, stock: 15, rutaImagen: "conjuntoN.jpg" },
    { id: "5", nombre: "Remera blanca y negra", categoria: "prenda superior", precio: 4500, stock: 10, rutaImagen: "remeraByN.jpg" },
    { id: "6", nombre: "Buzo Blanco", categoria: "prenda superior", precio: 5000, stock: 10, rutaImagen: "buzoB.jpg" },
    { id: "7", nombre: "Pantalon Blanco", categoria: "prenda inferior", precio: 6000, stock: 10, rutaImagen: "pantalonB.jpg" },
    { id: "8", nombre: "Zapatillas blancas", categoria: "calzado", precio: 11000, stock: 4, rutaImagen: "zapasB.jpg" },
    { id: "9", nombre: "Conjunto Blanco", categoria: "conjuntos", precio: 12000, stock: 15, rutaImagen: "conjuntoB.jpg" },
    { id: "10", nombre: "Gorra", categoria: "accesorios", precio: 3000, stock: 15, rutaImagen: "gorra.jpg" },
]
let finalzar = document.getElementById("finalizar")
let input = document.getElementById("miInput")
let boton = document.getElementById("miBoton")
let botonCarrito = document.getElementById("botonCarrito")
//programa principal
boton.addEventListener("click", () => filtrado(productos, input.value))
renderizar(productos)
botonCarrito.addEventListener("click", mostrarCarrito)
finalzar.addEventListener("click", finalizarCompra)

//funciones

function renderizar(arrayProductos) {
    let contenedor = document.getElementById("contenedor")
    contenedor.innerHTML = ""
    arrayProductos.forEach(productos => {
        let tarjetaProducto = document.createElement("div")
        tarjetaProducto.className = "tarjetaProducto"
        tarjetaProducto.innerHTML =
            `<h3>${productos.nombre}</h3>
        <img src="img/${productos.rutaImagen}">
        <p>$${productos.precio}
        <p>Unidades:${productos.stock}</p>
        <button class="botonProductos" id=${productos.id}>Agregar Producto</button>`
        contenedor.appendChild(tarjetaProducto)
        let botonAgregar = document.getElementById(productos.id)
        botonAgregar.addEventListener("click", agregarProducto)
    })
}
function filtrado(arrayProductos, indicadorFiltro) {
    let productFiltrados = arrayProductos.filter(productos => productos.nombre.toLowerCase().includes(indicadorFiltro.toLowerCase()))
    renderizar(productFiltrados)
}
function ordenar(arrayProductos, propiedad,) {
    let productos = arrayProductos.sort((a, b) => {
        if (a[propiedad] < b[propiedad]) {
            return -1
        }
        if (a[propiedad] > b[propiedad]) {
            return 1
        }
        return 0
    })
}
function agregarProducto(e) {
    let productoBuscado = productos.find(productos => productos.id === (e.target.id))
    carrito.push({
        id: productoBuscado.id,
        nombre: productoBuscado.nombre,
        precio: productoBuscado.precio
    })
    renderizarCarrito()
    carrito=[]
}
function renderizarCarrito(params) {
    let carritoVisual = document.getElementById("carrito")
    carrito.forEach(productos => {
        carritoVisual.innerHTML +=
            `<div class = productosCarro><p>${productos.nombre}:</p>
        <p>$${productos.precio}</p><button id="eliminarProductos">eliminar</button></div>
        `


    })
}
function mostrarCarrito() {
    let contenedorPadre = document.getElementById("listaProductos")
    let carritoPadre = document.getElementById("carritoPadre")
    contenedorPadre.classList.toggle("oculto")
    carritoPadre.classList.toggle("oculto")
}
function finalizarCompra() {
    Swal.fire({
        icon: 'success',
        title: 'Bien!',
        text: 'Has finalizado tu compra',
      })
}