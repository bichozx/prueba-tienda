
fetch('info.json')
    .then((response) => {
        return (response.json())
    })
    .then((response) => {
        paintData(response)
    })
    .catch((error) => {
        console.log(error)
    })


const paintData = (data) => {
    let fila = document.getElementById("fila")
    data.forEach(productos => {
       
       
        let columna = document.createElement("div")
        columna.classList.add("col")
    
        let tarjeta = document.createElement("div")
        tarjeta.classList.add("card")
        tarjeta.classList.add("p-2")
        tarjeta.classList.add("shadow")
    
        let imageProduct = document.createElement("img")
        imageProduct.classList.add("card-img-top")
        imageProduct.src = productos.image
    
        let divisor = document.createElement("hr")
    
        let cuerpoTarjeta = document.createElement("div")
        cuerpoTarjeta.classList.add("card-body")
    
        let nameProduct = document.createElement("h5")
        nameProduct.classList.add("card-title")
        nameProduct.classList.add("text-muted")
        nameProduct.textContent = productos.name

        let stockProduct = document.createElement("h2")
        stockProduct.classList.add("card-text")
        stockProduct.classList.add("text-muted")
        stockProduct.textContent ="In Existetnce: "+" " +productos.stock
    
        let unit_price = document.createElement("p")
        unit_price.classList.add("card-text")
        unit_price.textContent = "$" + productos.unit_price
    
        let buttonInfoProduct = document.createElement("button")
        buttonInfoProduct.setAttribute("type", "button")
        buttonInfoProduct.classList.add("btn")
        buttonInfoProduct.classList.add("btn-warning")
        buttonInfoProduct.classList.add("w-100")
        buttonInfoProduct.classList.add("shadow")
        buttonInfoProduct.textContent = "View Bag"
    
    
    
    
        //PADRES E HIJOS
        cuerpoTarjeta.appendChild(nameProduct)
        cuerpoTarjeta.appendChild(stockProduct)
        cuerpoTarjeta.appendChild(unit_price)
        cuerpoTarjeta.appendChild(buttonInfoProduct)
    
    
        tarjeta.appendChild(imageProduct)
        tarjeta.appendChild(divisor)
        tarjeta.appendChild(cuerpoTarjeta)
    
        columna.appendChild(tarjeta)
    
        fila.appendChild(columna)
    

    });
}

