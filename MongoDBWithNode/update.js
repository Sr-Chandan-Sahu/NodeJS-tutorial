const dbConnection= require('./mongodb')

const updateData= async()=>{
    const data= await dbConnection()
    const result = await data.updateOne({name:'tailwind'},{$set:{name:'material'}})
    if (result.acknowledged) console.log("Data updated successfully")
}

updateData();