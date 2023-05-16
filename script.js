// var idade = prompt('digite sua idade');

//função entrar

function entrar() {

    var area = document.getElementById('area');
    var texto = prompt('Digite seu nome');

    if(texto == '' || texto == null){
        alert('digite seu nome novamente!');
        area.innerHTML = 'Bem vindo ...';
    }else{
        area.innerHTML = 'Bem vindo ' + texto;
    }
}


function entrar2(nome){
 var area = document.getElementById('area2');
 var texto = prompt('digite seu sobrenome');
 area.innerHTML = nome + " " + texto;

}
   
