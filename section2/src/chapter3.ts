// let user: object = {
// 객체 리터럴 방식으로 타입을 지정하여야 한다. -> 객체 리터럴 타입
let user: {
  // 있어도되고 없어도되는 값의 타입을 정의하는 방법 -> 옵셔널 프로퍼티 (number | undefined)
  id?: number;
  name: string;
} = {
  id: 1,
  name: "이순신",
};
user.id; // 에러가 없고 타입 추론도 잘 작동한다.
user = {
  // id: "2", // number | undefined 타입에 string을 할당하려고 하면 에러가 발생한다.
  name: "강감찬",
};

/**
 * user: object로 타입을 지정한 경우
 * ? 객체의 타입을 object로 지정하면 아무런 정보가 없는 객체를 뜻하게 된다. -> 프로퍼티에 대한 정보를 알 수 없다.
 * user.id; // 'object' 형식에 'id' 속성이 없습니다.
 */

let dog: {
  name: string;
  color: string;
} = {
  name: "돌돌이",
  color: "brown",
};
dog.color;

/**
 * 타입스크립트에서 객체의 타입을 정의할 때
 * object처럼 단순히 타입이름으로 타입을 정의하는게 아니라
 * 객체를 이루는 프로퍼티나 메소드가 어떻게 생겼는지,
 * 객체의 구조를 기준으로 타입을 정의한다.
 * -> 구조적 타입 시스템이라고 한다. (구조적 타입 시스템의 반대는 명목적 타입 시스템)
 * -> 프로퍼티를 기반으로 타입을 결정하는 시스템이라는 뜻의 Property Based Type System 이라고도 한다.
 */

let config: {
  // readonly를 사용하면 값을 변경할 수 없는 프로퍼티가 된다. (읽기 전용)
  readonly apiKey: string;
} = {
  apiKey: "MY API KEY",
};

// config.apiKey = "hacked"; // Cannot assign to 'apiKey' because it is a read-only property.
