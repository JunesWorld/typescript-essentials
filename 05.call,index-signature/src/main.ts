// [Call-signature]

// // 재사용하기 위해 생성
// interface getLikeNumber {
//   // 호출 시그니쳐
//   // (매개변수, type): 메소드가 반환하는 타입
//   (like: number): number;
// }

// interface Post {
//   id: number;
//   title: string;
//   getLikeNumber: getLikeNumber
// }

// // Post라는 Type 지정
// const post1: Post = {
//   id: 1,
//   title: 'post 1',
//   getLikeNumber(like: number) {
//     return like // number
//   }
// }

// post1.getLikeNumber(1);

// ------------------------

// [Index-signature]
// 모르는 다른 값이 계속 들어올 것이 예상될 때 사용!
interface Post {
  // 모르는 다른 값
  [key:string]: unknown;
  id: number;
  title: string;
}

const post1: Post = {
  id: 1,
  title: 'post 1',
}

post1['description'] = 'description 1';
post1['pages'] = '300';

// 배열 Index signature

interface Names {
  // item = userNames | 0 = number | string = John
  // userNames[0] === 'John'
  [item: number]: string;
}
const userNames = ['John', 'Neo', 'Kim']
