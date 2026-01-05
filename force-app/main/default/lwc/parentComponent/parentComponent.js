import { LightningElement } from "lwc";

export default class ParentComponent extends LightningElement {
  message;
  handleMessage(event) {
    this.message = event.detail;
  }
}
