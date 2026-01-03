import { LightningElement } from "lwc";

export default class SimpleCalculator extends LightningElement {
  num1;
  num2;
  result;

  handleNum1(event) {
    this.num1 = Number(event.target.value);
  }

  handleNum2(event) {
    this.num2 = Number(event.target.value);
  }

  handleProduct() {
    this.result = this.num1 * this.num2;
  }
  handleSum() {
    this.result = this.num1 + this.num2;
  }
  handleDivision() {
    this.result = this.num1 / this.num2;
  }

  handleDifference() {
    if (this.num1 > this.num2) {
      this.result = this.num1 - this.num2;
    } else {
      this.result = this.num2 - this.num1;
    }
  }
}
