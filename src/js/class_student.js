"use strict";
import { studentID } from "./func_studentID";
import { STUDENTS_ARR } from ".";
import isSelfPayment from "./func_isSelfPayment";

export default class Student {
  constructor({ name, surname, ratingPoint, schoolPoint } = enrollee) {
    this.id = studentID();
    this.name = name;
    this.surname = surname;
    this.ratingPoint = ratingPoint;
    this.schoolPoint = schoolPoint;
    this.isSelfPayment = isSelfPayment(STUDENTS_ARR);
  }
}