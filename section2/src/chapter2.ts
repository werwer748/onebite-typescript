//* 배열
let numArr: number[] = [1, 2, 3];
let strArr: string[] = ["a", "b", "c"];

//? <>를 통해 타입을 지정하는 문법을 제네릭(Generic)이라고 한다.
let booArr: Array<boolean> = [true, false, true];

// 배열에 들어가는 요소들의 타입이 다양한 경우
//? 어떤 타입이 들어가는지 모를 때 변수에 마우스를 올리면 타입스크립트가 추론한 타입을 볼 수 있다.
let multiArr: (number | string)[] = [1, "hello"];

// 다차원 배열의 타입을 정의
let doubleArr1: (number | number[])[] = [1, [1, 2, 3], [4, 5]];
let doubleArr2: number[][] = [
  [1, 2, 3],
  [4, 5],
];

/**
 * 튜플 - JS에는 없는 TS만의 타입
 * -> 길이와 타입이 고정된 배열
 *
 * 그런데 이 튜플은 별도로 존재하는 자료형이라고 보기는 어렵다.
 * -> 컴파일하면 그냥 평범한 배열일 뿐...
 */
let tup1: [number, number] = [1, 2];
// tup1 = [1, 2, 3];
// tup1 = ["1", "2"]; // 오직 number인 요소 2개를 가진 배열만 할당할 수 있다.
let tup2: [number, string, boolean] = [1, "2", true];

//? 사실 그냥 배열이라 분명 길이를 제한했지만 아래코드에서 어떤 에러도 뱉지않는다.
// tup1.push(3);
// tup1.pop();
// tup1.pop();
// tup1.pop();

//튜플이 유용한 순간
const users: [string, number][] = [
  ["이순신", 1],
  ["강감찬", 2],
  ["을지문덕", 3],
  ["홍길동", 4],
  // 배열 내의 요소 타입이 고정적으로 들어가게 할 수 있다.
  // [5, "최영"],
];
