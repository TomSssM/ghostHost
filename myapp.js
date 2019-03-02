let slideIndex = 0;
const slides = document.getElementsByClassName("slide");
const dots = document.getElementsByClassName("dot");
const MyP = document.getElementById("specialP");
showSlides(slideIndex);

function showSlides(n) {
  slideIndex = n;
  for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }

  switch(n) {
      case 0:
        MyP.innerHTML = "John Doe";
        break;
      case 1:
        MyP.innerHTML = "Johny Doe";
        break;
      case 2:
        MyP.innerHTML = "Johnathan Doe";
        break;
      default:
        throw new Error("Website has been wrecked");
  }
  
  slides[slideIndex].style.display = "block"; 
  dots[slideIndex].className += " active";
}