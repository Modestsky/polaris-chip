import { LitElement, html, css } from 'lit';

export class PolarisChip extends LitElement {
  static get tag() {
    return 'my-stretch';
  }
  
  constructor() {
    super();

  }
  
  static get styles() {
    return css`
      :host {
        color: #211C6A;
      }

      .stretch-wrapper {
        background-color: #74E291;
        font-size: 20px;
        padding: 12px;
        display: center;
        margin: auto;
        text-align: center;
      }

      .alert-wrapper {
        background-color: yellow;
        font-size: 20px;
        padding: 12px;
        display: center;
        margin: auto;
        text-align: center;
        position: sticky;
        top: 0;
      }

      .alert {
        background-color: silver;
        font-size: 20px;
        padding: 12px;
        display: center;
        margin: auto;
        text-align: center;
      }

      p {

      }


    `;
  }
  
  render() {
    return html`
    <div class="stretch-wrapper">
    
        <details open class="alert-wrapper">
            <summary>Alert</summary>

          <div class="alert">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas condimentum libero elementum quam tincidunt, id fermentum ligula fringilla. Aenean sit amet bibendum risus, sed feugiat arcu. Aenean auctor est erat, non congue urna ornare test eget. Bold. Italic. Bold italic. Sample link.

  Vivamus lobortis, turpis ac ornare suscipit, nulla eros elementum ante, sit amet euismod lectus elit ut tortor. Sed mi enim, hendrerit nec faucibus et, semper sit amet dolor. Maecenas non dui velit.
          </div>
        </details>
        regular text
        t
        <br>
        t
        <br><br>
        a
        <br>
        b<br><br><br>t<br>t<br>t<br>t<br>t<br>t<br>t<br>t<br>t<br>t<br>t<br>t<br>t<br>t<br>t<br>t<br>t<br>t<br>t<br>t<br>tawdawtawrnwakjrnwakjrwanwa<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>hey look, the sticky alert stuck with the top of the scree nand u can see this and the alert.<br><br><br><br><br><br>c
    </div>
    `;
  }

  static get properties() {
    return {
      title: { type: String },
      paragraph: { type: String },
      linkText: {type: String },
      link: { type : String },
    };
  }
}
globalThis.customElements.define(PolarisChip.tag, PolarisChip);
