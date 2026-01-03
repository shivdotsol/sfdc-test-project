import { LightningElement } from "lwc";
import getWonOpportunities from "@salesforce/apex/OpportunityController.getWonOpportunities";
import getLostOpportunities from "@salesforce/apex/OpportunityController.getLostOpportunities";

export default class ImperetiveOpportunity extends LightningElement {
  oppList;

  loadWonRec() {
    getWonOpportunities()
      .then((result) => {
        this.oppList = result;
      })
      .catch((error) => {
        console.log(JSON.stringify(error));
      });
  }
  loadLostRec() {
    getLostOpportunities()
      .then((result) => {
        this.oppList = result;
      })
      .catch((error) => {
        console.log(JSON.stringify(error));
      });
  }
}
