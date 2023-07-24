// bodyElement Error 해결
// html에 body가 있다는 것을 알고 있다.

// as HTMLBodyElement 사용
// const bodyElement = document.querySelector('body') as HTMLBodyElement;
// bodyElement.innerText = "hello";

// ! 사용
// const bodyElement = document.querySelector('body');
// bodyElement!.innerText = "hello";

// Type guard 사용
const bodyElement = document.querySelector('body');
if (bodyElement) {
  bodyElement.innerText = 'Hello';
}

// Type Assertion의 잘못된 예시
// function func(arg: string | null) {
//   return (arg as string).toLowerCase();
// }

// Type Guard 사용
function func(arg: string | null) {
  if(arg) {
    return arg.toLowerCase();
  }
}

func('hello');
func(null);