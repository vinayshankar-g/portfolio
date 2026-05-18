/* SCROLL ANIMATION */

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {

  sections.forEach((section) => {

    const sectionTop = section.getBoundingClientRect().top;

    if(sectionTop < window.innerHeight - 100){
      section.classList.add("show");
    }

  });

});

/* TYPING EFFECT */

const text = "Backend Developer | Java | Spring Boot";

let index = 0;

function typeEffect(){

  if(index < text.length){

    document.getElementById("typing-text").innerHTML += text.charAt(index);

    index++;

    setTimeout(typeEffect, 80);
  }

}

window.onload = typeEffect;