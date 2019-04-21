
const add = (x,y,callback) =>{
    const sum = x+y;
callback(sum);
}

add(6,7,(sum) =>{
    console.log(sum);
})

// const names =  ['srikanth', 'sri','goud'];

// const shortNames = names.filter((name) =>{
//     return name.length<=4;
// })

// const geocode = (address,callback) => {
//     setTimeout(() => {
//         const data = {
//             latitude:0,
//             longitude:0
//         }
//         callback(data);
//     }, 2000);
// }

// const data = geocode('philadelphia',(data) => {
//     console.log(data);
// });

