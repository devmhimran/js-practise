
document.getElementById('addProduct').addEventListener('click', function(){
    const input = document.getElementById('inputProduct');
    const inputValue = input.value;
    input.value = '';
    if(!inputValue){
        return;
    }
    else{
        displayProducts(inputValue);
        addCart(inputValue);
    }
    
    // console.log(inputValue)
});

const displayProducts = productName =>{
    const ul = document.getElementById('list');
    const li = document.createElement('li');
    li.innerText = productName;
    ul.appendChild(li);
}

const getProduct = () =>{

    const cart = localStorage.getItem('cart');
    let cartObject;
    if(cart){
        cartObject = JSON.parse(cart);
    }else{
        cartObject = {};
    }
    return cartObject;
}

const addCart = productName =>{
    const cart = getProduct();
    if(cart[productName]){
        cart[productName] = cart[productName]+1;
    }else{
        cart[productName] = 1;
    }
    const cartStringify = JSON.stringify(cart);
    const addCart = localStorage.setItem('cart', cartStringify);
    console.log(cartStringify);
}
const displayStoredProduct = ()=> {
    const cartProducts = getProduct();
    for( const cartproduct in cartProducts ){
        displayProducts(cartproduct);
    }
}
displayStoredProduct();
document.getElementById('checkOut').addEventListener('click', function(){
    document.getElementById('list').textContent = '';
    localStorage.removeItem('cart');
});