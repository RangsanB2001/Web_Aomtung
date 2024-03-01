async function showAlert(title, message, icon, confirmText, cancelText, redirectCon, redirectCan) {
    await Swal.fire({
        title: title,
        text: message,
        icon: icon,
        confirmButtonText: confirmText,
        cancelButtonText: cancelText,
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
    }).then((result) => {
        if (result.isConfirmed) {
            window.location.replace(redirectCon);
        } else if (result.dismiss === Swal.DismissReason.cancel) {
            window.location.replace(redirectCan);
        }
    });
}

async function showAlertOTP(title, message, icon, confirmText, cancelText) {
    await Swal.fire({
        title: title,
        text: message,
        icon: icon,
        confirmButtonText: confirmText,
        cancelButtonText: cancelText,
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
    });
}


