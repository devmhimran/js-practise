


const product = [
    {name: 'laptop', price: 15000, color: 'black', stock: 5},
    {name: 'phone', price: 1000, color: 'white', stock: 7},
    {name: 'watch', price: 500, color: 'blue', stock: 4},
    {name: 'cup', price: 10, color: 'green', stock: 10},
    {name: 'stand', price: 5, color: 'red', stock: 100},
    {name: 'usb', price: 20, color: 'white', stock: 30},

];

// let productPrice = 0;
// const productAllPrice = (product) => {
//     const productPrice = productPrice + product;
// }


// const sku = product.map( products => products.name );
const sku = product.map( products => products.price);

// let productPrices = 0;
// for( const price of sku){
//     productPrices = productPrices + price;
// }
// console.log(productPrices);

const filterProduct = product.filter(products => products.price < 5000 && products.price > 100);
const findProduct = product.find(products => products.color == 'white');
console.log(findProduct);