import {icons} from "../data/icons.js"

const skillsElement = document.querySelector(".skills-container");

let html = '';
icons.forEach(skill => {
  html += `
    <div class="skill-div" id="${skill.fileName}">
      <img src="${skill.link}" class="skill-img">
    </div>
  `;
});
skillsElement.innerHTML = html;

icons.forEach((skill, index) => {
  const element = document.getElementById(skill.fileName);

  element.addEventListener('click', event => {
    const el = event.currentTarget;
    el.classList.toggle("selected"); 
    icons[index].isSelected = !icons[index].isSelected;
  });
});