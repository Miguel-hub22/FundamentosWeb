/*pode usar esses exemplos*/
/*por tag: getelementByTagName*/
/* por id: getelementbyid*/
/* por nome: geteelementbyname*/
/*por class: getelementsbyclassname*/
/*por seletor: queryselector()*/

let nome = window.document.getElementById('nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')
let nomeOK = false
let emailOK = false
let assuntoOK = false
let mapa = document.querySelector("#mapa")

nome.style.width ='100%'
email.style.width='100%'

function validaNome(){
    let txt = document.querySelector('#txtNome')
    if(nome.value.length < 3){
        txtNome.innerHTML= "Nome Inválido"
        txtNome.style.color = "red"
    } else{
        txtNome.innerHTML="Nome Válido"
        txtNome.style.color="green"
        nomeOk = true
    }

}
function validaEmail(){
    let txtEmail = document.querySelector("#email")

    if(email.value.indexOf("@") == -1|| email.value.indexOf(".") == -1){
        txtEmail.innerHTML = "email inválido"
        txtEmail.style.color="red"
    }else{
        txtNome.innerHTML="Nome Válido"
        txtNome.style.color="green"
        emailOk= true
    
    }
}
function validaAssunto(){
    let txtAssynto = document.querySelector("#txtassunto")

    if(assunto.value.length >= 100){
        txtAssunto.innerHTML = "texto é muito grande, digite no maximo 100 caractres"
        txtAssynto.style.color = "red"
        txtAssynto.style.display ="block"
    } else{
        txtAssynto.style.display ="nome"
        assuntoOK = true
    }
}
function enviar(){
    if(nomeOK == true && emailOk && assuntoOK == true){
        alert("Formulário enviado com sucesso!")
    } else{
        alert("Preencha o formulário corretamente antes de enviar...!")

    }
}
 function mapaZoom(){
    mapa.style.width = "800px"
    mapa.style.height= "600px"

 }
 function mapaNormal(){
    mapa.style.width = "400px"
    mapa.style.height= "250px"

 }