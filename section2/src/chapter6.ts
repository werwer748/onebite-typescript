//* any: 특정 변수의 타입을 확실히 모를 때 사용
let anyVar: any = 10;
anyVar = "string";

anyVar = true;
anyVar = {};
anyVar = () => {};

// 에러가 발생하지 않는다. -> 런타임시 에러가 발생!
//! 타입 검사를 안하는 것과 같은것.. -> typescript가 가지는 이점을 모두 잃어버린다.
// anyVar.toUpperCase();

let num: number = 10;
num = anyVar;
//? any타입을 가진 변수는 모든 값을 할당 받을 수 있고, 모든 타입의 변수에 할당할 수 있다.

//* unknown
let unknownVar: unknown;

//? any와 마찬가지로 모든 타입의 값을 할당받을 수 있다.
unknownVar = "";
unknownVar = 1;
unknownVar = () => {};

// any와 다르게 모든 타입의 변수에 할당할 수 없다.
// num = unknownVar;
// 이렇게 특정 타입에 사용하는 메서드 역시 에러가 발생한다. (+, - 등의 연산자도 못쓴다.)
// unknownVar.toString();
