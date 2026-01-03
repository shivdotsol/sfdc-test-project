import { LightningElement } from "lwc";

export default class LifecycleHook extends LightningElement {
  message = "Initial Message";

  constructor() {
    super();
    console.log("This is the first constructor which is called.");
  }

  connectedCallback() {
    console.log("This is the second hook connectedCallback()");
  }

  renderedCallback() {
    console.log("This is the third callback renderedCallback()");
  }

  changeMessage() {
    this.message = "Updated message";
    console.log("Button clicked -> Message got updated ");
  }

  disconnectedCallback() {
    console.log("Last callback: disconnectedCallback()");
  }
}
