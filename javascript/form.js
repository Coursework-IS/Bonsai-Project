let popup = document.getElementById('popUpMessage');

const formValidate = (event) => {
    event.preventDefault();
    let name = document.forms['feedbackForm']['name'];
    let email = document.forms['feedbackForm']['email'];
    let message = document.forms['feedbackForm']['message'];
    let checkbox = document.forms['feedbackForm']['checkbox'];
    if(name.value == '' || email.value == '' || message.value == ''){
        alert('None of the fields can be left empty')
        return
    }
    if(checkbox.checked){
        popup.classList.remove('hide')
        name.value = "";
        email.value = "";
        message.value = "";
        
        setTimeout(()=>{
            popup.classList.add('hide')
        },5000)
    }else{
        alert("Agree to send message through email");
    }
}