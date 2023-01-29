Array;
[1, 2].map;

type Student = {
  passed: boolean;
};
const students: Student[] = [
  { passed: true },
  { passed: true },
  { passed: false },
];

const result = students.every((student) => {
  return student.passed;
});

console.log(result);
