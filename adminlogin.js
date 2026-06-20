const username = document.getElementById("username");
const password = document.getElementById("password");
const btn = document.getElementById("loginBtn");
const errorModal = document.getElementById("errorModal");
const errorMessage = document.getElementById("errorMessage");
const errorOkBtn = document.getElementById("errorOkBtn");
const rememberMe = document.getElementById("rememberMe");

const SUPABASE_URL = 'https://fmwrnjayxjzbohqfbawj.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZtd3JuamF5eGp6Ym9ocWZiYXdqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODE4MzY3MjUsImV4cCI6MjA5NzQxMjcyNX0.n5GAYgAcqDyB8OwHgoSQhoxv8_r1UbGf1qC45TGNn_s';
const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

function validateAll() {
    const userValid = username.value.trim().length > 0;
    const passValid = password.value.trim().length > 0;

    if (userValid && passValid) {
        btn.disabled = false;
        btn.classList.add("active");
    } else {
        btn.disabled = true;
        btn.classList.remove("active");
    }
}

username.addEventListener("keyup", validateAll);
password.addEventListener("keyup", validateAll);

password.addEventListener("keypress", (e) => {
    if (e.key === "Enter" && !btn.disabled) {
        btn.click();
    }
});

btn.addEventListener("click", async () => {
    const user = username.value.trim();
    const pass = password.value.trim();

    btn.textContent = "LOGGING IN...";
    btn.disabled = true;

    // We assume the user inputs their email in the username field
    const { data, error } = await supabaseClient.auth.signInWithPassword({
        email: user,
        password: pass
    });

    if (error) {
        errorMessage.textContent = error.message;
        errorModal.classList.add("active");
        password.value = "";
        btn.textContent = "LOG IN";
        validateAll();
    } else {
        if (rememberMe.checked) {
            localStorage.setItem("adminRemember", user);
        } else {
            localStorage.removeItem("adminRemember");
        }
        window.location.href = "admin_page.html";
    }
});

errorOkBtn.addEventListener("click", () => {
    errorModal.classList.remove("active");
});

window.addEventListener("DOMContentLoaded", () => {
    const remembered = localStorage.getItem("adminRemember");
    if (remembered) {
        username.value = remembered;
        rememberMe.checked = true;
        validateAll();
    }
});