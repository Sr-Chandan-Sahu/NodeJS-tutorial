const fs= require('fs');
const path= require('path');

const dirPath= path.join(__dirname,'files');

for (let i=0 ; i<5; i++) {
    fs.writeFileSync(`${dirPath}/hello ${i}.txt`,"I love you")
}

fs.readdir(dirPath,(err,files)=>{   
    files.forEach(file=>{
        console.log(file);
    })
})