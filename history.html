// ============================================================
//  facultylogin.js — Faculty Login via Supabase
//  Auth: Email + Password (against Supabase Auth / staff_profiles)
// ============================================================

const form     = document.getElementById("facultyLoginForm");
const email    = document.getElementById("email");
const password = document.getElementById("password");
const btn      = document.getElementById("loginBtn");
const authError = document.getElementById("authError");

const SUPABASE_URL = 'https://fmwrnjayxjzbohqfbawj.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZtd3JuamF5eGp6Ym9ocWZiYXdqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODE4MzY3MjUsImV4cCI6MjA5NzQxMjcyNX0.n5GAYgAcqDyB8OwHgoSQhoxv8_r1UbGf1qC45TGNn_s';
const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const emailVal = email.value.trim();
    const passVal  = password.value.trim();

    authError.textContent = "";

    if (!emailVal || !passVal) {
        authError.textContent = "Please enter both email and password.";
        return;
    }

    const originalText = btn.textContent;
    btn.disabled = true;
    btn.textContent = "Signing In...";

    const { data, error } = await supabaseClient.auth.signInWithPassword({
        email: emailVal,
        password: passVal
    });

    if (error) {
        authError.textContent = error.message;
        password.value = "";
        btn.disabled = false;
        btn.textContent = originalText;
        return;
    }

    // Successful login — same destination as the admin portal
    window.location.href = "admin_page.html";
});
