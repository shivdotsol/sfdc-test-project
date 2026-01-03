import getAccountList from "@salesforce/apex/AccountController.getAccountList";
import { LightningElement, wire } from "lwc";

export default class ApexWireDemo extends LightningElement {
  @wire(getAccountList)
  accounts;
}
