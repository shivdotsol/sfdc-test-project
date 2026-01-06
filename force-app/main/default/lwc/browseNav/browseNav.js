import { LightningElement } from "lwc";

export default class BrowseNav extends LightningElement {
  selectedItem = "accountSearch";
  handleSelect(event) {
    this.selectedItem = event.detail.name;
    console.log("Selected Item: ", this.selectedItem);
  }
}
