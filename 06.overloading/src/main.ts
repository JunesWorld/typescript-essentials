// // :string = 반환하는 type이 string
// function add(a:string, b:string): string;
// function add(a:number, b:number): number;
// function add(a: any, b: any): any {
//   return a + b
// }

// add("Hello", "world");
// add(1, 1);

// ----

// 매개변수에 직접적으로 union type 지정

// function saySomething(word: string | string[]): string {
//   if(typeof word === "string") {
//     return word;
//   } else if (Array.isArray(word)) {
//     return word.join(" ");
//   }
//   throw new Error("unable to say something")
// }

// saySomething(['hello', 'world']) // 'hello world'

// 위 코드와 동일
// 함수 오버로딩 사용
function saySomething(word: string): string
function saySomething(word: string[]): string
function saySomething(word: any): any {
  if(typeof word === "string") {
        return word;
      } else if (Array.isArray(word)) {
        return word.join(" ");
      }
      throw new Error("unable to say something")
}

saySomething(['hello', 'world']) // 'hello world'
