// getting navgation from the html
const navbar = document.getElementById("navigation");
const arrowTop = document.querySelector(".arrowTop");

document.addEventListener("scroll", function () {
  // if the scroll length along y-axis is greater than 250px then only navbar is set to fixed.
  if (window.scrollY > 110) {
    navbar.classList.add("navBackground");
  } else {
    navbar.classList.remove("navBackground");
  }

  if (window.scrollY > 600) {
    arrowTop.classList.remove("hidden");
  } else {
    arrowTop.classList.add("hidden");
  }
});
