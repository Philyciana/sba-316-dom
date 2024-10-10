const infoForm = document.getElementById('basic-info');
const labelName = document.createElement('label');
const dobInput = document.getElementById('date')
infoForm.insertBefore(labelName, dobInput)
labelName.textContent = "Date of Birth:";

const allLabels = document.querySelectorAll('label');

for ( let i = 0; i < allLabels.length; i++) {
    allLabels[i].style.fontSize = "20px";
}

const jobForm = document.getElementById('job-info');
const cvLabel = document.getElementById('coverletter')
const resumeInput = document.createElement('input');
resumeInput.setAttribute('type', 'file');
resumeInput.setAttribute('id', 'userResume');
const resumeLabel = document.getElementById('resumelabel')
jobForm.insertBefore(resumeInput, resumeLabel.nextSibling);

resumeInput.addEventListener("change", function(){
    if (resumeInput.files.length > 0 ) {
        resumeLabel.textContent = "A file has been uploaded as your resume!"
        resumeLabel.style.color = 'red';}});
