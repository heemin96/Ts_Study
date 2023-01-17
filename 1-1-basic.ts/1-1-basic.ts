{
  /**
   * JavaScript
   * Primitive: number, string, boolean, bigint, symbol, null, undefined
   * Object: function, array....
   */
  //number
  const num: number = 1;

  //string
  const str: string = "hello";

  //boolean
  const boal: boolean = false;

  //undefined
  let name: undefined;
  let age: number | undefined;
  age = undefined;
  age = 1;
  function find(): number | undefined {
    return undefined;
  }

  //null
  let person: null;
  let person2: string | null;

  //unknown -> 가급적 쓰지말자
  let notSure: unknown = 0;
  notSure = "he";
  notSure = true;

  //any -> 최대한 피하자.
  let anything: any = 0;
  anything = "hello";

  //void
  function print(): void {
    console.log("hello");
    return;
  }
}
