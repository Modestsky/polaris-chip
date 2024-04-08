import "@lrnwebcomponents/rpg-character/rpg-character.js";
import { DDD } from "@lrnwebcomponents/d-d-d/d-d-d.js";
import { LitElement, html, css } from 'lit';

export class InviteUser extends LitElement {
  static get tag() {
    return 'invite-user';
  }
  
  constructor() {
    super();
    this.userList = [];
    this.maxUsers = 8;
  }
  
  static get styles() {
    return css`
      :host {
        text-align: center;
      }

      .invite-user-container {
        background-color: maroon;
        width: 900px;
        border-radius: 25px;
        border: 2px solid #73AD21;
        color: white;
        margin: auto;
        margin-bottom: 40px;
        padding: 20px;
      }

      .character-card {
        background-color: #3eacf1;
        border-radius: 8px;
        padding: 20px;
        margin: 20px;
        display: inline-flex;
        max-width: 20%;
        flex-direction: column;
        opacity: 0.9;
      }

      .character-card:hover {
        opacity: 1;
      }

      .character-details {
        margin-top: 10px;
        color: black;
      }

      .rpg-character {
        max-height: 125px;
        max-width: 100px;
        margin: auto;
      }

      .delete-button {
        margin-top: 10px;
        background-color: red;
        color: beige;
        padding: 8px 16px;
        cursor: pointer; /* I learned this from chatgpt when formatting, this is dope. (added level of interactability) */
        border-radius: 8px;
        transition: background-color 0.3s;
      }

      .delete-button:hover,
      .delete-button:focus {
        background-color: #00ff00;
      }

      .button,
      .input-button {
        margin: var(--ddd-spacing-2) var(--ddd-spacing-0);
        color: var(--ddd-theme-default-keystoneYellow);
        background-color: var(--ddd-theme-default-slateMaxLight);
      }

      .button:hover,
      .button:focus,
      .input-button:hover {
        color: var(--ddd-theme-default-red);
      }
    `;
  }
  
  render() {
    return html`
      <confetti-container id="confetti">
        <div class="invite-user-container">
          <h2>Invite User</h2>
          <div class="input-container">
            <input maxlength="10" id="usernameInput" type="text" placeholder="Enter username" @input="${this.filter}">
            <button class="button" @click="${this.addUser}">Add User</button>
            <button class="input-button" @click="${this.saveParty}">Save Party</button>
          </div>
          ${this.userList.map(user => this.renderCharacterCard(user))}
        </div>
      </confetti-container>
    `;
  }

  renderCharacterCard(user) {
    return html`
      <div class="character-card">
        <rpg-character class="rpg-character" seed="${user}" walking></rpg-character>
        <div class="character-details">${user}</div>
        <button class="delete-button" @click="${() => this.deleteUser(user)}">Delete</button>
      </div>
    `;
  }

  filter(e) {
    const input = e.target;
    const blackListChar = input.value.replace(/[^a-z0-9]/g, '');
    if (input.value !== blackListChar) {
      input.value = blackListChar;
    }
  }
  
  addUser() {
    const input = this.shadowRoot.getElementById('usernameInput');
    const username = input.value.trim();
    if (username !== '' && this.userList.length < this.maxUsers) {
      this.userList.push(username);
      input.value = '';
      this.requestUpdate();
      
    }
  }

  deleteUser(user) {
    const index = this.userList.indexOf(user);
    if (index !== -1) {
      this.userList.splice(index, 1);
      this.requestUpdate();
    }
  }

  saveParty() {
    if(this.userList.length === 0) {
      alert("Error: No user in party!");
    }

    if (this.userList.length > 0) {
      alert("Successfully Saved!");
      console.log('Party saved:', this.userList);
      this.requestUpdate();
    }
  }

  makeItRain() {
    import("@lrnwebcomponents/multiple-choice/lib/confetti-container.js").then(
      (module) => {
        setTimeout(() => {
          this.shadowRoot.querySelector("#confetti").setAttribute("popped", "");
        }, 0);
      }
    );
  }
}

customElements.define(InviteUser.tag, InviteUser);
