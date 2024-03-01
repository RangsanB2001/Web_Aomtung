function validatePhoneNumber(input) {
    var pattern = /^\d{10}$/;
    if (input.value.match(pattern)) {
        return true;
    } else {
        return false;
    }
}

function Phonenumber() {

    var input = document.getElementById('phoneInput');
    var callback = null;

    function init(completeCallback) {
        callback = completeCallback;
        registerEvents(input);
    }

    function registerEvents(element) {
        element.addEventListener("input", function (ev) {
            onInput(ev);
        });
    }

    function onInput(ev) {
        var input = document.getElementById('phoneInput');
        var btnSummit = document.getElementById('btn-summit-phone');

        btnSummit.disabled = true;

        var value = ev.data || ev.target.value;
        if (!isDigit(value)) {
            input.value = "";
        } else if (input.value.length >= 10) {
            input.value = input.value.substring(0, 10);
            document.getElementById("ErrorMessage").innerText = "";
        } else if (input.value.length < 10) {
            document.getElementById("ErrorMessage").innerText = "กรุณากรอกหมายเลขโทรศัพท์ 10 ตัวเลข";
        }

        if (input.value.length === 10) {
            callback(input.value);
            btnSummit.disabled = false;
        }
    }

    function isDigit(d) {
        return d >= "0" && d <= "9";
    }

    return {
        init: init
    };
}

document.addEventListener("DOMContentLoaded", function () {

    var phoneInput = document.getElementById("phoneInput");
    var NumberModule = Phonenumber("input-phone");
    phoneInput.addEventListener("input", function () {
        validatePhoneNumber(this);
    });
    NumberModule.init(function () { });
});
