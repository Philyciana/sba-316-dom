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
const cvInput = document.createElement('input');
cvInput.setAttribute('type', 'file');
cvInput.setAttribute('id', 'userCV');
resumeInput.setAttribute('type', 'file');
resumeInput.setAttribute('id', 'userResume');
const resumeLabel = document.getElementById('resumelabel');
jobForm.insertBefore(cvInput, cvLabel.nextSibling)
jobForm.insertBefore(resumeInput, resumeLabel.nextSibling);

function resumeFileAdded(){
    if (resumeInput.files.length > 0 ) {
        resumeLabel.textContent = "A file has been uploaded as your resume!"
        resumeLabel.style.color = 'red';}}

resumeInput.addEventListener("change", resumeFileAdded);

function cvFileAdded(){
    if (cvInput.files.length > 0 ) {
        cvLabel.textContent = "A file has been uploaded as your cover letter!"
        cvLabel.style.color = 'green';}};
cvInput.addEventListener("change", cvFileAdded);

const newLine = document.createElement('br');
jobForm.insertBefore(newLine, cvInput.nextSibling);

const appSubmitButton = document.getElementById('submit-button')

function thankApplicant (){
    const frag = document.createDocumentFragment();
    const thankingHeader = frag.appendChild(document.createElement("h3"));
    thankingHeader.textContent = "Thank you for applying to Target!";
    frag.appendChild(thankingHeader);
    
    const thankingpara = frag.appendChild(document.createElement("p"));
    thankingpara.textContent = "We will get back to you about your application shortly";
    frag.appendChild(thankingpara);
    document.body.appendChild(frag);
}
appSubmitButton.addEventListener("click", thankApplicant);