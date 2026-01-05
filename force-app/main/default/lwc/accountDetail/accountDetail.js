import { LightningElement, wire } from "lwc";
import { subscribe, MessageContext } from "lightning/messageService";
import ACCOUNT from "@salesforce/messageChannel/AccountMessageChannel__c";
import getAccountDetails from "@salesforce/apex/AccountControllerClass.getAccountDetails";

export default class AccountDetail extends LightningElement {
  subscription;
  account;

  @wire(MessageContext)
  messageContext;

  connectedCallback() {
    this.subscription = subscribe(this.messageContext, ACCOUNT, (message) =>
      this.loadAccount(message.accountId)
    );
  }

  loadAccount(accountId) {
    getAccountDetails({ accountId })
      .then((result) => {
        this.account = result;
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
