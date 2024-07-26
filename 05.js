//해당 문제를 forEach로 변경하여 풀어주세요
1;
let arr = [10, 20, 30];
let arrAdd = [];
let arrMultiple = [];

// 해당 로직을 작성하세요

// 결과 값: [100, 200, 300] 출력해주세요

arr.forEach((element) => {
  arrAdd.push(element * 10);
});

console.log(arrAdd);

2;
arr = [10, 22, 33];
// // 5의 배수를 찾아 반환하세요
// // 해당 로직 작성해주세요
arr.forEach((element) => {
  if (element % 5 === 0) {
    arrMultiple.push(element);
  }
});

// 결과값 [10]
console.log(arrMultiple);
