{
  /**
   * Type Assertions 💩
   * 100% 확신할때만 쓰자
   */
  function jsStrFunc(): any {
    return "hello";
  }
  const result = jsStrFunc();
  console.log((result as string).length);
  console.log((<string>result).length);

  const wrong: any = 5;
  //   console.log((wrong as Array<number>).push(1)); // ❌

  function findNumbers(): number[] | undefined {
    return undefined;
  }
  const numbers = findNumbers();
  numbers!.push(2); // ❌   ! = 절때절때 null이 아니야.

  const button = document.querySelector("class")!;
}
