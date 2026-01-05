import { LightningElement } from "lwc";

export default class C2pModalComponent extends LightningElement {
  closeModal() {
    const myEvent = new CustomEvent("close");
    this.dispatchEvent(myEvent);
  }
}
