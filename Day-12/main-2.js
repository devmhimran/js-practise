

const products = [
    'dell laptop',
    'Lenovo Laptop',
    'low price phone',
    'High price laptop',
    'Acer Laptop',
    'High price phone',
    'Asus laptop',
    'Lg laptop'
];

const searching = 'dell';
const output = [];
// for( const product of products ){
//     if( product.toLowerCase().indexOf(searching) != -1 )
//     output.push(product);
// }


for( const product of products ){
    if(product.toLowerCase().startsWith(searching.toLowerCase())){
        output.push(product);
    }
}
console.log(output);