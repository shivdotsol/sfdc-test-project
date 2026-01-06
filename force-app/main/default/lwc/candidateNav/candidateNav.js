import { LightningElement } from "lwc";

export default class CandidateNav extends LightningElement {
  selectedItem = "candidateSearch";
  handleSelect(event) {
    this.selectedItem = event.detail.name;
    console.log("Selected Item: ", this.selectedItem);
  }
}
