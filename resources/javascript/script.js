function openNav(){document.getElementById("mySidepanel").style.width="250px"}
function closeNav(){document.getElementById("mySidepanel").style.width="0"}
var coll=document.getElementsByClassName("collapsible");var i;for(i=0;i<coll.length;i++){coll[i].addEventListener("click",function(){this.classList.toggle("active");var content=this.nextElementSibling;if(content.style.maxHeight){content.style.maxHeight=null}else{content.style.maxHeight=content.scrollHeight+"px"}})}
var slideIndex=1;showSlides(slideIndex);function plusSlides(n){showSlides(slideIndex+=n)}
function currentSlide(n){showSlides(slideIndex=n)}
function showSlides(n){var i;var slides=document.getElementsByClassName("mySlides");var dots=document.getElementsByClassName("dot");if(n>slides.length){slideIndex=1}
if(n<1){slideIndex=slides.length}
for(i=0;i<slides.length;i++){slides[i].style.display="none"}
for(i=0;i<dots.length;i++){dots[i].className=dots[i].className.replace(" active","")}
slides[slideIndex-1].style.display="block";dots[slideIndex-1].className+=" active"}