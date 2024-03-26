import { LitElement, html, css } from 'lit';

export class PolarisChip extends LitElement {
  static get tag() {
    return 'invite-user';
  }
  
  constructor() {
    super();
    this.userList = [];
  }
  
  static get styles() {
    return css`
      :host {
        display: block;
      }

      input[type="text"] {
        width: 200px;
        margin-right: 10px;
      }

      button {
        background-color: gray;
        color: white;
        padding: 8px 16px;
        border: none;
        cursor: pointer;
        transition: background-color 0.3s;
        font-family: "Times New Roman", Times, serif; 
    }

    .button:hover,
    .button:focus {
      background-color: blue;
    }

    .button:active {
      background-color: red;
    }

      .invite-user-container {
        background-color: maroon;
        width: 450px;
        padding: 20px;
        color: white;
        margin: 20px;
        font-family: Arial, sans-serif;
      }

      .title {
        font-size: 40px;
        font-family: "Times New Roman", Times, serif;
        text-align: center;
      }

      .button {
        background-color: gray;
        color: white;
        padding: 8px 16px;
        border: none;
        cursor: pointer;
        font-family: "Times New Roman", Times, serif;
      }

      .image-container {
        margin-top: 20px;
        max-width: 400px;
        text-align: center;
      }
    `;
  }
  
  render() {
    return html`
      <div class="invite-user-container">
        <h2 class="title">Invite User</h2>
        <input id="usernameInput" type="text" placeholder="Enter username">
          <button class="button" @click="${this.addUser}">Add User</button>
          <button class="button" @click="${this.removeUser}">Remove User</button>
        <ul>
          ${this.userList.map(user => html`<li>${user}</li>`)}
        </ul>
        <img class="image-container" src="https://www.lmja.com/blog/wp-content/uploads/2016/05/photodune-6901703-connecting-people-xs.jpg" alt="Image of connecting people">
      </div>
    `;
  }

  addUser() {
    const input = this.shadowRoot.getElementById('usernameInput');
    const username = input.value.trim();
    if (username !== '') {
      this.userList.push(username);
      input.value = '';
      this.requestUpdate();
    }
  }

  removeUser() {
    if (this.userList.length > 0) {
      this.userList.pop();
      this.requestUpdate();
    }
  }

  static get properties() {
    return {
      title: { type: String },
    };
  }
}
globalThis.customElements.define(PolarisChip.tag, PolarisChip);
