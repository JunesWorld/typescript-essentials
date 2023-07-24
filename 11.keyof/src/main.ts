interface IUser {
  name: string;
  age: number;
  address: string;
}

type UserKeys = keyof IUser // "name" | "age" | "address"


// 객체를 type으로 변환 후 keyof 사용
const user = {
  name: "John",
  age: 20,
  address: 'seoul'
}
type Userkeys = keyof typeof user

// 모든 key 추출
enum UserRole {
  admin,
  manger
}
type UserRoleKeys = keyof typeof UserRole
