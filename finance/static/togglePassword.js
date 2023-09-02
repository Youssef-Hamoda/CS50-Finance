function togglePassword(inputIds) {
    for (const inputId of inputIds) {
        const passwordField = document.getElementById(inputId);
        if (passwordField.type === "password") {
            passwordField.type = "text";
        } else {
            passwordField.type = "password";
        }
    }
}