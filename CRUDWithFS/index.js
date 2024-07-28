const fs = require('fs');
const path = require('path');

const dirPath=path.join(__dirname, 'crud');
const filePath=`${dirPath}/Chandan.txt`

// Create file
// fs.writeFileSync(filePath,"I am a Coder")

//Read file
// fs.readFile(filePath,'utf8',(err,item)=>{
//     if(!err) console.log(item);
// })

//Update file
// fs.appendFile(filePath," Love from India",(err)=>{
//     if(!err) console.log("File is updated successfully");
// })

//Rename file
// fs.rename(filePath,`${dirPath}/ChandanS.txt`,(err)=>{
//     if(!err) console.log("File is renamed successfully");
// })


//Delete file
// fs.unlinkSync(`${dirPath}/ChandanS.txt`);