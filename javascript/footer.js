const email = document.getElementById('email');


const submitEmail = () => {
    const userEmail = email["value"];
    if (userEmail == '') {
        alert('Please enter email address.')
        return
    }
    // splits the entered text at @ and gives array of two strings
    const emailSplit = userEmail.split("@");
    if (emailSplit.length > 1 && emailSplit[1].length > 0) {
        alert("Sign up successful!")
    } else {
        alert("Enter valid email address")
    }

}