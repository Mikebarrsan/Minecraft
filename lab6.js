const boton = document.getElementById("Verify_password");
const password = document.getElementById("password");
const verified_password = document.getElementById("verified_password");

boton.onclick = () => { 
    console.log("Verify");
    if(password.value === verified_password.value){ //.value sirve para acceder a los valoress sin violar la privacidad de datos
        alert("Tu contraseña está verificada");
    }
    else {
        alert("Las contraseñas no coinciden");
    }
};
