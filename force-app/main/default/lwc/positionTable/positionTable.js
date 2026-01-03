import { LightningElement, wire } from "lwc";
import getPositions from "@salesforce/apex/PositionController.getPositions";

export default class PositionTable extends LightningElement {
  @wire(getPositions)
  positionsList;
}
