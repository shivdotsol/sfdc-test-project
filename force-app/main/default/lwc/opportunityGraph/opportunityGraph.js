import { LightningElement, wire } from "lwc";
import ChartJs from "@salesforce/resourceUrl/ChartJs";
import { loadScript } from "lightning/platformResourceLoader";
import getOpportunities from "@salesforce/apex/OpportunityGraphController.getOpportunities";

export default class OpportunityGraph extends LightningElement {
  isLoaded = false;
  opportunities;
  chart;
  renderedCallback() {
    if (this.isLoaded) {
      return;
    }

    this.isLoaded = true;

    loadScript(this, ChartJs)
      .then(() => {
        console.log("Script Loaded.");
      })
      .catch((error) => {
        console.log("Failed to load.", error);
      });
  }

  @wire(getOpportunities)
  wiredOpps({ data, error }) {
    if (data) {
      this.opportunities = data;
      this.drawChart();
    } else {
      console.log(error);
    }
  }
  drawChart() {
    const canvas = this.template.querySelector("canvas");
    const ctx = canvas.getContext("2d");
    this.chart = new window.Chart(ctx, {
      type: "bar",
      data: {
        labels: this.opportunities.map((opp) => opp.Name),
        datasets: [
          {
            label: "Opportunity Amount",
            data: this.opportunities.map((opp) => opp.Amount),
            backgroundColor: "#1B96FF"
          }
        ]
      }
    });
  }
}
