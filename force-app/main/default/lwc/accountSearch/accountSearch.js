import { LightningElement, wire } from "lwc";
import searchAccount from "@salesforce/apex/AccountControllerClass.searchAccount";
import { publish, MessageContext } from "lightning/messageService";
import ACCOUNT from "@salesforce/messageChannel/AccountMessageChannel__c";

const cols = [
  { label: "Name", fieldName: "Name" },
  { label: "Type", fieldName: "Type" }
];

export default class AccountSearch extends LightningElement {
  searchKey;
  accounts = [];
  columns = cols;
  selectedRows;

  @wire(MessageContext)
  messageContext;

  handleKeyChange(event) {
    this.searchKey = event.target.value;
    clearTimeout(this.delayTimeout);
    // eslint-disable-next-line @lwc/lwc/no-async-operation
    this.delayTimeout = setTimeout(() => {
      if (this.searchKey.length >= 2) {
        this.fetchAccounts();
      } else {
        this.accounts = [];
      }
    }, 300);
  }

  fetchAccounts() {
    searchAccount({ searchKey: this.searchKey })
      .then((result) => {
        this.accounts = result;
      })
      .catch((error) => {
        console.error(error);
      });
  }
  handleRowSelection(event) {
    this.selectedRows = event.detail.selectedRows;
    if (this.selectedRows.length > 0) {
      publish(this.messageContext, ACCOUNT, {
        accountId: this.selectedRows[0].Id
      });
    }
  }
}
