import { LightningElement } from "lwc";

export default class ChildComponent extends LightningElement {
  sendMessage() {
    const myEvent = new CustomEvent("childmessage", {
      detail: "Hello",
      bubbles: true,
      composed: true
    });
    this.dispatchEvent(myEvent);
  }
}
