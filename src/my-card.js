import { LitElement, html, css } from 'lit';
import "@lrnwebcomponents/meme-maker/meme-maker.js";

/**
 * Now it's your turn. Here's what we need to try and do
 * 0. get ur html to work in here
 * 1. Apply your CSS / HTML of a card to the my-card element
  2. Ignore the card modifying JS for now; we're just trying to get our card visually there
  3. Try to add your properties into the element so that you can change the variables to make instances of your card
  4. You should have at least 2-4 properties that I can think of at a glance
  5. Create 5 implementations of this in the demo / index.html area (meaning 5 different implementations of <my-card> using attributes)
  7. Run through the lit tutorial - https://lit.dev/tutorials/intro-to-lit/ to help MAKE SURE IT IS USING JS AND NOT TS
 */

export class MyCard extends LitElement {

  static get tag() {
    return 'my-card';
  }

  constructor() {
    super();
    this.cardTitle = "Web Design IST 256";
    this.websiteLink = "https://dns.google";
    this.imageLink = "https://pbs.twimg.com/media/DzrYahjXQAE44Sd.jpg";
    this.welcomeTitle = "Here is my card assignment";
    this.fancy = false;
    this.description = "Ever get frusturated formatting, designing, and adding HTMl/CSS elements to web pages? Hop on over to hax.psu.edu which allows even the most average of laymen such as myself to design web elements without issues and hours of frustration.";
    this.flavorText = "";
  }
  
  static get styles() {
    return css`
      :host {
        display: block;
      }

      :host([fancy]) {
        display: block;
        background-color: #5C000B;
        border: 2px solid fuchsia;
        box-shadow: 10px 5px 5px red;
      }
      
      h1 {
        text-align: center;
      }
      
      #card-format {
      }

      .p {
        text-align: left;
        font-family: sans-serif;
        margin: 5px;
      }
      
      .btn {
        background-color: gray;
        color: cyan;
        font-size: 20px;
        padding: 12px;
        display: block;
        margin: auto;
        margin-top: 16px;
        width: 70px;
        text-align: center;
      }
       
      @media screen and (max-width: 800px) and (min-width: 501px)
      {
        .btn {
          display: block;
        }
      }
      
      @media screen and (max-width: 500px)
        {
          .btn {
            display: none;
          }
      }
      
      a {
          text-decoration: none;
      }
      
      .assignment-title {
        font-size: 3em;
        margin: 16px;
        padding: 12px 12px 0px 12px;
        font-family: Times;
      }
      
      .controls-wrapper {
        margin: 0px 16px 0px 16px;
        padding: 0px 12px 12px 12px;
        font-family: monospace;
        color: black;
      }
      
      .card {
        color: blue;
        width: 400px;
        margin: 16px;
        padding: 12px;
        background-color: black;
        display: inline-block;
        border-radius: 25px;
        min-height: 600px;
      }
      
      details summary {
        text-align: left;
        font-size: 20px;
        padding: 8px 0;
      }
    
      details[open] summary {
        font-weight: bold;
      }
      
      details div {
        border: 2px solid yellow;
        text-align: left;
        padding: 8px;
        height: 70px;
        overflow: auto;
      }
    `;
  }
  
  openChanged(e) {
    console.log(e.newState);
    if (e.newState === "open") {
      this.fancy = true;
    }
    else {
      this.fancy = false;
    }
  }

  render() {
    return html`
    <h1 class="assignment-title">${this.welcomeTitle}</h1>
    
      <div class="card">
      <h1 id="card-title">
      ${this.cardTitle}
      </h1>

      <!-- <img class="card-image" alt="A funny meme" src="${this.imageLink}" style="width: 300px; display: block; margin: auto;"> -->

      <meme-maker alt="Cat stalking a small toy" image-url="https://cdn2.thecatapi.com/images/9j5.jpg" top-text="I bring you" bottom-text="the death">
</meme-maker>
      
      <details ?open="${this.fancy}" @toggle="${this.openChanged}">
        <summary>Description</summary>
          <div>
            <p class="p"><slot>${this.description}</slot></p>
            <p><slot>${this.flavorText}</slot></p>
          </div>
      </details>
      
      <a href="${this.websiteLink}"
        <button class="btn">Details</button>
      </a>
    </div>
    `;
  }

  static get properties() {
    return {
      cardTitle: { type: String },
      websiteLink: { type: String },
      imageLink: { type: String },
      welcomeTitle: { type: String },
      fancy: { type: Boolean, reflect: true },
      description: { type: String },
      flavorText: { type: String },
    };
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);
