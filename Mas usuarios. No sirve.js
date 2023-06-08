document.querySelector("body").style.backgroundColor = "lightblue";

var cuentas = [
    { usuario:"Alfredo", contraseña:"1234", saldo: "100" },
    { usuario:"Daniela", contraseña:"5678", saldo: "100" },
    { usuario:"Suki", contraseña:"5678", saldo: "100" },
];
  
function validarUsuario() { 
   let nodoUsuario = document.querySelector("#usuario")
   let nodoContraseña = document.querySelector("#contraseña")
   if (nodoUsuario.value == cuentas[0].usuario && nodoContraseña.value == cuentas[0].contraseña)
{
document.getElementById("butsal").disabled = false;
document.getElementById('butcon').disabled = false;
document.getElementById('butret').disabled = false;
alert ("Bienvenid@" + cuentas[0].usuario + " tu saldo es " + cuentas[0].saldo );
}

else
alert ("Usuario y/o contraseña incorrecta")
}

function consultarSaldo(){    
alert("tu saldo es " + saldo)
 }
function ingresarDinero(){ 
    let dinero = Number(window.prompt("Digite el valor a consignar", ""))
    saldo1 = cuentas[0].saldo + dinero
    if (saldo1 <= 990)
    alert("El valor consignado fue " + dinero + " su nuevo saldo es " + saldo1)
    else
    {
    saldo2 = saldo1 - dinero
    alert("Operación rechazada supera el monto máximo permitido, su saldo es " + saldo2)
    } 
}
function retirarDinero(){ 
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
    