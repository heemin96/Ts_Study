/**
 * Type Inference
 * 타입추론 좋은걸까..? -> no.
 */

// let text = "hello";
// function print(message) {
//   console.log(message);
// }
// print("hello");
{
  function add(x: number, y: number): number {
    return x + y;
  }
  const result = add(1, 2);

  add(1, 2);

  console.log(add(1, 2));
}
