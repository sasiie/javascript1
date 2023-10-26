//Functions
//Task 1
const printCurrentTime = () => {
  const currentTime = new Date();
  return currentTime.toLocaleTimeString();
};
console.log(printCurrentTime());

//Task 2
const printName = () => {
  console.log("Sara");
};

printName();
printName();

//Task 3
const printGreeting = (name) => {
  if (name === "Bob") {
    console.log("Hello Bob");
  } else if (name === "Sue") {
    console.log("Hello Sue");
  }
};

printGreeting("Bob");
printGreeting("Sue");

//Task 4
const multiply = (num1, num2) => {
  return num1 * num2;
};

const first = multiply(5, 12);
console.log(first);

const second = multiply(75, 4);
console.log(second);

//Task 5
if (warmEnough(15)) {
  console.log("Go for a run!");
}

function warmEnough(temperature) {
  if (temperature > 10) {
    return true;
  } else {
    return false;
  }
}
