import getCandidateDetails from "@salesforce/apex/CandidateControllerClass.getCandidateDetails";
import { MessageContext, publish } from "lightning/messageService";
import { LightningElement, wire } from "lwc";
import CANDIDATE from "@salesforce/messageChannel/CandidateMessageChannel__c";

const cols = [
  { label: "First Name", fieldName: "First_Name__c" },
  { label: "Last Name", fieldName: "Last_Name__c" },
  { label: "Email", fieldName: "Email__c" },
  { label: "Phone", fieldName: "Phone__c" },
  { label: "Experience", fieldName: "Experience_Level__c" }
];

export default class CandidateSearch extends LightningElement {
  searchKey;
  candidates = [];
  columns = cols;
  selectedRows;

  @wire(MessageContext)
  messageContext;

  handleKeyChange(event) {
    this.searchKey = event.target.value;
    // console.log("------", this.searchKey);
    clearTimeout(this.delayTimeout);
    // eslint-disable-next-line @lwc/lwc/no-async-operation
    this.delayTimeout = setTimeout(() => {
      if (this.searchKey.length >= 2) {
        this.fetchCandidates();
      } else {
        this.candidates = [];
      }
    }, 300);
  }

  fetchCandidates() {
    getCandidateDetails({ searchKey: this.searchKey })
      .then((result) => {
        // console.log("----------------", result);
        this.candidates = result;
      })
      .catch((error) => {
        console.error(error);
      });
  }

  handleRowSelection(event) {
    this.selectedRows = event.detail.selectedRows;
    if (this.selectedRows.length > 0) {
      publish(this.messageContext, CANDIDATE, {
        candidateId: this.selectedRows[0].Id
      });
    }
  }
}
