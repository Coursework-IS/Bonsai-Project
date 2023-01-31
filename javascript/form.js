let popup = document.getElementById('popUpMessage');

const formValidate = (event) => {
    event.preventDefault();
    let name = document.forms['feedbackForm']['name'].value;
    let email = document.forms['feedbackForm']['email'].value;
    let message = document.forms['feedbackForm']['message'].value;
    let checkbox = document.forms['feedbackForm']['checkbox'].checked;
    if(name == '' || email == '' || message == ''){
        alert('None of the fields can be left empty')
        return
    }
    if(checkbox){
        popup.classList.remove('hide')
        setTimeout(()=>{
            popup.classList.add('hide')
        },2000)
    }else{
        alert("Agree to send message through email");
    }
}