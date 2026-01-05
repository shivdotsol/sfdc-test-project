import { LightningElement } from "lwc";

export default class GrandParentComponent extends LightningElement {
  message;
  handleMessage(event) {
    this.message = event.detail;
  }
}
