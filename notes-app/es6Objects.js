const name = 'srikanth';
const userAge = 31;

const user = {
    name,
    age:userAge,
    loc:'hyderabad'
}

console.log(user);

const product = {
    label:'red notebook',
    price:3,
    stock:201,
    salePrice:undefined
}

const {label,stock} =product

console.log(label);
console.log(stock);