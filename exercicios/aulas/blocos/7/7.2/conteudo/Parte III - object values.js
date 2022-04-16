// O Object.values segue a mesma lógica que o Object.keys , a diferença está em que ele lista os valores de cada chave.

const student = {
  Html: "Muito Bom",
  Css: "Bom",
  JavaScript: "Ótimo",
  SoftSkill: "Ótimo",
};

const listSkillsValuesWithValues = (student) => Object.values(student);

console.log(listSkillsValuesWithValues(student));
