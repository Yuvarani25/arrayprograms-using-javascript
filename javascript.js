//1) Array manipulation (add elements push(),unshift(),remove elements-pop(),shift())
let car=["BMW","Skoda","Hundai","Tata"];
console.log(car);
//push
car.push("Rolls Royce");
console.log("Car brand :"+car);
//pop
car.pop();
console.log("Car brand :"+car);
//shift
car.shift();
console.log("Car brand :"+car);
//unshift
car.unshift("Morris Garrage");
console.log("Car brand :"+car);


//2)array searching
let bike=["KTM","BMW","Honda","Pulsar","Yamaha"];
console.log(bike);
//indexof()
console.log(bike.indexOf("Yamaha"));
//includes()
console.log(bike.includes("R15"));


//3)array filter
let arr=[10,30,40,20,60,50];
console.log(arr)
//sort()
console.log(arr.sort());
//reverse()
console.log(arr.reverse());
//find()
console.log(arr.find(x=>x>40));

// //4)array map
let array=[70,90,80,100];
console.log(array.map(num=>num+2));

//5)array filter
console.log(array.filter(y=>y>50));
