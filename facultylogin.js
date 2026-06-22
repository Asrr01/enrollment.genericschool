// Navigation Logic
function showPage(pageId) {
    // Hide all pages
    document.getElementById('home-page').classList.add('hidden');
    document.getElementById('form-page').classList.add('hidden');
    document.getElementById('progress-page').classList.add('hidden');

    // Show selected page
    document.getElementById(pageId + '-page').classList.remove('hidden');

    // Reset progress if leaving progress page
    if (pageId !== 'progress') {
        resetProgress();
    }

    // Scroll to top
    window.scrollTo(0, 0);
}

// Validation: Only allow letters, spaces, hyphens, and apostrophes for names
function validateName(input, errorId) {
    const errorSpan = document.getElementById(errorId);
    const value = input.value;

    // Pattern: letters, spaces, hyphens, apostrophes only
    const validPattern = /^[a-zA-Z\s\-'']*$/;

    if (value === '') {
        input.classList.remove('error-border', 'valid-border');
        errorSpan.textContent = '';
        return true;
    }

    if (!validPattern.test(value)) {
        input.classList.add('error-border');
        input.classList.remove('valid-border');
        errorSpan.textContent = 'Only letters, spaces, hyphens, and apostrophes are allowed.';
        return false;
    }

    // Check for consecutive spaces or starting/ending with space/hyphen
    if (/^\s|\s$|^[-]|[-]$/.test(value)) {
        input.classList.add('error-border');
        input.classList.remove('valid-border');
        errorSpan.textContent = 'Cannot start or end with spaces or hyphens.';
        return false;
    }

    // Check for consecutive special characters
    if (/[-]{2,}|\s{2,}|['']{2,}/.test(value)) {
        input.classList.add('error-border');
        input.classList.remove('valid-border');
        errorSpan.textContent = 'Cannot have consecutive special characters or spaces.';
        return false;
    }

    input.classList.remove('error-border');
    input.classList.add('valid-border');
    errorSpan.textContent = '';
    return true;
}

// Validation: LRN - only numbers allowed
function validateLRN(input) {
    const errorSpan = document.getElementById('lrn-error');
    const value = input.value;

    // Pattern: only digits
    const validPattern = /^[0-9]*$/;

    if (value === '') {
        input.classList.remove('error-border', 'valid-border');
        errorSpan.textContent = '';
        return true;
    }

    if (!validPattern.test(value)) {
        input.classList.add('error-border');
        input.classList.remove('valid-border');
        errorSpan.textContent = 'LRN must contain only numbers (0-9).';
        return false;
    }

    // LRN should be 12 digits (standard Philippine LRN length)
    if (value.length > 0 && value.length !== 12) {
        input.classList.add('error-border');
        input.classList.remove('valid-border');
        errorSpan.textContent = 'LRN must be exactly 12 digits.';
        return false;
    }

    input.classList.remove('error-border');
    input.classList.add('valid-border');
    errorSpan.textContent = '';
    return true;
}

// Toggle SF9 visibility based on student status
function toggleSF9() {
    const statusSelect = document.getElementById('status');
    const sf9Group = document.getElementById('sf9-group');
    const sf9Input = document.getElementById('sf9');

    if (statusSelect.value === 'Transferee') {
        sf9Group.classList.remove('hidden');
        sf9Input.setAttribute('required', 'required');
    } else {
        sf9Group.classList.add('hidden');
        sf9Input.removeAttribute('required');
        // Clear the file input when hidden
        sf9Input.value = '';
        document.getElementById('sf9Name').textContent = 'Format: LastNameFirstName_SF9';
        document.getElementById('sf9Name').style.color = '#666';
        document.getElementById('sf9Name').style.fontWeight = 'normal';
    }
}

// File Upload Display
function updateFileName(input, displayId) {
    const display = document.getElementById(displayId);
    if (input.files && input.files[0]) {
        display.textContent = "Selected: " + input.files[0].name;
        display.style.color = "#2c4a7c";
        display.style.fontWeight = "bold";
    }
}

// Validate all fields before submission
function validateAllFields() {
    const firstName = document.getElementById('firstName');
    const middleName = document.getElementById('middleName');
    const lastName = document.getElementById('lastName');
    const lrn = document.getElementById('lrn');

    let isValid = true;

    // Validate names
    if (!validateName(firstName, 'firstName-error')) isValid = false;
    if (!validateName(middleName, 'middleName-error')) isValid = false;
    if (!validateName(lastName, 'lastName-error')) isValid = false;

    // Validate LRN
    if (!validateLRN(lrn)) isValid = false;

    // Check if LRN is empty
    if (lrn.value.trim() === '') {
        lrn.classList.add('error-border');
        document.getElementById('lrn-error').textContent = 'LRN is required.';
        isValid = false;
    }

    return isValid;
}

// Form Submission
function handleSubmit(e) {
    e.preventDefault();

    // Run custom validation
    if (!validateAllFields()) {
        return;
    }

    // Basic HTML5 Validation
    const form = document.getElementById('enrollmentForm');
    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }

    // Switch to progress page
    showPage('progress');

    // Start Simulation
    simulateSubmission();
}

function simulateSubmission() {
    const progressFill = document.getElementById('progressFill');
    const statusText = document.getElementById('statusText');
    const progressTitle = document.getElementById('progressTitle');
    const successIcon = document.getElementById('successIcon');
    const redirectText = document.getElementById('redirectText');
    const homeBtn = document.getElementById('homeBtn');

    let progress = 0;

    const interval = setInterval(() => {
        progress += Math.random() * 15;
        if (progress > 100) progress = 100;

        progressFill.style.width = progress + '%';

        // Update text based on progress
        if (progress < 30) {
            statusText.textContent = "Uploading documents...";
        } else if (progress < 70) {
            statusText.textContent = "Verifying student information...";
        } else if (progress < 100) {
            statusText.textContent = "Finalizing enrollment...";
        } else {
            clearInterval(interval);
            // Show Success
            statusText.textContent = "Enrollment Submitted Successfully!";
            progressTitle.textContent = "Application Received";
            successIcon.style.display = "block";
            redirectText.textContent = "Please wait for an email regarding your physical document verification schedule.";
            homeBtn.classList.remove('hidden');
            progressFill.style.backgroundColor = "#10b981"; // Green
        }
    }, 500);
}

function resetProgress() {
    document.getElementById('progressFill').style.width = '0%';
    document.getElementById('progressFill').style.backgroundColor = '#2c4a7c';
    document.getElementById('successIcon').style.display = 'none';
    document.getElementById('homeBtn').classList.add('hidden');
    document.getElementById('progressTitle').textContent = 'Submitting Application...';
    document.getElementById('statusText').textContent = 'Uploading documents...';
    document.getElementById('redirectText').textContent = 'Please do not close this window.';
}