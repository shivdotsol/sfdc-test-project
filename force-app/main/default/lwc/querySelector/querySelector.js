import { LightningElement } from "lwc";

export default class QuerySelector extends LightningElement {
  enteredName;

  handleClick() {
    const inputElement = this.template.querySelector(".input");
    this.enteredName = inputElement.value;
  }
}
