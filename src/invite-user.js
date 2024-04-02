import "@lrnwebcomponents/rpg-character/rpg-character.js";
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
        display: flex;
        text-align: center;
      }

      .invite-user-container {
        background-color: maroon;
        width: 1500px;
        border-radius: 25px;
        border: 2px solid #73AD21;
        color: white;
        margin: auto;
        margin-bottom: 50px;
        font-family: Arial, sans-serif;
        display: grid;
        padding: 20px;
      }

      .character-card {
        background-color: #3eacf1;
        border-radius: 8px;
        padding: 20px;
        margin: 20px;
        display: flex;
        max-width: 20%;
        flex-direction: column;
        align-items: center;
      }

      .image-placeholder {
        max-height: 200px;
        border-radius: 8px;
      }

      .character-details {
        margin-top: 10px;
        color: black;
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
    `;
  }
  
  render() {
    return html`
      <div class="invite-user-container">
        <h2>Invite User</h2>
        <div class="input-container">
          <input id="usernameInput" type="text" placeholder="Enter username">
          <button class="button" @click="${this.addUser}">Add User</button>
          <!-- this does nothing yet, even if uncommented with the functions -->
          <!-- <button class="input-button" @click="${this.saveParty}">Save Party</button> -->
        </div>
        ${this.userList.map(user => this.renderCharacterCard(user))}
      </div>
    `;
  }

  renderCharacterCard(user) {
    return html`
      <div class="character-card">
        <rpg-character seed="${user}" walking></rpg-character>
        <div class="character-details">${user}</div>
        <button class="delete-button" @click="${() => this.deleteUser(user)}">Delete</button>
      </div>
    `;
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

  // this does nothing yet, (even uncommented) so i'll implement this next time around when i know what im doing and when have time
  // saveParty(){
  //   if(this.userparty.length !== 0 && this.userparty.length <= this.partysize){
  //       this.makeItRain();
  //   }
  // }

  // makeItRain() {
  //     import("@lrnwebcomponents/multiple-choice/lib/confetti-container.js").then(
  //         (module) => {
  //             setTimeout(() => {
  //             this.shadowRoot.querySelector("#confetti").setAttribute("popped", "");
  //             }, 0);
  //         }
  //     );
  // }
}

customElements.define(InviteUser.tag, InviteUser);
