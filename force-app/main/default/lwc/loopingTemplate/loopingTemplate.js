import { LightningElement } from "lwc";

export default class LoopingTemplate extends LightningElement {
  cricketers = ["Kohli", "Rohit", "Dhoni"];
  teamDetail = [
    { id: 1, name: "Rohit", team: "Mumbai Indians" },
    { id: 2, name: "Kohli", team: "Royal Challengers Bangalore" },
    { id: 3, name: "Dhoni", team: "Chennai Super Kings" }
  ];
}
