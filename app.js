let encriptar = document.getElementById("encriptar");
let desencriptar = document.getElementById("desencriptar");
let resultado =document.getElementById("resultado");


const pattern = new RegExp('^[a-z]');

function copyToClipBoard() {

    
    
    resultado.select();
    document.execCommand('copy');

    alert("Copied!");
}



function encriptacion(e){
    e.preventDefault();
    let inputValue = document.getElementById("texto").value;
   


if(!pattern.test(inputValue)){
    resultado.innerHTML ="Caracter INVALIDO"
}  else{
    resultado.innerHTML=(inputValue.replaceAll("e","enter").replaceAll("i","imes").replaceAll("a","ai").replaceAll("o","ober").replaceAll("u","ufat"));
}
    



}

function desencriptacion(e){
    e.preventDefault();
    let inputValue = document.getElementById("texto").value;
    if(!pattern.test(inputValue)){
        resultado.innerHTML ="Caracter INVALIDO"
    }
     else{
        resultado.innerHTML=(inputValue.replaceAll("enter","e").replaceAll("imes","i").replaceAll("ai","a").replaceAll("ober","o").replaceAll("ufat","u"))
    }
    
}

encriptar.onclick = encriptacion;
desencriptar.onclick =desencriptacion;








encriptar.onclick = encriptacion;
desencriptar.onclick = desencriptacion;
copy.onclick =copyToClipBoard;