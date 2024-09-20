// https://www.codewars.com/kata/5625618b1fe21ab49f00001f/train/javascript

function sayHello(name) {
  return "Hello, " + name;
}

//Messi goals function:
function goals(laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
  return laLigaGoals + copaDelReyGoals + championsLeagueGoals;
}

//Return Negative:
function makeNegative(num) {
  if (num < 0) return num;
  else return -num;
}

//Terminal game move function:
function move(position, roll) {
  return position + roll * 2;
}

//Personalized Message
function greet(name, owner) {
  if (name === owner) return "Hello boss";
  else return "Hello guest";
}

//Keep Hydrated!
function litres(time) {
  return Math.floor(time * 0.5);
}

//Opposites Attract
function lovefunc(flower1, flower2) {
  return flower1 % 2 !== flower2 % 2;
}
