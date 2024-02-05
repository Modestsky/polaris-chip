import { LitElement, html, css } from 'lit';

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
    this.websiteLink = "#";
    this.imageLink = "https://pbs.twimg.com/media/DzrYahjXQAE44Sd.jpg";
    this.welcomeTitle = "Here is my card assignment";
  }

  static get styles() {
    return css`
      :host {
        display: block;
      }
      
      #card-format {
      }
      
      h1 {
        text-align: center;
      }
      .p {
        text-align: left;
        font-family: sans-serif;
        margin: 50px;
      }
      
      .btn {
        background-color: gray;
        color: cyan;
        font-size: 20px;
        padding: 12px;
        display: block;
        margin: auto;
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
        color: yellow;
        width: 400px;
        margin: 16px;
        padding: 12px;
        background-color: black;
        display: inline-block;
      }
      
    `;
  }

  render() {
    return html`
    <h1 class="assignment-title">${this.welcomeTitle}</h1>

    <div class="controls-wrapper">
    <h2>Modify the card with these buttons below</h2>
      <button id="duplicate">Clone Card</button>
      <button id="changetitle">Change title</button>
      <button id="changeimage">Change image</button>
      <button id="changebg">Change background</button>
      <button id="delete">Delete card</button>
    </div>
    
    <div id="card-format">
      <div class="card">
      <h1 id="card-title">
      ${this.cardTitle} 
      </h1>
      
      <img class="card-image" alt="A funny meme" src="${this.imageLink}" style="width: 300px; display: block; margin: auto;">
      
      <p class="p">Ever get frusturated formatting, designing, and adding HTMl/CSS elements to web pages? Hop on over to hax.psu.edu which allows even the most average of laymen such as myself to design web elements without issues and hours of frustration.</p>
      
      <a href="${this.websiteLink}"
        <button class="btn">Details</button>
      </a>
    </div>
    </div>
    `;
  }

  static get properties() {
    return {
      cardTitle: { type: String },
      websiteLink: { type: String },
      imageLink: { type: String },
      welcomeTitle: { type: String },
    };
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);
