function initOtpTimer(expiration) {
    const expirationTime = expiration * 1000;
    const resetLink = document.getElementById("reset-otp");
    const expiredLink = document.getElementById("expired-otp");

    function updateCountdown() {
        const remainingMillis = Math.max(0, expirationTime - Date.now());
        if (remainingMillis > 0) {
            resetLink.classList.remove("hidden");
            expiredLink.classList.add("hidden");
            setTimeout(updateCountdown, 1000);
        } else {
            resetLink.classList.add("hidden");
            expiredLink.classList.remove("hidden");
        }
    }

    updateCountdown();
}
