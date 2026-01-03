import { LightningElement, track } from 'lwc';

export default class MyFirstLWC extends LightningElement {
  messageToDisplay = "Hello from VS Code."
  @track user = {
    name:"Shiv",
    city:"HYD"
  }
  course = "Salesforce"
  title = "SF LWC"

  num1 = 10
  num2 = 20

cricketers = ["Kohli", "Dhoni", "Rohit"]

  handleChange(event){
    this.title = event.target.value
  }

  handleCityChange(event){
    this.user.city = event.target.value
  }

  get multiply(){
    return this.num1 * this.num2
  }
}