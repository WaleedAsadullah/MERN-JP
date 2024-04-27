let a:string = "abc"

type objType = {
    id:number,
    name:string|number,
    approvalStatus?: "Approved"| "Pending"| true
}

let myObj:objType = {
     id:1,
     name:"waleed",
}

myObj.approvalStatus = "Approved"
myObj.approvalStatus = true
myObj.name = 10


let newArray:(string|number)[] = []

newArray.push("working")
newArray.push(1)


let arrowFunction = (message:string):string => {
    return message
}

function simpleFunction(message:string) : string {
    return message
}

console.log(arrowFunction("waleed"))

let arrowFunctionTwo = (message:string|number = "message"):string|number => {
    return message
}