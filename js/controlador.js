import { mercarProducto } from './mercarProducto.js'
import { cargarInfoModal } from './infoModal.js'


let carrito = [] 
let producto = {}

// Referencias a etiquetas del HTML
let filaproductos = document.getElementById("fila")
let modalInfoProducto = new bootstrap.Modal(document.getElementById('infoProducto'))
let modalcompra = new bootstrap.Modal(document.getElementById('resumencompra'))
let botonAgrgarCarrito = document.getElementById("botonadd")


// Escucho cuando hagan clic en la fila de los productos
filaproductos.addEventListener("click", (event) => {
    event.preventDefault();
    if (event.target.classList.contains("btn")) {
        event.preventDefault();
        producto = mercarProducto(event)
        if (producto.stock !== "In Existetnce:  0") {
            cargarInfoModal(producto)
            modalInfoProducto.show()
        } else {
            alert('NO EXISTENCE')
        }
    }
})

// Escucho para añadir un producto al carrito de compras
botonAgrgarCarrito.addEventListener("click", (event) => {

    if (event.target.classList.contains("btn-warning")) {
        event.preventDefault(event);

        //Debo capturar la cantidad y agregarla al producto
        let cantidad = document.getElementById("cantidadProducto").value
        producto.cantidad = cantidad

       

        if (carrito.some(datosProducto => datosProducto.name === producto.name)) {
            const newProduc = carrito.map(datosProducto => {
                if (datosProducto.name === producto.name) {
                    datosProducto.cantidad++;
                    return datosProducto;
                } else {
                    return datosProducto;
                }
            })
            newProduc.cantidad = cantidad
            carrito = [...newProduc];
            //Pintar la capsula en el carrito
            let suma = 1
            carrito.forEach((newProduc)=>{
                suma = suma + Number(newProduc.cantidad)
            })

            let capsula = document.getElementById("capsula")
            capsula.textContent = suma
            capsula.classList.remove("invisible")

        } else {
            carrito = [...carrito, producto];

            //Pintar la capsula en el carrito
            let suma = 0
            carrito.forEach((producto)=>{
                suma = suma + Number(producto.cantidad)
            })

            let capsula = document.getElementById("capsula")
            capsula.textContent = suma
            capsula.classList.remove("invisible")
        }
        
        modalInfoProducto.hide()
        
    }

})

//rutina para ver el carrito
let botonVerCarrito = document.getElementById("vercarrito")
botonVerCarrito.addEventListener("click", ()=>{

    //recorrer el carrito y pintar los productos
    let base = document.getElementById("basecarro")

    base.innerHTML = ""


    carrito.forEach((newProduc)=>{


        let fila = document.createElement("div")
        fila.classList.add("row")

        let columna1 = document.createElement("div")
        columna1.classList.add("col-4")

        let columna2 = document.createElement("div")
        columna2.classList.add("col-8")

        let image = document.createElement("img")
        image.classList.add("w-100", "img-fluid")
        image.src = newProduc.image

        let nameProduct = document.createElement("h5")
        nameProduct.classList.add("card-title")
        nameProduct.classList.add("text-muted")
        nameProduct.textContent = newProduc.name

        let unit_price = document.createElement("p")
        unit_price.classList.add("card-text")
        unit_price.textContent = newProduc.unit_price

        let unit = document.createElement("p")
        unit.classList.add("card-text")
        unit.textContent = 'Quantity: ' + newProduc.cantidad



        //PADRES E HIJOS
        columna1.appendChild(image)
        columna2.appendChild(nameProduct)
        columna2.appendChild(unit_price)
        columna2.appendChild(unit)
        fila.appendChild(columna1)
        fila.appendChild(columna2)
        base.appendChild(fila)

    })



    modalcompra.show()



})
