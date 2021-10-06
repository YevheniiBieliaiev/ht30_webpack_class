"use strict";
import Student from "./class_student";
import University from "./class_university";


function main() {
  const ENROLLEES_ARR = [];

  const UNIVERSITY = new University("Kharkiv National University of Economics");

  const FOMA_KINAIEV = new Student({
    name: "ASCHF",
    surname: "LSTSHFUM",
    ratingPoint: 800,
    schoolPoint: 920,
    university: UNIVERSITY
  });

  const ALEXEI_ZAYSEN = new Student({
    name: "ALEXEI",
    surname: "ZAYSEN",
    ratingPoint: 600,
    schoolPoint: 600,
    university: UNIVERSITY
  });

  const KSENIIA_ONATOPP = new Student({
    name: "KSENIIA",
    surname: "ONATOPP",
    ratingPoint: 750,
    schoolPoint: 800,
    university: UNIVERSITY
  });

  const IVAN_DANKO = new Student({
    name: "IVAN",
    surname: "DANKO",
    ratingPoint: 840,
    schoolPoint: 900,
    university: UNIVERSITY
  });

  const VIGGO_TARASOV = new Student({
    name: "VIGGO",
    surname: "TARASOV",
    ratingPoint: 1000,
    schoolPoint: 1000,
    university: UNIVERSITY
  });

  const GULNARA_GULINA = new Student({
    name: "VIKTOR",
    surname: "NAVORSKY",
    ratingPoint: 800,
    schoolPoint: 840,
    university: UNIVERSITY
  });

  const IRINA_SPALKO = new Student({
    name: "IRINA",
    surname: "SPALKO",
    ratingPoint: 920,
    schoolPoint: 800,
    university: UNIVERSITY
  });

  const ZEY_CHELOVEK = new Student({
    name: "ZEY",
    surname: "CHELOVEK",
    ratingPoint: 800,
    schoolPoint: 920,
    university: UNIVERSITY
  });

  ENROLLEES_ARR.push(FOMA_KINAIEV, ALEXEI_ZAYSEN, KSENIIA_ONATOPP, IVAN_DANKO, VIGGO_TARASOV, GULNARA_GULINA, IRINA_SPALKO, ZEY_CHELOVEK);

  UNIVERSITY.addStudent(FOMA_KINAIEV);
  console.log(UNIVERSITY.getArrOfStudent())
  
  

}

main()