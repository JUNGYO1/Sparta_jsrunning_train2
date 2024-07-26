1;
const students = [
  { name: "이재상", scores: [80, 90] },
  { name: "김준현", scores: [90, 95] },
  { name: "정윤오", scores: [75, 70] },
];

console.log(
  students
    .map((student) => ({
      name: student.name,
      average:
        student.scores.reduce((sum, score) => sum + score, 0) /
        student.scores.length,
    }))
    .filter((student) => student.average >= 80)
    .map((student) => student.name)
);

2;
const numbers = [5, 10, 15, 20, 25];
console.log(numbers.map((a) => a * 2).filter((a) => a <= 30));
// 요소에 2를 곱하고, 30 이하인 것들만 반환받아 출력해주세요
// 출력값 : [10, 20, 30]
