
const {MongoClient,ObjectID} =require('mongodb');

const connectionUrl = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

const id = new ObjectID()
console.log(id.id);

MongoClient.connect(connectionUrl,{ useNewUrlParser:true }, (error,client) => {
if(error){
    console.log('cannot connect to database....')
}


console.log('connected successfully....')

const db = client.db(databaseName);

////////////////////////////////////////////////////////////////////////////
// db.collection('users').insertOne({
//     name:'srikanth goud',
//     age:31
// },(err,result) => {
//     if(err){
//         return console.log(err);
//     }
//     console.log(result.ops);
// })

//////////////////////////////////////////////////////////

// db.collection('tasks').insertMany([
//         {
//     description:'coding time',
//     completed:true
// },{
//     description:'raining home',
//     completed:false
// }

// ],(err,result) => {
//       if(err){
//            return console.log(err);
//        }
//        console.log(result.ops);
// })

/////////////////////////////////////////////////////////////////////////





})


