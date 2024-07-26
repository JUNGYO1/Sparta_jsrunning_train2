console.log(
  students
    .map((student) => ({
      name: student.name,
      average:
        student.scores.reduce((sum, score) => sum + score, 0) /
        student.scores.length,
    }))
    .filter((students) => student.average >= 80)
    .map((student) => student.name)
);