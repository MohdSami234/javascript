// const http = require('http');


// const server = http.createServer = ((req,res)=>{
//   res.send("sami")
// })


// server.listen(2000,()=>{
//   console.log("server is listening")
// })



// // childprocess multithreading//
// const cp = require('child_process');

// cp.exec('start chrome https://meet.google.com/')

// to integrate node js with other language


// // workers multithreading in node js

// const { Worker, isMainThread, parentPort } = require('worker_threads');

// if (isMainThread) {
//   // This code runs in the main thread.
//   const worker = new Worker(__filename);
//   const data = [1, 2, 3, 4, 5];

//   worker.postMessage(data);

//   worker.on('message', (result) => {
//     console.log('Received result from the worker:', result);
//   });
// } else {
//   // This code runs in the worker thread.
//   parentPort.on('message', (data) => {
//     const result = performCalculation(data);
//     parentPort.postMessage(result);
//   });
// }

// function performCalculation(data) {
//   // Simulate a CPU-bound task.
//   let sum = 0;
//   for (let i = 0; i < data.length; i++) {
//     sum += data[i];
//   }
//   return sum;
// }


// setimeout // setimmediate // process.nextTick



// function add(a,b){
//   console.log(a+b)
// }

// setImmediate(()=>{
//   add(2,3)// callbackregisted//
// })

// setTimeout(()=>{  // high priverty
//   add(4,7)
// })

// process.nextTick(()=>{// first after starting event loop
//   add(5,1)
// })

// console.log("program ended")


// event emmiter

// var events = require('events');

// var eventEmitter = new events.EventEmitter();

// // create an event handler as follows//

// var connectHandler = function connected(){
//   console.log("connected");

//   eventEmitter.emit('data_received');
// }

// // Bind the connection event with handler


// eventEmitter.on('connection',connectHandler);


// bind the data_received event with the anonymous function

// eventEmitter.on('data_received',function(){
//   // some operation  performed

//   console.log('data received successfully')
// })

// eventEmitter.on('data_received',(a)=>{
//   console.log('new listener attached');
// })

// // fire the connection event

// eventEmitter.emit('data_received')


const { error } = require('console');
const fs =require('fs');
const { resourceUsage } = require('process');

// // sync/// Blocking
// fs.writeFileSync('./test.txt','hello World');


// // Async  --- Non -blocking

// fs.writeFile('./test/txt',"hello world Async",(err)=>{})


//blocking//

// console.log("1")
// const result =fs.readFileSync('contacts.txt','utf-8');
// console.log(result)
// console.log("2")

// // non-blocking
// console.log("1")
// fs.readFile('contacts.txt','utf-8',(error,result)=>{
//   console.log(result)
// }); // need callback
//  console.log("2")


// blocking//

// const os = require('os');

// console.log(os.cpus().length);

// const express = require('express');
// const app =express();
// const PORT =8000;
// const status = require('express-status-monitor');
//  app.use(status())


// fs.createReadStream('./contacts.txt').pipe(zlib.createGzip().pipe(fs.createReadStream('./contacts.zip')))
// app.get('/',(req,res)=>{

//   const stream = fs.createReadStream('./contacts.txt','utf-8');
//   stream.on('data',(chunk)=>res.write(chunk));
//   stream.on('end',()=>res.end())
//   // fs.readFile("./contacts.txt",(err,data)=>{
//   //   res.send(data)
//   // })
//  })


// event emitter//

const express = require('express');
const EventEmitter = require('events');
const app = express()

const event = new EventEmitter();

event.on("countAPI",()=>{
  console.log("hello event ")
})


app.get('/',(req,res)=>{
  res.send("sami 1")
  event.emit("countAPI")
})
app.get('/search',(req,res)=>{
  res.send("sami 2")
})
app.get('/update',(req,res)=>{
  res.send("sami 3")
})
 const PORT =8000;

app.listen(PORT,()=>{
  console.log("start")
})


