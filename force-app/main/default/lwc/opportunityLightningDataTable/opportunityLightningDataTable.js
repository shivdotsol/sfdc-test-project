import { LightningElement, wire } from "lwc";
import deleteOpportunity from "@salesforce/apex/OpportunityLightningDataTable.deleteOpportunity";
import getAllOpportunities from "@salesforce/apex/OpportunityLightningDataTable.getAllOpportunities";
import { ShowToastEvent } from "lightning/platformShowToastEvent";
import { refreshApex } from "@salesforce/apex";

const col = [
  { label: "Name", fieldName: "Name" },
  { label: "Stage", fieldName: "StageName" },
  { label: "Close Date", fieldName: "CloseDate", type: "date" },
  { label: "Amount", fieldName: "Amount", type: "Currency" }
];

export default class OpportunityLightningDataTable extends LightningElement {
  oppList;
  oppColumns = col;
  oppId;

  @wire(getAllOpportunities)
  opportunity(result) {
    this.wiredOppResult = result;
    if (result.data) {
      this.oppList = result;
    }
  }

  handleRowSelection(event) {
    const rows = event.detail.selectedRows;
    if (rows.length > 0) {
      this.oppId = rows[0].Id;
    }
  }

  handleClick() {
    if (!this.oppId) {
      this.dispatchEvent(
        new ShowToastEvent({
          title: "Error",
          message: "Error: Please select a record.",
          variant: "error"
        })
      );
      return;
    }

    deleteOpportunity({ oppId: this.oppId })
      .then(() => {
        this.dispatchEvent(
          new ShowToastEvent({
            title: "Success",
            message: "Success: Record is deleted successfully",
            variant: "Success"
          })
        );
        this.oppId = null;
        refreshApex(this.wiredOppResult);
      })

      .catch((err) => {
        this.dispatchEvent(
          new ShowToastEvent({
            title: "Error",
            message: err.body.message,
            variant: "error"
          })
        );
      });
  }
}
