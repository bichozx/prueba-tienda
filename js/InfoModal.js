 export const cargarInfoModal = (productos)=>{
    
    let imageProduct = document.getElementById("imageProduct")
    imageProduct.src = productos.image

    let nameProduct = document.getElementById("nameProduct")
    nameProduct.textContent = productos.name

    let stockProduct = document.getElementById("stockProduct")
    stockProduct.textContent = productos.stock

    let unit_price = document.getElementById("unit_price")
    unit_price.textContent = productos.unit_price
 }