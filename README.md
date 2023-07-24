# Typescript-Essentials

## Typescript가 나오게 된 배경..

JavaScript는 원래 클라이언트 측 언어로 도입되었습니다.  
그런데 Node.js의 개발로 인해서 JavaScript를 클라이언트 측 뿐만이 아닌 서버 측 기술로도 활용되게 만들었습니다.  
그러나 JS 코드가 커질수록 소스 코드가 더 복잡해져서 코드를 유지 관리하고 재사용하기가 어려워졌습니다.  
더욱이 Type 검사 및 컴파일 시 오류 검사의 기능을 수용하지 못하기 때문에 JS가 본격적인 서버 측 기술로 엔터프라이즈 수준에서 성공하지 못합니다.  
이 간극을 메우기 위해 Typescript가 제시되었습니다.

## TypeScript란?

자바스크립트에 타입을 부여한 언어입니다.  
JS의 확장된 언어(superset)라고 볼 수 있습니다.  
자바스크립트와 달리 브라우저에서 실행하려면 파일을 한번 변환해주어야 합니다.  
이 변환 과정을 우리는 컴파일(Compile)이라고 부릅니다.

- Typescript -> Compile -> Javascript(node.js/browser에서 동작)
  - Typescript : 정적타입(코드 작성 단계에서 오류 확인)
  - Javascript : 동적타입(런타임에서 동작할 때 타입 오류 확인)
 
## Type System

- 개발 환경에서 에러를 잡는 걸 도와준다.
- Type Annotation을 사용해서 코드를 분석할 수 있다
- 오직 개발 환경에서만 활성화 됩니다.
- 타입스크립트와 성능 향상과는 관계가 없다.

## Typescript 사용하는 이유?

- JS code를 단순화하여 더 쉽게 읽고 디버그할 수 있도록 합니다.
- 코드 유형 검사를 통해 JS를 작성할 때 개발자가 일반적으로 겪는 버그를 회피하는데 도움이 될 수 있다.

## 타입이란?

그 value가 가지고 있는 프로퍼티나 함수를 추론할 수 있는 방법이다.

"apple"
- string 문자열
- 이것은 value인데 문자열이 가지는 프로퍼티, 메소드를 가지고 있는 value입니다.
  ```js
  let string: string;
  'string'.length // 프로퍼티 : 문자열 길이 제공
  'string'.toLowerCase(); // 메소드 : 문자열에 작업을 수행한 다음 반환
  ```

Typescript는 JS에서 기본으로 제공하는 기본 제공 유형(built-in types)을 상속합니다.
- Primitive Types
  - string, number, boolean, null, undefined, symbol
- Object Types
  - function, array, classes, object
- 추가 Types
  - Tuple
  - Enum : 열거형
    - 값들의 집합을 명명하고 이를 사용하도록 만듭니다.
    - 여기서는 PrintMedia라 불리는 집합을 기억하기 어려운 숫자 대신 친숙한 이름으로 사용하기 위해 활용
    - 별도의 값이 설정되어 있지 않으면 0부터 시작
      ```js
      enum PrintMedia {
        Newspaper, // 0
        Newsletter, // 1
        Magazine, // 2
        Book // 3
      }
      let mediaType: number = PrintMedia.Book // 3
      ```
      ```js
      enum PrintMedia {
        Newspaper = 1, 
        Newsletter = 50, 
        Magazine = 55, 
        Book // 55 + 1
      }
      let mediaType: number = PrintMedia.Book // 56
      let type: string = PrintMedia[55] // 'Magazine'
      ```
    - 언어 집합 코드
      ```
      export enum LanguageCode {
        korean = 'ko',
        english = 'en',
        japanese = 'ja',
        chinese = 'zh',
        spanish = 'es'
      }
      const code: LanguageCode = LanguageCode.english
      ```
    - Enum VS Object
      - Enum
        - 선언할 때 이후에 변경 X
        - 속성값으로 문자열 or 숫자만 허용
      - Object
        - code 내에서 새로운 속성을 자유롭게 추가 가능
        - 속성값으로 JS가 허용하는 모든 타입이 올 수 있다  
  - Any
    - 잘 알지 못하는 타입을 표현할 때 사용.
    - 타입 검사를 하지 않고 그 값들이 컴파일 시간에 검사를 통과하길 원할 때 사용.
    - 하지만, 사용하지 않는게 좋다.
      ```js
      let something: any = "Hello World!";
      something = 23;
      something = true;

      let arr: any[] = ["John", 212, true];
      arr.push("Smith");
      console.log(arr); // Output: ['John', 212, true, 'Smith']
      ```
  - Void : undefined & null 값 가능
    - 데이터가 없는 경우 사용
    - 함수가 값을 반환하지 않을 때
    - 타입이 없고 any와 반대 의미
    - void 소문자로 사용, 주로 함수의 리턴이 없을 때 사용
      ```js
      function sayHi(): void {
        console.log('Hi!')
      }
      let speech: void = sayHi();
      console.log(speech); // OUTPUT: undefined
      ``` 
  - Never : 어떠한 값도 가질 수 없다
    - 절대 발생하지 않을 값을 나타냄
    - 함수의 return 값으로 사용
    - 항상 오류를 리턴 or 리턴 값을 절대로 내보내지 않음을 의미
    - 무한 루프
      ```js
      function throwError(errorMsg: string): never {
        throw new Error(errorMsg);
      }
      function keepProcessing(): never {
        while(true) {
          console.log('I always does something and never ends.')
        }
      }
      ```
  - Union
    - Typescript를 사용하면 변수 또는 함수 매개변수에 대해 둘 이상의 데이터 유형을 사용할 때
      ```js
      let code: (string | number);
      code = 123; // OK
      code = "ABC"; // OK
      code = false; // Error
      ```

