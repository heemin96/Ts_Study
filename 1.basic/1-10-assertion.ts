{
  /**
   * Type Assertions ð©
   * 100% íì í ëë§ ì°ì
   */
  function jsStrFunc(): any {
    return "hello";
  }
  const result = jsStrFunc();
  console.log((result as string).length);
  console.log((<string>result).length);

  const wrong: any = 5;
  //   console.log((wrong as Array<number>).push(1)); // â

  function findNumbers(): number[] | undefined {
    return undefined;
  }
  const numbers = findNumbers();
  numbers!.push(2); // â   ! = ì ëì ë nullì´ ìëì¼.

  const button = document.querySelector("class")!;
}
