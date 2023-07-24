

class Post {
  // class를 instance로 생성 후 constructor안에서 인수 전달해준 것을 매개변수로 받아주고  
  // 매개변수들을 this.id, this.title에 할당할 때 Error가 발생
  // 초기값 설정해주어야함
  public id: number = 0;
  public title: string = "";
  constructor(id: number, title: string) {
    this.id = id;
    this.title = title;
  }

  // Method
  getPost() {
    return `postId ${this.id}, postTitle: ${this.title}`;
  }
}

// public : O
// protected : O
class PostB extends Post {
  getPost() {
    return this.title;
  }
}

const post: Post = new Post(1, "title 1")

// public : O
// protected : X
console.log(post.id);
console.log(post.title);