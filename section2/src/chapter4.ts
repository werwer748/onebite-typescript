//* 타입 별칭(Type Alias)

// 타입 별칭을 통해서 여러 변수에 편하게 타입을 적용할 수 있다.
//? 타입 별칭도 일반 타입처럼 JS로 컴파일되면서 사라진다. -> 컴파일된 코드에는 타입 별칭이 존재하지 않는다.
type TUser = {
  id: number;
  name: string;
  nickname: string;
  birth: string;
  bio: string;
  location: string;
  // 추가적인 프로퍼티가 생길경우 간단하게 추가할 수 있다.
  extra?: string;
};

// 같은 스코프내에서 동일한 이름으로 타입 별칭을 선언할 수 없다.
// type TUser = {}; // Cannot redeclare block-scoped variable 'TUser'.

function func() {
  type TUser = {}; // 같은 이름의 타입 별칭을 선언해도 다른 스코프이기 때문에 에러가 발생하지 않는다.
}

let user: TUser = {
  id: 1,
  name: "강아무개",
  nickname: "거북선장",
  birth: "2017.01.01",
  bio: "안녕하세요. 거북선장입니다.",
  location: "진주시",
};

let user2: TUser = {
  id: 2,
  name: "박아무개",
  nickname: "거북항해사",
  birth: "2017.01.01",
  bio: "안녕하세요. 거북항해사입니다.",
  location: "사천시",
};

//* 인덱스 시그니처(Index Signature)
// 키와 밸류의 타입을 기준으로 규칙을 이용해서 유연하게 타입을 정의할 수 있다.
type CountryCodes = {
  [key: string]: string;
};
let conutryCodes: CountryCodes = {
  Korea: "ko",
  UnitedStates: "us",
  UnitedKingdom: "uk",
};

type CountryNumberCodes = {
  [key: string]: number;
  // 특정 프로퍼티 정도는 강제하고 싶다면 추가하면 된다.
  // Korea: number; // 아래 코드에 Korea가 없으면 에러가 발생한다.

  //! 추가적인 프로퍼티의 밸류 타입은 인덱스 시그니처의 밸류 타입과 일치해거나 호환되어야 한다.
  // Korea: string; // Type 'string' is not assignable to type 'number'.
};

let countryNumberCodes: CountryNumberCodes = {
  //? 프로퍼티가 없어도 에러가 발생하지 않는다. -> 지정한 규칙을 위반하지만 않으면 모든 객체를 할당할 수 있다.
  Korea: 410,
  // UnitedStates: 840,
  // UnitedKingdom: 826,
  // Korea: { code: 82 }, // Type '{ code: number; }' is not assignable to type 'number'.
};
