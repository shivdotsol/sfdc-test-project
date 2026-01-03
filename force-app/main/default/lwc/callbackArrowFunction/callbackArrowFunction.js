import { LightningElement } from "lwc";

export default class CallbackArrowFunction extends LightningElement {
  currentTime;
  connectedCallback() {
    this.updateTime();
  }

  refreshUsingArrow = () => {
    // eslint-disable-next-line @lwc/lwc/no-async-operation
    setTimeout(() => {
      this.updateTime();
    }, 1000);
  };

  refreshUsingNormalCallback() {
    // eslint-disable-next-line @lwc/lwc/no-async-operation
    setTimeout(function () {
      // this.updateTime();
    }, 1000);
  }

  refreshUsingBind() {
    // eslint-disable-next-line @lwc/lwc/no-async-operation
    setTimeout(
      function () {
        this.updateTime();
      }.bind(this),
      1000
    );
  }

  refreshUsingLocalVariable() {
    let self = this;
    // eslint-disable-next-line @lwc/lwc/no-async-operation
    setTimeout(function () {
      self.updateTime();
    }, 1000);
  }

  updateTime() {
    this.currentTime = new Date().toString();
  }
}
