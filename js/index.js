"use strict";

//VALIDACIÓN DE FORMULARIO
const inputName = document.getElementById("nombre");
const inputLastName = document.getElementById("apellido");
const inputEmail = document.getElementById("email");
const validName = document.querySelector(".valid-name");
const validLastName = document.querySelector(".valid-lastname");
const validMail = document.querySelector(".valid-mail");
const invalidMail = document.querySelector(".invalid-mail");

inputName.addEventListener("input", () =>{
    if(inputName.validity.valid){
        validName.style.visibility = "visible";
    }else{
        validName.style.visibility = "hidden";
    }
});

inputLastName.addEventListener("input", () =>{
    if(inputLastName.validity.valid){
        validLastName.style.visibility = "visible";
    }else{
        validLastName.style.visibility = "hidden";
    }
});

inputEmail.addEventListener("input", () =>{
    if(inputEmail.validity.valid){
        validMail.style.visibility = "visible";
    }else{
        validMail.style.visibility = "hidden";
    }
});

inputEmail.addEventListener("input", () =>{
    if(!inputEmail.validity.valid){
        invalidMail.classList.remove("ocultar-icono");
    }else{
        invalidMail.classList.add("ocultar-icono");
    }
});