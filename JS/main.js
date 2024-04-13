let allMainLinks = document.querySelectorAll('.navlinks .mainlinks li a');
let btn = document.querySelector('.btn');
let navlinks = document.querySelector('.navlinks');

btn.addEventListener("click", ()=> {
  btn.classList.contains('change') ? btn.classList.remove("change") : btn.classList.add("change");
  navlinks.classList.toggle("open")
});

allMainLinks.forEach((mainLink) => {
  mainLink.addEventListener("click", function () {
    document.querySelector(".active") ?.classList.remove("active");
    this.classList.add("active");
    navlinks.classList.remove("open");
    btn.classList.remove("change")
  })
})

document.addEventListener("click", (e)=> {
  if (!navlinks.contains(e.target) && !btn.contains(e.target)) {
    navlinks.classList.remove("open");
    btn.classList.remove("change")
  }
})

function reveal() {
  let reveals = document.querySelectorAll(".reveal");
  for(let i = 0; i < reveals.length; i++) {
    let windowheight = window.innerHeight;
    let revealTop = reveals[i].getBoundingClientRect().top;
    let revealPoint = 100;

    if (revealTop < windowheight - revealPoint) {
      reveals[i].classList.add(`showme`);
    }else {
      reveals[i].classList.remove(`showme`);
    }
  }
}
window.addEventListener(`scroll`, reveal);

let year = document.getElementById("year");
let currentYear = new Date().getFullYear();
year.innerHTML = currentYear;