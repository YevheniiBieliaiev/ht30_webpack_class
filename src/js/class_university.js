export default class University {
  #arrOfStudent = [];
  constructor(universityName) {
    this.universityName = universityName;
  }
  getStudentInfo({ name, surname, isSelfPayment, universityName } = student) {
    return `University: ${universityName}\nName: ${name}\nSurname: ${surname}\nSelf-payment: ${isSelfPayment}\n`;
  }
  addStudent(student) {
    
    if (student.ratingPoint >= 800 && !(this.#arrOfStudent.length)) {
      student.isSelfPayment = false;
    } else if(student.ratingPoint <800){
      student.isSelfPayment = false;
    }


    this.#arrOfStudent.push(student);
  }
  getArrOfStudent() {
    return this.#arrOfStudent
  }
}