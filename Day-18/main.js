const displayProduct = productName =>{
    
    const productList = document.getElementById('product-list');
    const createLi = document.createElement('li');
    createLi.innerText = productName;
    productList.appendChild(createLi);
}

document.getElementById('addProduct').addEventListener('click', function(){
    const inputProduct = document.getElementById('inputProduct');
    const inputProductValue = inputProduct.value;
    displayProduct(inputProductValue);
    addtoCard(inputProductValue);
    inputProduct.value = '';
    
    // console.log(displayProduct(inputProductValue));
});


const getItem = () =>{
    const cart = localStorage.getItem('cart');
    let cartObj;
    if(cartObj){
        cartObj = JSON.parse(cart);
    }else{
        cartObj = {};
    }
    return cartObj;
}

const addtoCard = productName =>{
    const cart = getItem();
    cart[productName] = 1;
    const cartStringy = JSON.stringify(cart);
    const addCart = localStorage.setItem('cart', cartStringy);
    console(addCart);
}
