import { LitElement, html, css } from 'lit';

export class eProtfolio3 extends LitElement {
  static get tag() {
    return 'eProtfolio-3';
  }
  constructor() {
    super();
    this.title = 'eProtfolio-3';
    this.link = "#";
  }

  static get styles() {
    return css`
            body {font-family: Arial;}

        /* Style the tab */
        .tab {
        overflow: hidden;
        border: 1px solid #ccc;
        background-color: #f1f1f1;
        }

        /* Style the buttons inside the tab */
        .tab button {
        background-color: inherit;
        float: left;
        border: none;
        outline: none;
        cursor: pointer;
        padding: 14px 16px;
        transition: 0.3s;
        font-size: 17px;
        }

        /* Change background color of buttons on hover */
        .tab button:hover {
        background-color: #ddd;
        }

        /* Create an active/current tablink class */
        .tab button.active {
        background-color: #ccc;
        }

        /* Style the tab content */
        .tabcontent {
        display: none;
        padding: 6px 12px;
        border: 1px solid #ccc;
        border-top: none;
        }

        .example-5 {
        position: relative;
        }

        .example-5 svg {
        position: absolute;
        }

        .example-5 .line {
        stroke-dasharray: 260;
        stroke-width: 1px;
        fill: transparent;
        stroke: rgba(78, 255, 13, 0.3);
        animation: svgAnimation 2.5s linear infinite;
        }
    `;
  }

  render() {
    return html`
    <html>
        <h2>Evan Dong's eProtfolio</h2>
        <p>Navigate via the buttons inside the tabbed menu:</p>

        <div class="card example-5">
            <svg height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
                <rect
                    rx="8"
                    ry="8"
                    class="line"
                    height="100%"
                    width="100%"
                    stroke-linejoin="round"
                />
            </svg>

            <div class="tab">
            <button class="tablinks" onclick="openCity(event, 'Home')">Home</button>
            <button class="tablinks" onclick="openCity(event, 'Résumé')">Résumé</button>
            <button class="tablinks" onclick="openCity(event, 'Education')">Education</button>
            <button class="tablinks" onclick="openCity(event, 'Supporting Evidence')">Supporting Evidence</button>
            </div>

            <div id="Home" class="tabcontent">
            <h2>Home</h2>
            <p>Hello I'm Evan Dong, a senior at Penn State University Park. I am majoring in Cybersecurity Analytics & Operations
                and created this website myself using VSCode as my IDE and made a repo from GitHub, and am hosting this site on
                Vercel, a website hosting platform. This site is comprised primarly of HTML/CSS and JavaScript. Please view the
                accompanying tabs for additional information of my project work, education, and any other relevant information.
            </p>
            </div>

            <div id="Résumé" class="tabcontent">
            <h2>Résumé</h2>
            <p><h3><b>Evan Dong</b></h3><br>
                (570) 618-9346 | evandong2003@gmail.com | www.linkedin.com/in/evan-dong/<br>
                
                <h3>Education</h3><br>
                The Pennsylvania State University, University Park, PA 
                Bachelor of Science, Cybersecurity Analytics and Operations<br>
                
                Expected Graduation May 2025<br>
                GPA 3.30 
                
                <h3>Skills</h3><br>
                ▪ MySQL<br>
                ▪ JS/CSS/HTML<br>
                ▪ Data Analytics<br>
                ▪ Python<br>
                ▪ Conversational in Chinese<br>
                ▪ Web Security Protocols<br>
                ▪ Microsoft Excel<br>
                ▪ Pen Testing<br>
                ▪ Git/Github<br>
                ▪ Agile<br>
                ▪ Java<br>

                <h3>Project Work Experience</h3><br>
                Team Member, PSU IdeaMakers Challenge - February 2023<br>
                • Worked with 2 other undergraduates on an early-stage business idea where information 
                technology is a core business model component.<br>
                • Our startup business idea was an AI to automatically determine a person's grocery list based on 
                an individual's preferences and use information technology to track store inventory.<br><br>
                
                Team Member, PSU Security and Risk Analysis 111 - April 2023 - May 2023<br>
                • Worked with 4 peers on the Red Hat Robbery Case Study to compile data and analyze 
                similarities between tactics, apparel, and involved suspects in crime scenes.<br><br>
                
                <h3>Experience</h3><br>
                Web Security Intern, Allesgood, Inc. BaseMe - June 2024 - August 2024<br>
                • Performed frontend and backend pen testing for BaseMe services. Worked on and uploaded 
                web security headers and protocol to production code to patch site vulnerabilities.<br>
                • Experience with AWS and worked collaboratively with frontend software engineers and other 
                colleagues.<br><br>
                
                Lifeguard, Pocono Woodland Lakes Property Owners Association - June 2019 - August 2020<br>
                • Diffused discourse and misunderstandings with disgruntled patrons of our community pool 
                helped maintain a safe and stable environment on the pool deck.<br>
                • Conducted routine maintenance and regulation of pool temperatures, chemicals, and 
                equipment.<br><br>
                
                <h3>Student Activities</h3><br>
                Member, PSU Club Swim - September 2021 - May 2024<br>
                • THON, Fundraising, Volunteer<br>
                Member, Competitive Cyber Security Organization (CCSO) - August 2024 - Present<br>
                Member, National Security Club - August 2024 - Present<br>
                Member, Red Cell Analytics Lab - August 2024 - Present<br>
                </p>
            </div>

            <div id="Education" class="Education">
            <h2>Education & Coursework</h2><br>
            <h3>IST 451</h3><br>
            <
            <p>Education is the capital of Japan.</p>
            </div>

            <div id="Supporting Evidence" class="Supporting Evidence">
            <h2>Supporting Evidence</h2>
            <p>Supporting Evidence is the capital of Japan.</p>
            </div>
        </div>

        <script>
        function openCity(evt, cityName) {
        var i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }
        tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
        document.getElementById(cityName).style.display = "block";
        evt.currentTarget.className += " active";
        }
        </script>
        
        </body>
        </html>
    `;
  }

  static get properties() {
    return {
      title: { type: String },
      link: { type: String },
    };
  }
}

globalThis.customElements.define(eProtfolio3.tag, eProtfolio3);
