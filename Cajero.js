document.querySelector("body").style.backgroundColor = "lightblue";

var usuario = "Alfredo"
var contraseña = 1234
var saldo = 300
  
function validarUsuario(u,c,s){ 
   let nodoUsuario = document.querySelector("#usuario")
   let nodoContraseña = document.querySelector("#contraseña")
   if (nodoUsuario.value == usuario && nodoContraseña.value == contraseña)
{
document.getElementById("butsal").disabled = false;
document.getElementById('butcon').disabled = false;
document.getElementById('butret').disabled = false;
alert ("Bienvenid@" + usuario + " tu saldo es " + saldo );

}
else
alert ("Usuario y/o contraseña incorrecta")
}

function consultarSaldo(u,c,s){    
alert("tu saldo es " + saldo)
 }
function ingresarDinero(u,c,s,d){ 
    let dinero = Number(window.prompt("Digite el valor a consignar", ""))
    saldo = saldo + dinero
    if (saldo <= 990)
    alert("El valor consignado fue " + dinero + " su nuevo saldo es " + saldo)
    else
    {
    saldo = saldo - dinero
    alert("Operación rechazada supera el monto máximo permitido, su saldo es " + saldo)
    } 
}
function retirarDinero(u,c,s,d){ 
        let dinero = Number(window.prompt("Digite el valor a retirar", ""))
        saldo = saldo - dinero
        if (saldo >= 10)
    alert("El valor retirado fue " + dinero + " su nuevo saldo es " + saldo)
    else
    {
    saldo = saldo + dinero
    alert("Operación rechazada fondos insuficientes, su saldo es " + saldo)
    }
         }
    