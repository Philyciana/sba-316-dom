const infoForm = document.getElementById('basic-info');
const labelName = document.createElement('label');
infoForm.appendChild(labelName);
labelName.textContent = "Date of Birth:";

const allLabels = document.querySelectorAll('label');

for ( let i = 0; i < allLabels.length; i++) {
    allLabels[i].style.fontSize = "20px";
}