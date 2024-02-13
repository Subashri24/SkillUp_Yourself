
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
alert("hello");


  function Register_Form_Validation(){
  var msg;
  var name = document.form.uname.value;
  var perfect_name = /^[A-Za-z]+$/;
    if ((name.match(perfect_name))){
      msg="Perfect";
    }else{
      msg="Enter valid name";
    }
    document.getElementById('mylocation').innerText=msg;
  }

  function Email_Validation(){
    var x=document.form.email.value;   
    
    var atposition=x.indexOf("@");   
    var dotposition=x.lastIndexOf(".");   
    if (atposition<1 || dotposition<atposition+2 || dotposition+2>=x.length){   
    message = "Please enter a valid email address";    
} else{
    message="Perfect";
  
}  
  document.getElementById('MyPlace').innerText=message;
  }
  
function Phnumber_Validation(){
  
  var num=document.form.phnum.value;  
  var phone = /^\d{10}$/;
  if ((num.match(phone))){   
     msg="Perfect";

  }else{   
    msg ="Enter valid phone number";
  }
  document.getElementById("myloc").innerText=msg;   
}   

 function Age_Validation(){
  var age=document.form.age.value;
  if(isNaN(age)||age<1||age>100){
    msg="Enter valid age";
  }
  else{
    msg="Perfect";
  }
  document.getElementById("myage").innerText=msg;  
 }



