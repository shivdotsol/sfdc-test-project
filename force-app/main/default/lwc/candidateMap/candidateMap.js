import { LightningElement, api } from "lwc";

export default class CandidateMap extends LightningElement {
  @api city;
  @api country;
  @api street;
  @api state;

  get mapMarkers() {
    return [
      {
        location: {
          City: this.city,
          State: this.state,
          Country: this.country,
          Street: this.street
        },
        title: "Candidate Location"
      }
    ];
  }
}
