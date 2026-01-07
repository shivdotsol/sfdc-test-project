import { LightningElement } from "lwc";

export default class QuerySelector extends LightningElement {
  message;

  handleClick() {
    const inputs = this.template.querySelectorAll(".input");
    let allFields = true;

    inputs.forEach((inp) => {
      if (!inp.value) {
        allFields = false;
      }
    });

    if (allFields) {
      this.message = "All fields are filled.";
    } else {
      this.message = "Please fill all the fields";
    }
  }
}
