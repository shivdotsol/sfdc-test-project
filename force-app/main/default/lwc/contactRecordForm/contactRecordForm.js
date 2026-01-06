import { LightningElement } from "lwc";
import { ShowToastEvent } from "lightning/platformShowToastEvent";
import FIRSTNAME_FIELD from "@salesforce/schema/Contact.FirstName";
import LASTNAME_FIELD from "@salesforce/schema/Contact.LastName";
import EMAIL_FIELD from "@salesforce/schema/Contact.Email";
import PHONE_FIELD from "@salesforce/schema/Contact.Phone";

export default class ContactRecordForm extends LightningElement {
  contactFields = [FIRSTNAME_FIELD, LASTNAME_FIELD, EMAIL_FIELD, PHONE_FIELD];

  handleSuccess() {
    this.dispatchEvent(
      new ShowToastEvent({
        title: "Success",
        message: "Contact created successfully!",
        variant: "success"
      })
    );
  }
}
