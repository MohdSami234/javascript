// const cluster = require('node:cluster');
// const os = require('os');
// const express = require('express')

// const totalCPUs = os.cpus().length;
 
 
// if(cluster.isMaster){
//     for(let i=0;i<totalCPUs;i++){
//         cluster.fork()
//     }
// }else{
//     const app =express()
//     const PORT = 8000;
//     app.get('/',(req,res)=>{
//         return res.json({msg:`hello${process.pid}`})
//       })
      
      
//       app.listen(PORT,()=>{
//         console.log("start"+PORT)
//       })
// }

// path module
const path = require('path')

console.log(path.dirname('C:/stockydodo_new/serverless/handler.js'))
console.log(path.extname('C:/stockydodo_new/serverless/handler.js'))
console.log(path.basename('C:/stockydodo_new/serverless/handler.js'))
console.log(path.parse('C:/stockydodo_new/serverless/handler.js'))



