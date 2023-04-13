/*
Realizar una web con un temporizador donde el usuario pueda ingresar un tiempo desde donde comenzará a decrementar el 
contador. Debe contener los botones, iniciar, pausar y reset. 
*/
let cronometro = document.getElementById("cronometro");
let btnIniciar = document.getElementById("btnIniciar");
let btnDetener = document.getElementById("btnDetener");
let btnTiempo = document.getElementById(`btnTiempo`);
let btnReset = document.getElementById("btnReset");
let btnRecuperar = document.getElementById(`btnRecuperar`);
let inputTiempo = document.getElementById(`ingreseTiempo`);
let setearIntervalo;

function enviarElTiempo(){
    cronometro.innerHTML = `${inputTiempo.value}`;
}

function iniciarTemporizador() {
    let valueInput = document.getElementById(`ingreseTiempo`).value;
        setearIntervalo = setInterval(function () {
            if(valueInput <= 0){
                detenerCronometro();
            }
            cronometro.innerHTML = `${valueInput--}`;
        }, 1000);
  btnIniciar.disabled = true;
}

//funcion puesta para que no se pueda concatenar mas iniciares
function recuperar() {
  btnIniciar.disabled = false;
}

function detenerTemporizador() {
  clearInterval(setearIntervalo);
}

function resetTemporizador() {
  clearInterval(setearIntervalo);
  cronometro.innerHTML = `0`;
}

//onclick
btnTiempo.onclick = function (){
    enviarElTiempo();
};

btnIniciar.onclick = function () {
  iniciarTemporizador();
};

btnDetener.onclick = function () {
  detenerTemporizador();
};

btnReset.onclick = function () {
  resetTemporizador();
};

btnRecuperar.onclick = function () {
  recuperar();
};
