const email = document.getElementById('email');

// const setEmail = (event) => {
//     email.value = event.target.value;
//     console.log(email["value"]);
// }
// console.log(email["value"] + "b");

const submitEmail = () => {
    const userEmail = email["value"];
    if (userEmail == '') {
        alert('Please enter email address.')
        return
    }
    const emailSplit = userEmail.split("@");
    if (emailSplit.length > 1 && emailSplit[1].length > 0) {
        alert("Sign up successful!")
    } else {
        alert("Enter valid email address")
    }

}