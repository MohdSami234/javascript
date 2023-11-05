let object = {
    name:"sami",
    lastname:"mohd",
    sayHi:function(){
        return "me"
    }
}

console.log(object)

console.log(object.sayHi())


///array//


let arr = [1,2,3,4,5]
arr.myprop = "sami"
console.log(arr)
arr[1000] = 3432
console.log(arr[50])

for(let key in arr){
    console.log(key,arr[key])
}

//function//

function fn(){
    console.log("Hello from fn");
}

//fn()

fn.prop = "property of function";
fn.myFn = function fn(){
    console.log(" I am a method of a function");

}

console.log(fn);

//6 primittive data type
 //number,string,bolean,null,symbol

//else id 


let obj = [{
    "name":"sami",
    age:100
}]

