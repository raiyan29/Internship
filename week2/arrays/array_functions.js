
//array filtering
const numbers = [1, 2, 8, 9];
const output1 = numbers.filter(item => item <=8);
console.log(output1)

//arrray mapping
const arr2= [1, 2, 8, 9];
const output2 = arr2.map(item => item**2);
console.log(output2)


//array reducing 
let shoppingCart = [{
    product: 'phone',
    qty: 6,
    price: 699
},
{
    product: 'Screen Protector',
    qty: 9,
    price: 9.98
},
{
    product: 'Memory Card',
    qty: 76,
    price: 20.99
}
];
let total = shoppingCart.reduce(function (acc, curr) {
    return acc + curr.qty * curr.price;
},0);

console.log(total);








