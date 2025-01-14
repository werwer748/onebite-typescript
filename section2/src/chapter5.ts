// Enum(Enumerated) Type: 열거형 타입
// enum 타입은 JS에는 없는 TS만의 타입이다.

// 헷갈릴수 있는 구분값을 이름으로 명시하여 사용할 수 있다.
enum Role {
  //* 멤버의 값이 숫자가 할당되는 enum -> 숫자형 enum
  // 따로 값을 지정하지 않으면 0부터 시작하여 1씩 증가하는 값이 할당된다.
  // ADMIN, // 관리자
  // USER, // 일반 유저
  // GUEST, // 게스트
  ADMIN, // = 10, // 10으로 주면 10부터 시작하여 1씩 증가하는 값이 할당된다.
  USER = 10, // 중간에 숫자를 주면 ADMIN은 1, USER에서 10으로 시작하여 1씩 증가하는 값이 할당된다.
  GUEST, // 12
}

enum Language {
  //* 멤버의 값이 문자열이 할당되는 enum -> 문자열 enum
  korea = "ko",
  english = "en",
}

const user1 = {
  name: "이순신",
  role: Role.ADMIN,
  language: Language.korea,
};
const user2 = {
  name: "강감찬",
  role: Role.USER,
};
const user3 = {
  name: "신립",
  role: Role.GUEST,
};

console.log(user1, user2, user3);

/**
 * enum은 컴파일 결과에서 사라지지 않는다!
 * -> JS의 객체로 변환된다.
 * -> 코드상에서 값을 사용하듯이 활용할 수 있다.
 */
