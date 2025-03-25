function updatePreview() {
    document.getElementById("previewName").textContent = document.getElementById("name").value || "Your Name";
    document.getElementById("previewEmail").textContent = document.getElementById("email").value || "your.email@example.com";
    document.getElementById("previewPhone").textContent = document.getElementById("phone").value || "123-456-7890";
    document.getElementById("previewSkills").textContent = document.getElementById("skills").value || "Your skills here";
    document.getElementById("previewExperience").textContent = document.getElementById("experience").value || "Your work experience";
    document.getElementById("previewEducation").textContent = document.getElementById("education").value || "Your education details";
   
}

function generatePDF() {
    const resume = document.getElementById("resumePreview");

    html2pdf(resume, {
        margin: 10,
        filename: 'My_Resume.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    });
}


function changeTemplate() {
    const resume = document.getElementById("resumePreview");
    const selectedTemplate = document.getElementById("template").value;

    resume.classList.remove("template1", "template2", "template3");

    resume.classList.add(selectedTemplate);
}


document.getElementById("projects").addEventListener("input", function() {
    document.getElementById("preview-projects").innerText = this.value;
});

document.getElementById("projectDescription").addEventListener("input", function() {
    document.getElementById("preview-projectDescription").innerText = this.value;
});

document.getElementById("projectSkills").addEventListener("input", function() {
    document.getElementById("preview-projectSkills").innerText = this.value;
});
