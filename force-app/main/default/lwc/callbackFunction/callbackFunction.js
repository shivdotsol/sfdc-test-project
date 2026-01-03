import { LightningElement } from "lwc";

export default class CallbackFunction extends LightningElement {
  handleClick() {
    this.performAction(this.afterAction);
  }

  performAction(callback) {
    console.log("Action started");
    callback();
  }

  afterAction() {
    console.log("Action completed.");
  }
}
