const dbConnection = require('./mongodb')

const deleteData= async()=>{
    const data = await dbConnection();
    const result = await data.deleteOne({name:'material'});
    console.log(result);
    if(result.acknowledged) console.log("Data deleted successfully")
}

deleteData();