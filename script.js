const formSelect=document.querySelector(".after");
const signUpForm=document.querySelector(".signUpForm");
const signInForm=document.querySelector(".signInForm");
const form1=document.querySelector(".form1");
const form2=document.querySelector(".form2");

signInForm.addEventListener("click" , function(){
    formSelect.style.left="250px";
    console.log("success");
    form1.classList.add("add1");
    form2.classList.add("add2");

});

signUpForm.addEventListener("click" ,function(){
    form1.classList.remove("add1");
    form2.classList.remove("add2");
    formSelect.style.left="10px";
    console.log("success");
});