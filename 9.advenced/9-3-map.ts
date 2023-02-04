type Video = {
  title: string;
  author: string;
  description: string;
};

type Optional<T> = {
  [P in keyof T]?: T[P]; // for...in
};

type VideoOptional = Optional<Video>;

type Animal = {
  name: string;
  age: number;
};

const animal: Optional<Animal> = {
  name: "dog",
};
// const videoOp: videoOptional = {
//   title: "hi",
// };

// type VideoOptional = {
//   title?: string;
//   author?: string;
//   description?: string;
// };
