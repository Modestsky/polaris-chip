import { LitElement, html, css } from 'lit';

export class PolarisChip extends LitElement {
  static get tag() {
    return 'my-stretch';
  }
  
  constructor() {
    super();
    this.title = "Alert";
    this.alertColor = "yellow";
    this.paragraph = "Occaecat laboris incididunt ea labore quis in qui commodo velit cillum et commodo. Dolore consectetur eu eu reprehenderit anim fugiat in nostrud anim magna enim nisi. Mollit est incididunt sint aliqua duis. Deserunt ut velit deserunt fugiat eiusmod. Do incididunt laborum aliqua cupidatat adipisicing fugiat reprehenderit cillum id. Minim minim elit occaecat id velit fugiat ea. Aliqua excepteur ea excepteur cillum esse voluptate non elit laboris laboris esse est sunt incididunt ullamco. ";
    this.linkText = "Penn State";
    this.link = "https://www.psu.edu";
    this.date = "MARCH 7, 2024 12:00 AM";
  }
  
  static get styles() {
    return css`
      :host {
        color: #211C6A;
      }

      .stretch-wrapper {
        background-color: white;
        font-size: 20px;
        display: center;
        margin: auto;
        text-align: center;
      }

      .alert-wrapper {
        background-color: #bf8226;
        font-size: 20px;
        display: center;
        padding: 15px 15px 0px 0px;
        margin: auto;
        text-align: center;
        width: 100%;
        position: sticky;
        top: 0;
        flex-wrap: nowrap;
        
      }

      .alert-container {
        background-color: yellow;
        font-size: 20px;
        width: 65%;
        margin: auto;
        display: flex;
        max-width: 1440px;
        text-align: left;
        transform: skew(20deg);
      }

      .alert-contents {
        transform: skew(-20deg);
        padding: 15px 7% 15px 7%;
      }

      .date {
        text-align: left;
      }
    `;
  }
  
  render() {
    return html`
    <div class="stretch-wrapper">
    
        <details open class="alert-wrapper">
            <summary class="summary">${this.title}</summary>

          
          <div class="date">
          ${this.date}
          </div>

          <div class="alert-container" background-color: ${this.alertColor};>
            
            <div class="alert-contents">
              <div class ="alert-text">
                ${this.paragraph}
                <a href="${this.link}"
                  <button class="btn">${this.linkText}</button>
                </a>
              </div>
            </div>  
          </div>

        </details>
        <br><br><br>Test<br><br><br>Sticky<br><br><br>Element<br><br><br><br><br><br><br><br><br>Fin.<br>
    </div>
    `;
  }

  static get properties() {
    return {
      title: { type: String },
      paragraph: { type: String },
      linkText: {type: String },
      link: { type : String },
      alertColor: { type : String },
      date: { type : String },
    };
  }
}
globalThis.customElements.define(PolarisChip.tag, PolarisChip);
