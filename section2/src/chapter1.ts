/**
 * : type
 * -> 이런 문법을 타입스크립트에서는 타입 주석 또는 타입 어노테이션이라고 부른다.
 */

//* 타입스크립트에서 제공하는 기본적인 5가지 원시 타입

// number
let num1: number = 123;
let num2: number = -123;
let num3: number = 0.123;
let num4: number = -0.123;
let num5: number = Infinity;
let num6: number = -Infinity;
let num7: number = NaN;

//num1 = "hi"; // 다른 타입의 값을 담을수 없다.
//num1.toUpperCase(); // 문자열 전용 메소드를 사용할 수 없다.
num3.toFixed(2); // 숫자 전용 메소드는 당연히 사용할 수 있다.

// string
let str1: string = "hello";
let str3: string = `hello`;
let str4: string = `hello ${num1}`;

str1.toUpperCase(); // 문자열 전용 메소드를 사용할 수 있다.

// boolean
let bool1: boolean = true;
let bool2: boolean = false;

// null
let null1: null = null;

// undefined
let unde1: undefined = undefined;

//? null과 undefined도 타입으로 사용할 수 있다.

// 기본적으로 다른 타입의 값에 null을 담을 수 없다.
// 하지만 이렇게 써야하는 상황이 있다면 tsconfig.json 파일에서 strictNullChecks 옵션을 false로 설정하면 된다.
// let numA: number = null;

// 리터럴 타입 - 값을 타입으로 사용함으로써 변수에 할당할 수 있는 값을 제한할 수 있다.
// 복합적인 타입을 만들때 유용하게 쓰인다.
let numA: 10 = 10;
let strA: "hello" = "hello";
// strA = "hi"; // 에러
let boolA: true = true;
// boolA = false; // 에러
