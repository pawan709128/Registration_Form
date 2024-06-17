function validateform() {
    let name = document.getElementById('name').value;
    let father_name = document.getElementById('father_name').value;
    let mobile = document.getElementById('mobile').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let confirm_password = document.getElementById('confirm_password').value;

    // Reset error messages
    document.getElementById('name_error').innerHTML = '';
    document.getElementById('father_name_error').innerHTML = '';
    document.getElementById('mobile_error').innerHTML = '';
    document.getElementById('email_error').innerHTML = '';
    document.getElementById('password_error').innerHTML = '';
    document.getElementById('confirm_password_error').innerHTML = '';

    let isValid = true;

    if (name.trim() == '') {
        document.getElementById('name_error').innerHTML = '<i class="fa-solid fa-circle-exclamation"></i> Please enter your Name';
        isValid = false;
    }
    if (father_name.trim() == '') {
        document.getElementById('father_name_error').innerHTML = '<i class="fa-solid fa-circle-exclamation"></i> Please enter your Father\'s Name';
        isValid = false;
    }
    if (mobile.trim() == '') {
        document.getElementById('mobile_error').innerHTML = '<i class="fa-solid fa-circle-exclamation"></i> Please enter your Mobile';
        isValid = false;
    } else if (!/^\d{10}$/.test(mobile)) {
        document.getElementById('mobile_error').innerHTML = '<i class="fa-solid fa-circle-exclamation"></i> Please enter a valid 10-digit Mobile number';
        isValid = false;
    }
    if (email.trim() == '') {
        document.getElementById('email_error').innerHTML = '<i class="fa-solid fa-circle-exclamation"></i> Please enter your Email';
        isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
        document.getElementById('email_error').innerHTML = '<i class="fa-solid fa-circle-exclamation"></i> Please enter a valid Email address';
        isValid = false;
    }
    if (password.trim() == '') {
        document.getElementById('password_error').innerHTML = '<i class="fa-solid fa-circle-exclamation"></i> Please enter your Password';
        isValid = false;
    }
    if (confirm_password == '') {
        document.getElementById('confirm_password_error').innerHTML = '<i class="fa-solid fa-circle-exclamation"></i> Please enter your Confirm Password';
        isValid = false;
    } else if (password !== confirm_password) {
        document.getElementById('confirm_password_error').innerHTML = '<i class="fa-solid fa-circle-exclamation"></i> Password and Confirm Password do not match';
        isValid = false;
    }

    if (isValid) {
        Swal.fire({
            icon: 'success',
            title: 'Form Submitted Successfully',
            showConfirmButton: false,
            timer: 1500
        });
        // Clear the form fields
        document.getElementById('name').value = '';
        document.getElementById('father_name').value = '';
        document.getElementById('mobile').value = '';
        document.getElementById('email').value = '';
        document.getElementById('password').value = '';
        document.getElementById('confirm_password').value = '';
    }
}
