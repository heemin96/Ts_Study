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

  //unknown -> 가급적 쓰지말자 💩
  let notSure: unknown = 0;
  notSure = "he";
  notSure = true;

  //any -> 최대한 피하자. 💩
  let anything: any = 0;
  anything = "hello";

  //void
  function print(): void {
    console.log("hello");
    return;
  }

  let unusable: void = undefined;

  //never -> 함수에서 절때 리턴되지 않을때 명시 하기 위해
  function throwError(message: string): never {
    //message -> server(log)
    throw new Error(message);
    while (true) {}
  }

  // objet -> 가급적 피하자 💩
  let obj: object;
  function acceptSomeObject(obj: object) {}
  acceptSomeObject({ name: "ellie" });
  acceptSomeObject({ animal: "dog" });
}
