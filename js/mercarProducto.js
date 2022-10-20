export const mercarProducto = (event) => {

    let producto = {}

    if (event.target.classList.contains("btn-warning")) {
        event.preventDefault();
        let datosProducto = event.target.parentElement.parentElement
        
        producto = {
            image: datosProducto.querySelector("img").src,
            name: datosProducto.querySelector("h5").textContent,
            stock: datosProducto.querySelector("h2").textContent,
            unit_price: datosProducto.querySelector("p").textContent,
            cantidad: 0

        }


    }

    return producto;


}