const add = (a,b) => {
return new Promise((resolve,reject) => {

        setTimeout(() => {
           resolve(a+b);
        },2000)
});
} 


// add(1,2).then((result) => {
//     console.log('success  ',result);

// add(result,5).then((sum) => {
//     console.log('success  ',sum);
// }).catch((err)=> {
//     console.log('sum error  ' , err);
// })

// }).catch((error) => {
//     console.log('add error  ',error);
// });

add(1,3).then((sum) => {
    console.log(sum);
    return add(sum, 5);
}).then((sum2) => {
    console.log(sum2);
}).catch((e) => {
    console.log(e);
})