const dbConnection = require('./mongodb')

const insertData=async()=>{
    const db=await dbConnection()
    const result = await db.insertOne({name:'tailwind',channel:"freecodecamp"})
    if(result.acknowledged) console.log("Data inserted successfully")
}

insertData();