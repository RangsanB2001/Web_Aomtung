function initializePhoneNumberValidation(inputId, errorMessageId, btnSummitId, completeCallback) {
    var input = document.getElementById(inputId);
    var errorMessage = document.getElementById(errorMessageId);
    var btnSummit = document.getElementById(btnSummitId);

    function init() {
        registerEvents();
    }

    function registerEvents() {
        input.addEventListener("input", onInput);
    }

    function onInput(ev) {
        var value = ev.data || ev.target.value;
        if (!isDigit(value)) {
            input.value = "";
        } else if (input.value.length >= 10) {
            input.value = input.value.substring(0, 10);
            errorMessage.innerText = "";
        } else if (input.value.length < 10) {
            errorMessage.innerText = "กรุณากรอกหมายเลขโทรศัพท์ 10 ตัวเลข";
        }

        if (input.value.length === 10) {
            if (validatePhoneNumber(input)) {
                errorMessage.innerText = "";
                btnSummit.disabled = false;
                completeCallback(input.value);
            } else {
                errorMessage.innerText = "รูปแบบหมายเลขโทรศัพท์ไม่ถูกต้อง";
                btnSummit.disabled = true;
            }
        } else {
            btnSummit.disabled = true;
        }
    }

    function validatePhoneNumber(input) {
        var pattern = /^\d{10}$/;
        return pattern.test(input.value);
    }

    function isDigit(d) {
        return d >= "0" && d <= "9";
    }

    return {
        init: init
    };
}

