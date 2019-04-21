// const greeter = (name='goud') => {
//     console.log('hello '+name);
// }
// greeter('srii');
// greeter()

// const fetch = require('node-fetch');
// fetch('http://puzzle.mead.io/puzzle').then((response) => {
//     response.json().then((data) => {
//         console.log(data);
//     })
// })



const fetch = require('node-fetch');

fetch('http://puzzle.mead.io/puzzle').then((response) => {
    response.json().then((data) => {
        console.log(data);
    })
})
