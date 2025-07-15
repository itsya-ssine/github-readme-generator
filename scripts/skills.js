import {icons} from "../data/icons.js"

const skillsElement = document.querySelector(".skills-container");

icons.forEach(skill => {
    skillsElement.innerHTML += `
        <div class="skill-div">
            <img src="icons/${skill.fileName}" class="skill-img">
            <p class="skill-txt">${skill.fileName.slice(0, -4)}</p>
        </div>
    `;
});