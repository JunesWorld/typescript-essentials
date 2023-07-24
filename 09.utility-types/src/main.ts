// [Partial]

// interface Address {
//   email: string;
//   address: string;
// }

// const me: Partial<Address> = {};
// const you: Partial<Address> = { email: 'june@abc.com' };
// const all: Address = { email: 'june@abc.com', address: 'june' };

// -------------

// [Pick]

// interface Todo {
//   title: string;
//   description: string;
//   completed: boolean;
// }

// type TodoPreview = Pick<Todo, "title" | "completed">;

// const todo: TodoPreview = {
//   title: "Clean Room",
//   completed: false
// }

// -------------

// [Omit]

interface Todo {
  title: string;
  description: string;
  completed: boolean;
  createdAt: number;
}

type TodoPreview = Omit<Todo, "description">;

const todo = {
  title: "clean room",
  completed: false,
  createdAt: 2020
}

// -------------

// [Required]

type User = {
  firstName: string,
  lastName?: string // ? = 선택사항
}

let firstUser: User = {
  firstName: "john"
}

let seconduser: Required<User> = {
  firstName: "John",
  lastName: "Kim"
}

// -------------

// Record<Keys,Type>

interface CatInfo {
  age: number;
  breed: string;
}

type CatName = "john" | "boris" | "miffy"

const cats: Record<CatName, CatInfo> = {
  john: { age: 10, breed: "Persian" },
  boris: { age: 5, breed: "Maine Coon" },
  miffy: { age: 20, breed: "British" }
}

cats.boris;

// -------------

// [ReturnType]

type T0 = ReturnType<() => string> // string
type T1 = ReturnType<(s: string) => void> // void

function fn(str: string) {
  return str;
}

const a: ReturnType<typeof fn> = 'Hello';
// const b: ReturnType<typeof fn> = true; // Error : string