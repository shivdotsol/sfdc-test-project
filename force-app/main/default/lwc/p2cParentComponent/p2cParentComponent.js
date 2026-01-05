import { LightningElement, track } from "lwc";

export default class P2cParentComponent extends LightningElement {
  @track percentage = 10;
  changeHandler(event) {
    this.percentage = event.target.value;
  }
}
