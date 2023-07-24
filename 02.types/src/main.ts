// Boolean
let boolean: boolean
let falseBoolean: boolean = false;

// Number
let number: number
let integer: number = 6
let float: number = 1.2345

// String
let string: string
let firstName: string = 'June';

// Array
// 한가지 타입만 가지는 배열
let names1: string[] = ['John', 'Kim'];
let names2: Array<string> = ['John', 'Kim'];

// 여러 타입을 가지는 배열(Union 타입 사용)
let array1: (string | number)[] = ['John', 1, 2];
let array2: Array<string | number> = ['John', 1, 2];

// 여러 타입을 단언 X = any
let someArray: any[] = ['John', 1, [], {}, false];

// Interface, Type

// 읽기 전용 배열 생성(readonly, ReadonlyArray)
let stringArray: readonly string[] = ['A', 'B'];
let numberArray: ReadonlyArray<number> = [1, 2];
// stringArray.push('C'); // Error
// numberArray[0] = 3; // Error

// Tuple
let tuple1: [string, number];
tuple1 = ['a', 1];
// Tuple Error
// tuple1 = ['a', 1, 2];
// tuple1 = [1, 'a'];
let users: [number, string][]
users = [[1, 'John'], [2, 'Doe']];

let tuple2: [string, number]
tuple2 = ['a', 1]
tuple2.push(2);
console.log(tuple2)

// any
let any: any = 'abc';
any = 1;
any = [];

// unknown
let unknown: unknown = false;
// let string1: string = unknown;
let string1: boolean = unknown as boolean;

// object
let obj: object = {};
let arr: object = [];
// let nul: object = null; // Error Strict
let date: object = new Date();

const obj1: { id: number, title: string, description: string }= {
  id: 1,
  title: 'title',
  description: 'description'
}

// Union
let union: (string | number)
union = 'h1';
union = 123;

// Function
// arg(매개변수) 지정
let func1: (arg: number, arg2: number) => number;
func1 = function (x, y) {
  return x * y
}

// return 없을 시 void
let func2: () => void;
func2 = function () {
  console.log('hi')
}

// Null, Undefined
// tsconfing.json (strict = false)

// let number1: number = undefined;
// let string9: number = null;
// let  object: {a: 10, b: false} = undefined;
// let array: any[] = null;
// let undefined1: undefined = null;
// let null1: null = undefined;
// let void1: void = null;

let void1: void = undefined

// void
function greeting(): void {
  console.log('hi')
}
const hi: void = greeting()
console.log(hi) // undefined

// never
// 항상 Error 발생할 것 확신
function throwError(): never {
  throw new Error('error')
}

function keepProcessing(): never {
  while (true) {
    console.log('hi');
  }
}