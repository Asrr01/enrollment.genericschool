// ============================================================
//  loginpage.js — Student Login/Register via Supabase
//  Auth: LRN (username) + Birthday MMDDYYYY (password)
// ============================================================

const SUPABASE_URL = 'https://fmwrnjayxjzbohqfbawj.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZtd3JuamF5eGp6Ym9ocWZiYXdqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODE4MzY3MjUsImV4cCI6MjA5NzQxMjcyNX0.n5GAYgAcqDyB8OwHgoSQhoxv8_r1UbGf1qC45TGNn_s';
const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

// ---------- DOM REFS ----------
const lrn                  = document.getElementById('lrn');
const birthMonth           = document.getElementById('birthMonth');
const birthDay             = document.getElementById('birthDay');
const birthYear            = document.getElementById('birthYear');
const birthdayText         = document.getElementById('birthdayText');
const registerBirthdayGroup = document.getElementById('registerBirthdayGroup');
const loginBirthdayGroup   = document.getElementById('loginBirthdayGroup');
const btn                  = document.getElementById('loginBtn');
const loginForm            = document.getElementById('loginForm');
const successModal         = document.getElementById('successModal');
const errorModal           = document.getElementById('errorModal');
const okBtn                = document.getElementById('okBtn');
const errorOkBtn           = document.getElementById('errorOkBtn');
const rememberMe           = document.getElementById('rememberMe');
const pageTitle            = document.getElementById('pageTitle');
const pageSubtitle         = document.getElementById('pageSubtitle');
const toggleText           = document.getElementById('toggleText');
const toggleLink           = document.getElementById('toggleLink');
const modalTitle           = document.getElementById('modalTitle');
const modalMessage         = document.getElementById('modalMessage');
const refNumber            = document.getElementById('refNumber');
const refPassword          = document.getElementById('refPassword');
const errorMessage         = document.getElementById('errorMessage');

// ---------- STATE ----------
let isRegisterMode = true;

// ---------- POPULATE DROPDOWNS ----------
const currentYear = new Date().getFullYear();
const minYear = currentYear - 20;
const maxYear = currentYear - 4;

for (let y = minYear; y <= maxYear; y++) {
    const opt = document.createElement('option');
    opt.value = y;
    opt.textContent = y;
    birthYear.appendChild(opt);
}

for (let d = 1; d <= 31; d++) {
    const opt = document.createElement('option');
    const dayStr = d < 10 ? '0' + d : d;
    opt.value = dayStr;
    opt.textContent = d;
    birthDay.appendChild(opt);
}

// ---------- HELPERS ----------
function formatRegisterBirthday() {
    const m = birthMonth.value;
    const d = birthDay.value;
    const y = birthYear.value;
    if (!m || !d || !y) return '';
    return m + d + y; // MMDDYYYY
}

function formatLoginBirthday() {
    return birthdayText.value.trim();
}

// ---------- LRN RESTRICTION ----------
lrn.addEventListener('input', () => {
    lrn.value = lrn.value.replace(/[^0-9]/g, '');
    validateAll();
});

lrn.addEventListener('paste', (e) => {
    e.preventDefault();
    const paste = (e.clipboardData || window.clipboardData).getData('text');
    const digitsOnly = paste.replace(/[^0-9]/g, '');
    const start = lrn.selectionStart;
    const end   = lrn.selectionEnd;
    const current = lrn.value;
    lrn.value = (current.slice(0, start) + digitsOnly + current.slice(end)).slice(0, 12);
    validateAll();
});

// ---------- BIRTHDAY TEXT INPUT RESTRICTION ----------
birthdayText.addEventListener('keydown', (e) => {
    const allowed = ['Backspace', 'Delete', 'ArrowLeft', 'ArrowRight', 'Tab', 'Enter', 'Home', 'End'];
    if (allowed.includes(e.key)) return;
    if (e.ctrlKey || e.metaKey) return;
    if (!/^[0-9]$/.test(e.key)) e.preventDefault();
});

birthdayText.addEventListener('input', () => {
    birthdayText.value = birthdayText.value.replace(/[^0-9]/g, '');
    validateAll();
});

birthdayText.addEventListener('paste', (e) => {
    e.preventDefault();
    const paste = (e.clipboardData || window.clipboardData).getData('text');
    const digitsOnly = paste.replace(/[^0-9]/g, '');
    const start = birthdayText.selectionStart;
    const end   = birthdayText.selectionEnd;
    const current = birthdayText.value;
    birthdayText.value = (current.slice(0, start) + digitsOnly + current.slice(end)).slice(0, 8);
    validateAll();
});

// ---------- DROPDOWN DAYS UPDATE ----------
function updateDays() {
    const month = parseInt(birthMonth.value);
    const year  = parseInt(birthYear.value);
    if (!month || !year) return;

    const daysInMonth = new Date(year, month, 0).getDate();
    const currentDay  = parseInt(birthDay.value);

    while (birthDay.options.length > 1) birthDay.remove(1);

    for (let d = 1; d <= daysInMonth; d++) {
        const opt    = document.createElement('option');
        const dayStr = d < 10 ? '0' + d : d;
        opt.value = dayStr;
        opt.textContent = d;
        birthDay.appendChild(opt);
    }

    if (currentDay && currentDay <= daysInMonth) {
        birthDay.value = currentDay < 10 ? '0' + currentDay : currentDay;
    }
}

