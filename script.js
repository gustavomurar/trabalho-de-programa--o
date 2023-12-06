
function valor(value){
    document.getElementById('display').value += value;
}
function calcula(){
    document.getElementById('display').value = eval(document.getElementById('display').value);
}
function limpar (){
    document.getElementById('display').value = ' ';
}