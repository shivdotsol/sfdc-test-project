import { LightningElement, wire } from "lwc";
import { NavigationMixin } from "lightning/navigation";
import { subscribe, MessageContext } from "lightning/messageService";
import ACCOUNT from "@salesforce/messageChannel/AccountMessageChannel__c";
import getAccountDetails from "@salesforce/apex/AccountControllerClass.getAccountDetails";

export default class AccountDetail extends NavigationMixin(LightningElement) {
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

  handleView() {
    this[NavigationMixin.Navigate]({
      type: "standard__recordPage",
      attributes: {
        recordId: this.account.Id,
        objectApiName: "Account",
        actionName: "view"
      }
    });
  }

  handleEdit() {
    this[NavigationMixin.Navigate]({
      type: "standard__recordPage",
      attributes: {
        recordId: this.account.Id,
        objectApiName: "Account",
        actionName: "edit"
      }
    });
  }
}
