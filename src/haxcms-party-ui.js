import "@lrnwebcomponents/rpg-character/rpg-character.js";
import { DDD } from "@lrnwebcomponents/d-d-d/d-d-d.js";
import { html, css } from "lit";

export class HaxcmsPartyUi extends DDD {
    static get tag() {
        return "haxcms-party-ui";
    }

    constructor() {
        super();

        this.userList = [];
        this.userName = null;
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

        .users-panel {
            display: inline-flex;
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
        return t` 
        <div class="party-ui-wrapper"> 
            <div class="input-wrapper">
                <input type="text" class="username-add" onfocus="this.value=''" @keypress="${this.inputScrub}" @input="${this.updateName}"> 
                <button class="add" @click="${this.addUser}" ?disabled="${null == this.userName || "" == this.userName}">Add User</button> 
            </div> 
            <div class="users-panel"> ${this.users.map((e=>t` 
                <div class="user-card ${e.name}"> 
                    <rpg-character class="user-char" seed="${e.name}"></rpg-character>
                    <p class="userName"> ${e.name} </p> 
                    <button class="remove" data-user-id="${e.id}" @click="${this.removeUser}">Remove User</button> 
                </div> `))} 
            </div> 
            <button class="save-users" @click="${this.displayUsers}">Save Users</button> 
            <p class="array-display"> ${this.printUsers}</p> 
        </div> `
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

    static get properties() {
        return {
            party: { type: Array },
        };
        }
    }

globalThis.customElements.define(HaxcmsPartyUi.tag, HaxcmsPartyUi);