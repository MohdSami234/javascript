// //1
// let a = [];
// let b = [];
// console.log(a==b)
// console.log(a===b)

// they compare memory location. So both array will have different meemory location//


//2

// let a = []
// let b =a
// console.log(a==b)
// console.log(a===b)

//3

// let a = [20]
// let b =[20]
// console.log(a[0]==b[0])
// console.log(a[0]===b[0])

// //
// let z = [1,2,3,4]
// let a = {name:"anil"}

// console.log(...z)

// //5
// console.log("sami"/2)
// console.log(typeof NaN)//number

//6

// let data = 10 - -10
// console.log(data)


//7

// const set = new Set([1,1,2,3,4])
// console.log(set)

//8

// let data = {name:"Anil"};
// console.log(delete data.name)

// //9
// let data = {name:"Anil"};
// console.log(delete data)

//10

// const data =["peter","anil","sam"];
// const[y,z,x] = data;
// console.log(y,z,x)

//11


// const data =["peter","anil","sam"];
// const[,,y] = data;
// console.log(y)

//12


// let data = {name:"sami",age:30,skill:"ee"};
// let info = {city:"Noida",mail:"anil@test.com"};

// data = {...data,...info}
// console.log(data)


//13

// const result = false || {} || null
// console.log(result)

//14

// const result =[] || 0 || true
// console.log(result)


//15

// let name = "sami"
// function getname(){
//     console.log(name);
//     let name = "sami";
// }

// getname()

// //can't access before initialization/as let is not hosted//

//16


// let name = "sami"
// function getname(){
//     console.log(name);
//  }

// getname()

//can access outer let inside block

//17

// const name = "my name is sami"
// console.log(!typeof name ==="object");
// console.log(!typeof name==="object")

// becouse it excute !typeof name first . then compare with object/string


//18
let data = [1,2,4,5]
console.log(data.shift())