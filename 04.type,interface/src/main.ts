// Interface

// interface Animal {
//   name: string;
// }

// interface Bear extends Animal {
//   honey: boolean;
// }

// -----------------

// Type Alias

type Animal = {
  name: string;
}

type Bear = Animal & {
  honey: boolean
}

const bear1: Bear = { // Bear 대신 Animal을 넣으면 Error
  name: 'honey bear',
  honey: true
}