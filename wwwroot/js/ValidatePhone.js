function validatePhoneNumber(input) {
    var pattern = /^\d{10}$/;
    if (input.value.match(pattern)) {
        document.getElementById("ErrorMessage").innerText = "";
        return true;
    } else {
        document.getElementById("ErrorMessage").innerText = "กรุณากรอกหมายเลขโทรศัพท์ 10 ตัวเลข";
        return false;
    }
}

document.addEventListener("DOMContentLoaded", function () {
    var phoneInput = document.getElementById("phoneInput");
    phoneInput.addEventListener("input", function () {
        validatePhoneNumber(this);
    });
});