//var는 재선언 가능
//let, const는 재선언 불가능
//const는 변경 불가능능

let bool : Boolean = false;
let num : number = 10;
let str : string = 'hi';
let obj : Object = {name:'asdf',age:4};
let arr:number[] = [1,2,3];

interface Person {
  name: string;
  age: number;
}

const person: Person = { name: "Alice", age: 30 };


const sumNumber = (a,b) => {
	return a+b;
}

sumNumber(1,2)