## Type Annotation & Interface

Type Annotation
- 개발자가 타입을 타입스클비트에게 직접 말해주는 것
  ```js
  const rate: number = 5 // number type 지정
  ```

Type Interface
- 타입스크립트가 알아서 타입을 추론하는 것
  ```js
  const rate = 5
  ```

타입을 추론하지 못해서 타입 Annotation을 꼭 해줘야하는 경우
- any 타입을 리턴하는 경우
  ```js
  const json = '{"x": 4, "y": 7}'
  const coordinates = JSON.parse(json)
  console.log(coordinates)
  ```
  
- 변수 선언을 먼저하고 나중에 초기화 하는 경우
  ```js
  let greeting
  greeting = 'hello' // let greeting: any
  ```

- 변수에 대입될 값이 일치하지 못하는 경우
  ```js
  let num = [-7, -2, 10]
  let numAboveZero: boolean | number = false

  for (let i =0; i < num.length; i++) {
    if (num[i] > 0) {
      numAboveZero = num[i]
    }
  }
  ```

  ## 개발 환경 구성

   Typescript Global Install
  ```bash
  npm i -g typescript
  ```

  Compile 명령어
  ```bash
  tsc main.ts
  ```

  Compile Watch
  - 바로 컴파일!!
  - ts 수정하면 자동으로 js 변경
    ```bash
    tsc main.ts -w
    ```

ts.config.json 설정
```js
{
  "compilerOptions": {
    "rootDir": "./src", // root 경로
    "outDir": "./build/js", // compile 후 JS 파일 저장 경로
    "target": "ES6", // ES3 -> ES6
    "noEmitOnError": false, // ts파일에 Error 있을 때 js파일 emit X
    "module": "ESNext", // compile 마친 후 JS가 사용하는 모듈 시스템
    "moduleResolution": "Node", 
    "esModuleInterop": true, // ES Module, CommonJS 호환해서 사용 가능
    "lib": ["ESNext", "DOM"], // compile 과정에서 사용하는 라이브러리 지정
    "strict": true // ㅁ타입스크립트 파일에 타입을 엄격하게 사용한다고 명시
  },
  "include": [ // 소스 파일의 어디에서 타입스크립트 파일을 찾을 수 있는지 명시
    "./src/**/*.ts" // src 폴더안에 모든 하위 경로, 모든 ts 파일
  ]
}
```

## 타입 단언(Type Assertion)

프로그래머가 컴파일러에게 타입에 더 잘 알고 있으니, 나의 주장에 대해 의심하지 마라.

## Type Alias(타입 별칭) Interface

타입의 이름을 지정하는 방법으로 매우 유사

Interface
- extends를 이용해서 확장

Alias
- Intersection을 이용해서 확장
