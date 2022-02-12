//Ler cookie
function getCookie(cNome) {
    let nome = cNome + '=';
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(nome) == 0) {
            return c.substring(nome.length, c.length);
        }
    }
    return "";
}
var username = getCookie('user')
var token = getCookie('token')
var email = getCookie('email')
var id = getCookie('id')

function rUlogged() {
    if (token == "" || token == null || token == undefined) {
        location.href = "index.html"
    }
}





var headerNomeUsuario = document.querySelector('.headerNomeUsuario')
var formNome = document.querySelector('#userName')
var formEmail = document.querySelector('#userEmail')
var senhaAtual = document.querySelector('#userPW')
var senhaNova = document.querySelector('#userNewPW')
var senhaNovaRep = document.querySelector('#userRepNewPW')
var alerta = document.querySelector('#alerts')

headerNomeUsuario.innerHTML = username
formNome.value = username
formEmail.value = email


function edit(e) {

    document.querySelector('#iconSave').style.display = "block"

    formNome.disabled = false
    formEmail.disabled = false

    let elem = document.querySelectorAll('.displayToggle')
    console.log(elem)

    for (i = 0; i < elem.length; i++) {
        elem[i].classList.toggle('displayToggle')
    }

    e.style.display = 'none'

    // if (formSenhaAtual.value == ""){
    //     alerta.innerHTML = "Preencha sua Senha Atual"
    //     formSenhaAtual.style.border= "1px solid red"
    //     formSenhaAtual.previousElementSibling.style.color = "red"
    // }

}

function save(e) {

    console.log('?')

    const requestOptions = {
        method: 'PUT',
        headers: {
            
            'Authorization': 'Bearer '+token
        },
        body: JSON.stringify({
            codigo: id,
            login: formEmail.value,
            nome: formNome.value
        })
    }

    fetch('https://apiextintores.azurewebsites.net/usuario/'+id, requestOptions)
        .then(res => res.json())
        .then(res => {
            console.log(res)
        })
        .catch(err => console.log('erro'))

}


