import { studentID } from "./func_studentID";

export default class Student {
  constructor({ name, surname, ratingPoint, schoolPoint, university } = enrollee) {
    this.id = studentID();
    this.name = name;
    this.surname = surname;
    this.ratingPoint = ratingPoint;
    this.schoolPoint = schoolPoint;
    this.university = university.universityName;
  }
}