// ---------- VALIDATION ----------
function validateAll() {
    const lrnValid = /^[0-9]{12}$/.test(lrn.value);

    if (isRegisterMode) {
        const monthValid = birthMonth.value !== '';
        const dayValid   = birthDay.value   !== '';
        const yearValid  = birthYear.value  !== '';

        [birthMonth, birthDay, birthYear].forEach(sel => {
            if (sel.value) sel.classList.add('valid');
            else sel.classList.remove('valid');
        });

        btn.disabled = !(lrnValid && monthValid && dayValid && yearValid);
        btn.classList.toggle('active', !btn.disabled);
    } else {
        const bdayValid = /^\d{8}$/.test(birthdayText.value.trim());
        btn.disabled = !(lrnValid && bdayValid);
        btn.classList.toggle('active', !btn.disabled);
    }
}

// ---------- MODE TOGGLE ----------
function setMode(register) {
    isRegisterMode = register;

    if (register) {
        pageTitle.textContent    = 'WELCOME';
        pageSubtitle.textContent = 'Create your account to get started';
        btn.textContent          = 'REGISTER';
        toggleText.textContent   = 'Already have an account?';
        toggleLink.textContent   = 'Log in';
        registerBirthdayGroup.classList.remove('hidden');
        loginBirthdayGroup.classList.add('hidden');
    } else {
        pageTitle.textContent    = 'WELCOME BACK';
        pageSubtitle.textContent = 'Please log in to access your enrollment status';
        btn.textContent          = 'LOG IN';
        toggleText.textContent   = 'New student?';
        toggleLink.textContent   = 'Create account';
        registerBirthdayGroup.classList.add('hidden');
        loginBirthdayGroup.classList.remove('hidden');
    }

    validateAll();
}

toggleLink.addEventListener('click', (e) => {
    e.preventDefault();
    setMode(!isRegisterMode);
});

// ---------- REMEMBER ME ----------
function loadRemembered() {
    const remembered = localStorage.getItem('rememberedLRN');
    if (remembered) {
        lrn.value = remembered;
        rememberMe.checked = true;
        validateAll();
    }
}

function saveRemembered() {
    if (rememberMe.checked) {
        localStorage.setItem('rememberedLRN', lrn.value);
    } else {
        localStorage.removeItem('rememberedLRN');
    }
}

// ---------- BUTTON CLICK (Supabase) ----------
btn.addEventListener('click', async () => {
    const lrnVal = lrn.value.trim();
    const bday   = isRegisterMode ? formatRegisterBirthday() : formatLoginBirthday();

    btn.disabled = true;
    const origText = btn.textContent;
    btn.textContent = isRegisterMode ? 'REGISTERING...' : 'LOGGING IN...';

    try {
        if (isRegisterMode) {
            // Check LRN exists in the students table first
            const { data: studentData, error: lookupErr } = await supabaseClient
                .from('students')
                .select('student_id, lrn')
                .eq('lrn', lrnVal)
                .limit(1)
                .single();

            if (lookupErr || !studentData) {
                throw new Error('No enrollment record found for this LRN. Please complete the enrollment form first.');
            }

            // Register: sign up using LRN@school.edu as email, birthday as password
            const { error: signUpErr } = await supabaseClient.auth.signUp({
                email:    lrnVal + '@school.edu',
                password: bday,
                options: { data: { lrn: lrnVal } }
            });

            if (signUpErr) {
                if (signUpErr.message.includes('already registered')) {
                    throw new Error('An account with this LRN already exists. Please log in instead.');
                }
                throw signUpErr;
            }

            saveRemembered();
            modalTitle.textContent   = 'Account Created';
            modalMessage.textContent = 'Your account has been created. Use these credentials to log in:';
            refNumber.textContent    = lrnVal;
            refPassword.textContent  = bday;
            loginForm.style.display  = 'none';
            if (document.querySelector('.welcome-text')) document.querySelector('.welcome-text').style.display = 'none';
            successModal.classList.add('active');

        } else {
            // Login
            const { data, error: signInErr } = await supabaseClient.auth.signInWithPassword({
                email:    lrnVal + '@school.edu',
                password: bday
            });

            if (signInErr) {
                if (signInErr.message.includes('Invalid login')) {
                    throw new Error('Incorrect LRN or birthday password. Your password is your birthday in MMDDYYYY format.');
                }
                throw signInErr;
            }

            saveRemembered();
            // Redirect to progress page with LRN
            window.location.href = 'progress.html?lrn=' + lrnVal;
        }

    } catch (err) {
        errorMessage.textContent = err.message;
        errorModal.classList.add('active');
        btn.textContent = origText;
        btn.disabled = false;
        validateAll();
    }
});

// ---------- MODAL CLOSE ----------
function resetForm() {
    successModal.classList.remove('active');
    errorModal.classList.remove('active');
    loginForm.style.display = 'block';
    if (document.querySelector('.welcome-text')) document.querySelector('.welcome-text').style.display = 'block';
    birthdayText.value = '';
    birthMonth.value   = '';
    birthDay.value     = '';
    birthYear.value    = '';
    [birthMonth, birthDay, birthYear].forEach(sel => sel.classList.remove('valid'));
    rememberMe.checked = false;
    loadRemembered();
    validateAll();
}

okBtn.addEventListener('click', () => {
    resetForm();
    if (isRegisterMode) setMode(false);
});

errorOkBtn.addEventListener('click', () => {
    errorModal.classList.remove('active');
});

// ---------- EVENT LISTENERS ----------
birthMonth.addEventListener('change', () => { updateDays(); validateAll(); });
birthDay.addEventListener('change', validateAll);
birthYear.addEventListener('change', () => { updateDays(); validateAll(); });

// ---------- INIT ----------
loadRemembered();