// EM CONSTRUÇÃO //


const chaveLocal = 'productsIntoCar'
req.session.cart = idsIntoCart

sessionStorage.setItem('chaveLocal', idsIntoCart)

//let productToRemove = document.getElementById('product')
console.log("removendo produto")
console.log(req.session.cart)

const removeProduct = (id) =>{
    let productIndex = idsIntoCart.findIndex(p => p.id == id)

    idsIntoCart.splice(productIndex, 1)

    sessionStorage.setItem('chaveLocal', JSON.stringify(idsIntoCart))

    let productToRemove = document.getElementById('p.idProdutos')
    productToRemove.remove()
}


