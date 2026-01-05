import { LightningElement } from "lwc";

export default class C2pParentComponent extends LightningElement {
  showModal = false;
  handleClick() {
    this.showModal = true;
  }
  closeModal() {
    this.showModal = false;
  }
}
