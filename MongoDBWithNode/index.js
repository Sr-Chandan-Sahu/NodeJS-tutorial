// const {MongoClient} = require('mongodb')
// const url= 'mongodb://localhost:27017'
// const client= new MongoClient(url)

// async function dbConnection(){
//     let result = await client.connect();
//     let db= result.db('youtube')
//     return db.collection('learn')
//     // let response = await collection.find().toArray();
//     // console.log(response)
// }

const dbConnection= require('./mongodb')

const main= async () =>{
    let result = await dbConnection()
    result = await result.find().toArray()
    console.log(result)
}

main()