// (arr: number[]) = 매개변수 arr 타입은 Arr의 number
// :number = number로 반환
// function getArrayLength(arr: number[] | string[] | boolean[]):number {
//   return arr.length; 
// }

// ----

// [Generic 사용]

// function getArrayLength<T>(arr: T[]):number {
//   return arr.length; 
// }

// const array1 = [1, 2, 3];
// const array2 = ["a", "b", "c"];
// const array3 = [true, false, true];

// getArrayLength<number>(array1);
// getArrayLength<string>(array2);
// getArrayLength<boolean>(array3);


// // Generic을 사용해서 any 처리하기
// interface Vehicle<T> {
//   name: string;
//   color: string;
//   option: T; //any;
// }

// const car: Vehicle<{ price: number }> = {
//   name: 'Car',
//   color: 'red',
//   option: {
//     price: 1000
//   }
// }

// const bike: Vehicle<boolean> = {
//   name: 'Bike',
//   color: 'green',
//   option: true
// }

// ----

// [Generic Level Up]

const makeArr = <X, Y> (x: X, y: Y): [X, Y] => {
  return [x, y];
}

const array = makeArr<number, number>(4, 5);
const array2 = makeArr<string, string>("a", "b");

// 기본값 넣기
const makeArr1 = <X, Y = string> (x: X, y: Y): [X, Y] => {
  return [x, y];
}

const array1 = makeArr1<string>("a", "b");


// firstName + lastName + 이외의 값
const makeFullName = <T extends { firstName: string, lastName: string }>(obj: T) => {
  return {
    ...obj,
    fullName: obj.firstName + " " + obj.lastName
  }
}
// 호출
// firstName + lastName 속성은 무조건 있어야 한다.
makeFullName({ firstName: "John", lastName: "Kim", location: 'Seoul' })