//Haz tú validación en javascript acá\
const  nombre = document.getElementById("name")
const  email = document.getElementById("email")
const  asunto = document.getElementById("asunto")
const  mensaje = document.getElementById("mensaje")
const  parrafo = document.getElementById("warnings")


function habilitar(){
    let  nombre = document.getElementById("name").value
    let  email = document.getElementById("email").value
    let  asunto = document.getElementById("asunto").value
    let  mensaje = document.getElementById("mensaje").value
    let val = 0;

    if(nombre==""){
        val++;
    }
    if(email==""){
        val++;
    }
    if(asunto==""){
        val++;
    }
    if(mensaje==""){
        val++;
    }
    if(val ==0){
        document.getElementById("btn_enviar").disabled = false;
    }else{
        document.getElementById("btn_enviar").disabled = true;
    }
}

document.getElementById("name").addEventListener("keyup", habilitar)
document.getElementById("email").addEventListener("keyup", habilitar)
document.getElementById("asunto").addEventListener("keyup", habilitar)
document.getElementById("mensaje").addEventListener("keyup", habilitar)


form.addEventListener("submit", e=>{
    e.preventDefault()
    let warnings = "";
    let entrar = false;
    let regexEmail =  /^(([^<>()\[\]\.,;:\s@\”]+(\.[^<>()\[\]\.,;:\s@\”]+)*)|(\”.+\”))@(([^<>()[\]\.,;:\s@\”]+\.)+[^<>()[\]\.,;:\s@\”]{2,})$/;
    parrafo.innerHTML = "";
    if(nombre.value.length == 0){
        warnings += 'El campo del "Nombre" esta vacio<br>';
        entrar = true;
    }
    if(nombre.value.length >50){
        warnings += 'El nombre es demasiado largo<br>';
        entrar = true;
    }
    
    if(!regexEmail.test(email.value) && email.value.length >0 ){
        warnings += 'El email no es valido <br>';
        entrar = true;
    }
    if(email.value.length == 0){
        warnings += 'El campo de "Email" esta vacio<br>';
        entrar = true;
    }

    if(asunto.value.length == 0){
        warnings += 'El campo del "Asunto" esta vacio<br>';
        entrar = true;
    }
    if(asunto.value.length >50){
        warnings += 'El asunto es demasiado largo<br>';
        entrar = true;
    }

    if(mensaje.value.length == 0){
        warnings += 'El campo del "Asunto" esta vacio<br>';
        entrar = true;
    }
    if(asunto.value.length >50){
        warnings += 'El asunto es demasiado largo<br>';
        entrar = true;
    }


    if(entrar){
        parrafo.innerHTML = warnings;
    }else{
        parrafo.innerHTML = "¡Enviado!";
    }

})