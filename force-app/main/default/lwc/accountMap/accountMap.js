import { LightningElement, api } from "lwc";

export default class AccountMap extends LightningElement {
  @api city;
  @api country;
  @api street;
  @api postalCode;
  @api state;

  get mapMarkers() {
    return [
      {
        location: {
          City: this.city,
          State: this.street,
          Country: this.country,
          Street: this.street,
          PostalCode: this.postalCode
        },
        title: "Account Location"
      }
    ];
  }
}
