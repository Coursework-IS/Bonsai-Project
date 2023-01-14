// getting navgation from the html 
const navbar = document.getElementById('navigation');
const arrowTop = document.querySelector('.arrowTop');

document.addEventListener('scroll',function () {
    // if the scroll length along y-axis is greater than 250px then only navbar is set to fixed.
    if(window.scrollY > 250){
        navbar.classList.add('fixNavbar');
        navbar.classList.remove('pageSpacing')
    }
    else{
        navbar.classList.remove('fixNavbar');
        navbar.classList.add('pageSpacing')
    }

    if(window.scrollY > 600){
        arrowTop.classList.remove('hidden');
    }else{
        arrowTop.classList.add('hidden');
    }
})


