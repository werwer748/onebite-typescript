//* void(공허) -> 아무것도 없다. -> 아무것도 없음을 의미하는 타입

// function func1(): 반환값의 타입 {}
function func1(): string {
  return "hello";
}

//? 아무것도 반환하지 않는 함수의 반환 타입을 정의할 때 사용
function func2(): void {
  console.log("hello");
}

// 변수에도 할당할 수 있지만 undefined만 담을 수 있다.
let a: void;
//! undefined 외에 모두 에러!
// a = 1;
// a = "he";
// a = {};

//? tsconfig에 strictNullChecks가 false면 null은 가능
// a = null;

a = undefined;

/**
 * 왜 굳이 void 타입을 사용할까?
 *
 * 1. 반환값 타입을 undefined로 정의하면 에러가 발생한다.
 * -> 무조건 return undefined;를 써야만 함수가 허용된다. 하다못해 return;이라도 써줘야 함.
 *
 * 2. 반환값 타입을 null로 정의해도 에러가 발생한다.
 * -> return null; 만이 허용 된다.
 *
 * 굳이 무언가 리턴하는 값을 정의(return문)할 필요가 없는 함수는 void를 사용하면 된다.
 */

//* never -> 존재하지 않는 불가능한 타입

/**
 * 아무것도 반환하지 않으니까 void를 쓰면 되는걸까?
 * -> void를 반환타입으로 갖는 함수는 함수가 정상적으로 종료는 되지만
 *   반환문이 없다는 것을 명시적으로 표현하기 위해 사용한다.
 * -> 해당 함수는 애초에 정상적으로 종료가 되지 않기때문에
 *    이 함수가 뭔가를 반환한다는것 자체가 모순이고 절대 불가능하다.
 *
 * 결국, 이 함수에 반환값이 있다는것 자체가 모순이다! 라고 하는 경우 never를 사용한다.
 */
function func3(): never {
  while (true) {}
}

//? 좀 더 와닿는 예시 -> 함수 실행시 바로 프로그램이 정지될테니 반환값이 의미자체가 없다.
function func4(): never {
  throw new Error();
}

let anyVar: any = 1;
// 변수가 never 타입이면 어떤값도 할당할 수 없다. 심지어 tsconfig에서 strictNullChecks를 false로 설정해도 null과 undefined도 할당할 수 없다.
let b: never;
// b = 1;
// b = "hello";
// b = {};
// b = undefined;
// b = null;

//! 심지어 any도 할당할 수 없다.
// b = anyVar;
