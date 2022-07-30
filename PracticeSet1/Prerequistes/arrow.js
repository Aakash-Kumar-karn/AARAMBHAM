

// // let sum = (a,b)=>{
// // console.log(a+b);
// // }
// // sum(7,8)

// var regularFunction = function(name){
//        console.log(`I am  ${name}`)
// }

// let arrowFunction = name => console.log(`I am ${name}`)

// regularFunction('Adam')

// arrowFunction('Steve')


let test = () => {
    console.log(this); // {}
  };
  test();
  
  let person = {
    name: "Adam",
    age: 27,
  
    showDetails: function () {
      console.log(this.name + " " + this.age);
    },
  
    arrow: () => {
      console.log(this.name + " " + this.age);
    },
  };
  
  person.showDetails();
  person.arrow()