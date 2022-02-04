function footerChoice(n, p){
    let atualAtivo = document.querySelector('.footerActive')
    let dot = document.querySelector('.footerDot')
    atualAtivo.classList.remove('footerActive')
    n.classList.add('footerActive')
    dot.style.left = p;
}