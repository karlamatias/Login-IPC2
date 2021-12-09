
//voy a capturar los datos que ingrese el usuario
function login() {
    let correo = document.getElementById("correo").value;
    let password = document.getElementById("password").value;
    console.log("Correo:", correo);
    console.log("Password:", password);
    console.log("");
    console.log("Bienvenid@ al Sistema!!");

}

function InicioSesion() {
    let nombre = document.getElementById("nombre").value;
    let email = document.getElementById("email").value;
    let Password = document.getElementById("Password").value;
    let Password2 = document.getElementById("Password2").value;
    console.log("Nombre:", nombre);
    console.log("Correo:", email);

    //Comparo las contraseñas que el usuario ingrese, si no coinciden lanza una alerta
    if (Password === Password2) {
        console.log("");
        console.log("Contraseña Valida");
        console.log("Usted se registro exitosamente!");

    } else {
     
        console.log("");
        console.log("Las contraseñas no coinciden... Por favor verifique!!");
        
       
    }
}

function IngresoClientes() {
    let nombreCli = document.getElementById("nombreCliente").value;
    let apellido = document.getElementById("apellidoCliente").value;
    let cui = document.getElementById("cui").value;
    let departamento = document.getElementById("dep").value;
    console.log("Nombre:", nombreCli);
    console.log("Apellido:", apellido);
    console.log("CUI:", cui);
    console.log("Departamento:", departamento);

    console.log("Cliente Registrado Exitosamente!!");
}
