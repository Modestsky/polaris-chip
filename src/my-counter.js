import { LitElement, html, css } from 'lit';

export class PolarisChip extends LitElement {
  static get tag() {
    return 'my-counter';
  }
  
  constructor() {
    super();

    this.title = "Counter";
    this.counter = 0;
    this.maxCount = 10;
    this.minCount = -10;
  }
  
  static get styles() {
    return css`
      :host {
        display: block;
        display: inline-flex;
      }

      .card {
        color: blue;
        width: 400px;
        margin: 16px;
        padding: 12px;
        background-color: black;
        display: inline-block;
        border-radius: 25px;
        text-align: center;
      }
      
      .btn {
        background-color: gray;
        color: cyan;
        font-size: 50px;
        height: 100px;
        width: 100px;
        border: 3px outset blue;
        text-align: center;
        border-radius: 50%;
      }
      
      #add-button:hover,
      #add-button:focus {
        background-color: green;
      }

      #subtract-button:hover,
      #subtract-button:focus {
        background-color: red;
      }
    `;
  }
  
  render() {
    var countColor;

    if (this.counter === 21 || this.counter === 18){
      countColor = "green";
    }
    if (this.counter === this.maxCount || this.counter === this.minCount){
      countColor = "red";
    }
    return html`
    <confetti-container id="confetti">
      <div class="card">
          <h1 style="color: ${countColor}">${this.title}: ${this.counter}</h1>
          <button class="btn" id="add-button" @click="${this.decrease}" ?disabled="${this.minCount === this.counter}">-</button>
          <button class="btn" id="subtract-button" @click="${this.increase}" ?disabled="${this.maxCount === this.counter}">+</button>
      </div>
    </confetti-container>
    `;
  }

decrease (){
    if (this.counter != this.minCount){
        this.counter--;
    }
}

increase (){
    if (this.counter != this.maxCount){
        this.counter++;
    }
}

updated(changedProperties) {
  if (changedProperties.has('counter')) {
    // do your testing of the value and make it rain by calling makeItRain
    if (this.counter === 21){
      this.makeItRain();
    }
  }
}

makeItRain() {
  // this is called a dynamic import. It means it won't import the code for confetti until this method is called
  // the .then() syntax after is because dynamic imports return a Promise object. Meaning the then() code
  // will only run AFTER the code is imported and available to us
  import("@lrnwebcomponents/multiple-choice/lib/confetti-container.js").then(
    (module) => {
      // This is a minor timing 'hack'. We know the code library above will import prior to this running
      // The "set timeout 0" means "wait 1 microtask and run it on the next cycle.
      // this "hack" ensures the element has had time to process in the DOM so that when we set popped
      // it's listening for changes so it can react
      setTimeout(() => {
        // forcibly set the poppped attribute on something with id confetti
        // while I've said in general NOT to do this, the confetti container element will reset this
        // after the animation runs so it's a simple way to generate the effect over and over again
        this.shadowRoot.querySelector("#confetti").setAttribute("popped", "");
      }, 0);
    }
  );
}

  static get properties() {
    return {
      counter: { type: Number },
      maxCount: { type: Number },
      minCount: {type: Number },
      title: { type : String },
    };
  }
}
globalThis.customElements.define(PolarisChip.tag, PolarisChip);
