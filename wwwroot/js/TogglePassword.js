function togglePasswordVisibility(toggleId, passwordId) {
    var togglePassword = document.getElementById(toggleId);
    var passInput = document.getElementById(passwordId);
    var eyeIcon = togglePassword.querySelector('i');

    togglePassword.addEventListener("click", function () {
        if (passInput.type === "password") {
            passInput.type = "text";
            eyeIcon.classList.remove("bi-eye-slash");
            eyeIcon.classList.add("bi-eye");
        } else {
            passInput.type = "password";
            eyeIcon.classList.remove("bi-eye");
            eyeIcon.classList.add("bi-eye-slash");
        }
    });
}

function checkPasswords() {
    var firstpassword = document.getElementById("firstpassword").value;
    var confirmpassword = document.getElementById("confirmpassword").value;
    var passErrorMessage = document.getElementById("PassErrorMessage");
    var passConErrorMessage = document.getElementById("PassConErrorMessage");
    var submitButton = document.getElementById("btn-summit-pass");

    if (firstpassword === confirmpassword) {
        passConErrorMessage.innerHTML = "";
        submitButton.disabled = false;
    } else {
        passConErrorMessage.innerHTML = "กรุณากรอกรหัสผ่านให้ตรงกัน";
        submitButton.disabled = true;
    }
}
