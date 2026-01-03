import { LightningElement } from 'lwc';

export default class ConditionalRendering extends LightningElement {
  isVisible = false;
  name;

  handleClick(){
    this.isVisible = !this.isVisible
  }

  handleChange(event){
    this.name = event.target.value
  }

  get isTextHello(){
    return this.name === "hello"
  }
}