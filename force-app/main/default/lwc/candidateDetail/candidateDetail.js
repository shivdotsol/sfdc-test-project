import { MessageContext, subscribe } from "lightning/messageService";
import { LightningElement, wire } from "lwc";
import { NavigationMixin } from "lightning/navigation";
import CANDIDATE from "@salesforce/messageChannel/CandidateMessageChannel__c";
import getCandidateById from "@salesforce/apex/CandidateControllerClass.getCandidateById";

export default class CandidateDetail extends NavigationMixin(LightningElement) {
  subscription;
  candidate;

  @wire(MessageContext)
  messageContext;

  connectedCallback() {
    this.subscription = subscribe(this.messageContext, CANDIDATE, (message) => {
      this.loadCandidate(message.candidateId);
    });
  }

  loadCandidate(candidateId) {
    getCandidateById({ candidateId })
      .then((result) => {
        this.candidate = result;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  handleView() {
    this[NavigationMixin.Navigate]({
      type: "standard__recordPage",
      attributes: {
        recordId: this.candidate.Id,
        objectApiName: "Candidate__c",
        actionName: "view"
      }
    });
  }

  handleEdit() {
    this[NavigationMixin.Navigate]({
      type: "standard__recordPage",
      attributes: {
        recordId: this.candidate.Id,
        objectApiName: "Candidate__c",
        actionName: "edit"
      }
    });
  }
}
