
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

  function Name_Validation(){
  var msg;
  var name = document.form.uname.value;
  var perfect_name = /^[A-Za-z]+$/;
    if ((name.match(perfect_name))){
      msg="   Perfect  ";
      $("span#myname").removeClass("bad");
     $("span#myname").addClass("good");
    }else{
      msg="Enter valid name";
      $("span#myname").addClass("bad");
    }
    document.getElementById('myname').innerText=msg;
  }

  function Email_Validation(){
    var x=document.form.email.value;   
    
    var atposition=x.indexOf("@");   
    var dotposition=x.lastIndexOf(".");   
    if (atposition<1 || dotposition<atposition+2 || dotposition+2>=x.length){   
    message = "Please enter a valid email address"; 
    $("span#myemail").addClass("bad");   
} else{
    message="Perfect";
    $("span#myemail").removeClass("bad");
    $("span#myemail").addClass("good");
}  
  document.getElementById('myemail').innerText=message;
  }
  
function Phnumber_Validation(){
  
  var num=document.form.phnum.value;  
  var phone = /^\d{10}$/;
  if ((num.match(phone))){   
     msg="perfect";
     
     $("span#myphone").removeClass("bad");
     $("span#myphone").addClass("good");
     
  }   
  else{   
    msg ="Enter valid phone number";
  $("span#myphone").addClass("bad");
  }
  document.getElementById("myphone").innerText=msg;   
}   

 function Age_Validation(){
  var age=document.form.age.value;
  if(isNaN(age)||age<1||age>=100){
    msg="Enter valid age";
    $("span#myage").addClass("bad");  
  }
  else{
    msg="Perfect";
    $("span#myage").removeClass("bad");
    $("span#myage").addClass("good");
  }
  document.getElementById("myage").innerText=msg;  
 }



