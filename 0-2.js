function ajouter(a, b) {
  return a + b;
}

function soustraire(a, b) {
  return a - b;
}

function multiplier(a, b) {
  return a * b;
}

function diviser(a, b) {
  if (b === 0) {
    throw new Error("Division par zéro impossible");
  }
  return a / b;
}

function testAjouter() {
  let expected = 9
  let result = ajouter(3, 6)
  console.log(result === expected, "Test ajouter échoué")
}

function testSoustraire() {
  let expected = 5
  let result = soustraire(10, 5)
  console.log(result === expected, "Test soustraire échoué")
}

function testMultiplier() {
  let expected = 15
  let result = multiplier(3, 5)
  console.log(result === expected, "Test multiplier échoué")
}

function testDiviser() {
  let expected = 2
  let result = diviser(10, 5)
  console.log(result === expected, "Test diviser échoué")
}

function superieur(a, b) {
  return a > b;
}

function inferieur(a, b) {
  return a < b;
}

function superieurOuEgal(a, b) {
  return a >= b;
}

function inferieurOuEgal(a, b) {
  return a <= b;
}

function testSuperieur() {
  let expected = true
  let result = superieur(5, 3)
  console.log(result === expected, "Test superieur échoué")
}

function testInferieur() {
  let expected = true
  let result = inferieur(3, 5)
  console.log(result === expected, "Test inferieur échoué")
}

function testSuperieurOuEgal() {
  let expected = true
  let result = superieurOuEgal(5, 5)
  console.log(result === expected, "Test superieurOuEgal échoué")
}

function testInferieurOuEgal() {
  let expected = true
  let result = inferieurOuEgal(5, 5)
  console.log(result === expected, "Test inferieurOuEgal échoué")
}

function testEqual(expected, result) {
  console.log(result === expected, "Test échoué");
}

testAjouter()
testSoustraire()
testMultiplier()
testDiviser()
testSuperieur()
testInferieur()
testSuperieurOuEgal()
testInferieurOuEgal()


function createUser(db, firstName, lastName) {
  data = {
    firstName: firstName,
    lastName: lastName
  }
  db.insert(data)
}