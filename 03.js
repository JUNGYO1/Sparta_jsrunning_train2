const student = {
  name: "yuno",
  age: "30",
  skill: ["javascript"],
  address: {
    city: "seoul",
  },
};

// 얕은 복사를 수행하여 shallowCopy를 만들어주세요.
const shallowCopy = student;

// 깊은 복사를 수행하여 deepCopy를 만들어주세요.
const deepCopy = JSON.parse(JSON.stringify(shallowCopy));

// 얕은 복사 객체와 원본 객체를 비교하여 출력해주세요
console.log(student === shallowCopy);

// 얕은 복사 객체의 address와 원본 객체의 address를 비교하여 출력해주세요.
console.log(student.address === shallowCopy.address);

//얕은 복사 객체는 참조를 복사하는 것으로, 원본과 복사된 객체가 동일한 객체를 참조하므로 같다고 할 수 있죠!

// 깊은 복사 객체와 원본 객체를 비교하여 출력해주세요.
console.log(deepCopy === student);

// 허나 깊은 복사 개념으로 들어가게 되면, deepCopy(깊은 복사한 객체)와 student는 각자 별개의 객체 이므로, 다른겁니다..
// 그래서 false가 뜬거죠.

// 깊은 복사 객체의 address와 원본 객체의 address를 비교하여 출력해주세요.
console.log(deepCopy.address === student.address);

// 동일한 student로 진행합니다.

// 얕은 복사한 객체에 배열요소 변경 javascript -> js으로 변경해주세요
shallowCopy.skill.splice(0, 1, "js");

// 깊은 복사 객체의 주소 속성을 변경하세요 (예: city를 "busan"으로 변경)
deepCopy.address.city = "busan";

// 결과 확인
console.log(student);
console.log(shallowCopy);
console.log(deepCopy);

/* 1~7번까지 출력값을 출력해보고 적어주세요
true
true
false
false
{
  name: 'yuno',
  age: '30',
  skill: [ 'js' ],
  address: { city: 'busan' }
}
{
  name: 'yuno',
  age: '30',
  skill: [ 'js' ],
  address: { city: 'busan' }
}
{
  name: 'yuno',
  age: '30',
  skill: [ 'javascript' ],
  address: { city: 'seoul' }
}
  */
