const workpromis = new Promise((resolve,reject) => {
setTimeout(() => {
   // resolve([1,2,3,4]);
   reject('something went wrong...')
},2000)
});

workpromis.then((result) => {
    console.log('success  ',result);
}).catch((error) => {
    console.log('error  ',error);
});
