Array

let arr = ["Hi", "I", "am", "Mrinal"];

// let a = arr[1] // I
// let b = arr[0] // Hi

//Destructuring

let [a, b, c, d, e = "bye"] = arr;

console.log(a, b, c, d, e);

//Objects -


// let obj = {
//        name : 'Adam',
//        state : 'New York',
//        pincode : 123456
// }


// let {state, name : firstName , pincode} = obj //firstName is optional name // always give key name here not a b c

// console.log(name , state , pincode)

//Nested Objects - 
let obj = {
    name: "Adam",
    address: {
      country: "USA",
      state: {
        stateName: "New York",
        pincode: 123456,
      },
    },
  };

  let {name} = obj;
  console.log(name);

  //let {address : {country:cd}} = obj;
  //console.log(country);

let {address : {country:cd} , address : {state : {pincode}}} = obj

let {address : {state : {stateName}}} = obj

console.log(cd)
console.log(stateName);
console.log(pincode)

console.log(stateName)


console.log(name)