
document.getElementById('addProduct').addEventListener('click', function(){
    const input = document.getElementById('inputProduct');
    const inputvalue = input.value;
    displayProduct(inputvalue);
    addProduct(inputvalue);
    
    input.value = '';
    
});

const displayProduct = productName => {
    const ul = document.getElementById('list');
    const li = document.createElement('li');
    li.innerText = productName;
    ul.appendChild(li);
}

const getProduct = () =>{
    const cart = localStorage.getItem('cart');
    let cartObj;
    if(cart){
        cartObj = JSON.parse(cart);
    }else{
        cartObj = {};
    }
    return cartObj;
}

const addProduct =  productName =>{
    const cart = getProduct();
    cart[productName] = 1;
    const cartStringify = JSON.stringify(productName);
    const addCart = localStorage.setItem('cart', productName);
    // return addCart;
    console.log(cartStringify);
}