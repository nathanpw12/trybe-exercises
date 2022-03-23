// 1- Criando variaveis:

// header:

let headerContainer = document.getElementById("header-container");

// sections:

// emergency Tasks

let emergencyTasksDiv = document.querySelectorAll(".emergency-tasks div");

let emergencyTasksH3 = document.querySelectorAll(".emergency-tasks h3");

// no emergency tasks

let noEmergencyTasksDiv = document.querySelectorAll(".no-emergency-tasks div");

let noEmergencyTasksH3 = document.querySelectorAll(".no-emergency-tasks h3");

// footer

let footerContainer = document.getElementById("footer-container");

// 2- Estilo:

// header

headerContainer.style.backgroundColor = "#00B069";

// sections

// emergency Tasks

emergencyTasksDiv[0].style.backgroundColor = "#FF9F84";
emergencyTasksDiv[1].style.backgroundColor = "#FF9F84";

emergencyTasksH3[0].style.backgroundColor = "#A500F3";
emergencyTasksH3[1].style.backgroundColor = "#A500F3";

// no emergency tasks

noEmergencyTasksDiv[0].style.backgroundColor = "#F9DB5E";
noEmergencyTasksDiv[1].style.backgroundColor = "#F9DB5E";

noEmergencyTasksH3[0].style.backgroundColor = "#232525";
noEmergencyTasksH3[1].style.backgroundColor = "#232525";

// footer

footerContainer.style.backgroundColor = "#003533";
