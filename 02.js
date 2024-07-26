// 깊은 복사는 배열의 모든 요소를, 새로운 배열에 복사하여, 원본 배열과 복사된 배열이 서로 다른
//객체를 참조하게 만듭니다. 깊은 복사를 하면, 한 배열을 수정해도 다른 배열에 영향을 미치지 않습니다.
// 인지부조화의 문제 해결

// function deepCopy(o) {
//   var result = {};
//   if (typeof o === "object" && o !== null)
//     for (i in o) result[i] = deepCopy(o[i]);
//   else result = o;
//   return result;
// }

var arr1 = [{ a: 1 }, { b: 2 }];

/* 여기에 깊은 복사 코드를 작성해주세요 
  깊은복사 할 때 deepCopy를 사용하시거나 다른 방식도 가능합니다. */
var arr2 = JSON.parse(JSON.stringify(arr1));

/* arr2의 0번째 객체에 c라는 속성을 추가하고 값을 3으로 할당해주세요 */
arr2[0].c = 3;

/* arr1을 출력해주세요 출력값 : [{a:1}, {b:2}] */
console.log(arr1);
/* arr2를 출력해주세요 출력값 : [{a:1, c: 3}, {b:2}]*/
console.log(arr2);
