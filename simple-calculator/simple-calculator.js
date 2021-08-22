class Calculator {
   constructor() {}
   sum(num1, num2) {
      return parseInt(num1) + parseInt(num2);
   }
   substract(num1, num2) {
      return num1 - num2;
   }
   multiple(num1, num2) {
      return num1 * num2;
   }
   divide(num1, num2) {
      return num1 / num2;
   }
}
module.exports = Calculator;
