var http = new XMLHttpRequest();

const homeCard = (numero, tipo, sinalizacao) => {
    const container = document.createElement('div')
    container.classList.add('smallCard')
    const template = `
    <div class="extType">
        <span class="extTipo">${tipo}</span>
    </div>
    <div class="extNumber">
        <h3>${numero}</h3>
        <span>31/01/2022 • 20/06/2022</span>
    </div>
    <div class="extSinalizacao">
        ${sinalizacao}
    </div>
 `

    container.innerHTML = template
    return container
    
}

const containerHomeCards = document.querySelector('main')

http.open("GET", "https://controleextintores.azurewebsites.net/extintor")

http.send()

http.onload = () => {
    const data = JSON.parse(http.response)
    console.log(data)
    data.forEach(elem => {
        containerHomeCards.appendChild(homeCard(elem.numero, elem.tipo, elem.sinalizacao))
    })
    var extTipo = document.querySelectorAll('.extType')
    for (i=0; i<extTipo.length; i++){
        console.log(extTipo[i].innerText)
        if (extTipo[i].innerText == 0){
            extTipo[i].innerText = "AP"
            extTipo[i].style.backgroundColor = "rgba(250, 223, 223, 1)"
            extTipo[i].style.color = "rgba(225, 78, 78, 1)"
        }else if (extTipo[i].innerText == "1") {
            extTipo[i].innerText = "PQS"
            extTipo[i].style.backgroundColor = "rgba(228, 246, 252, 1)"
            extTipo[i].style.color = "rgba(73, 173, 204, 1)"
        }else {
            extTipo[i].innerHTML = "CO²"
        }
    }

    var extSinal = document.querySelectorAll('.extSinalizacao')
    for (i=0; i < extSinal.length; i++){
        if (extSinal[i].innerText == 0){
            extSinal[i].innerText = "OK"
            extSinal[i].style.color = "rgba(73, 173, 204, 1)"
        }else if(extSinal[i].innerText == 1){
            extSinal[i].innerText = "Placa quebrada"
        }else{
            extSinal[i].innerText = "Sem placa"
        }
    }
}

function footerChoice(n, p) {
    let atualAtivo = document.querySelector('.footerActive')
    let dot = document.querySelector('.footerDot')
    atualAtivo.classList.remove('footerActive')
    n.classList.add('footerActive')
    dot.style.left = p;

}


