// 1. 얕은 복사
1;
const arr1 = [1, 2, 3];
const arr2 = arr1;
arr2[0] = 10;
console.log(arr1); // [10, 2, 3]
console.log(arr1 === arr2); // true
// Shallow Copy, Deep Copy의 개념으로써 얕은 복사는 , 배열의 참조를 복사하는 것
// 원본 배열과 복사된 배열이 동일한 객체를 참조하므로 따라서,
// const arr2 = arr1;에서 한 배열을 수정하면 다른 배열에 똑같이 영향을 받음

2;
const obj1 = { a: 1, b: 2, c: 3 };
const obj2 = obj1; // obj1을 얕은 복사하는 코드로 작성해주세요

/* obj2에 d를 추가하는 코드를 작성해주세요. d는 4의 값을 가집니다. */
obj1.d = 4;

console.log(obj1);
console.log(obj2);
