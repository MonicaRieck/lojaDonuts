
let cardapio = [
    ['Napoleão', 4.99],
    ['Froquis', 6.99],
    ['Leite Compensado', 3.99]
]

let relatorio = new Array(cardapio.length).fill(0)

let divCardapio
let olx

function carregarElementos() {
    divCardapio = document.getElementById('informacoesDoCardapio')
    olx = document.getElementById('x')
}
function popularElementos() {

    divCardapio.innerHTML = menuDeRosquinhas()
}
window.addEventListener("load", function (event) {
    carregarElementos()
    popularElementos()
})
function detalhesDoRelatorio() {
    let detalhes = []
    let somaTotal = 0
    function imprimirTotais() { console.log(detalhes) }
    for (let i = 0; i < cardapio.length; i++) { // 0 1 2
        let quantidade = relatorio[i]
        let produto = cardapio[i][0]
        let valorDoProduto = quantidade * cardapio[i][1]
        somaTotal += valorDoProduto
        detalhes.push([quantidade, produto, valorDoProduto])
    }
    return { detalhes, somaTotal, imprimirTotais }
}
function atualizarDetalhesDoPedido() {
    let lista = ''
    let total = detalhesDoRelatorio().somaTotal
    let detalhes = detalhesDoRelatorio().detalhes
    for (let i = 0; i < cardapio.length; i++) {
        lista += `<li>${detalhes[i].toString().replaceAll(',', ' ')}</li>`

    }
    lista += `<li><h4>Total R$: ${total.toFixed(2)}</h4></li>`
    olx.innerHTML = lista
}

function gravarRelatorio(tipoRosquinha) {
    relatorio[tipoRosquinha]++
    alert(cardapio[tipoRosquinha][0] + ' Incluido')
}

function realizarVenda(tipoRosquinha) {

    switch (tipoRosquinha) {
        case 0: gravarRelatorio(tipoRosquinha); break
        case 1: gravarRelatorio(tipoRosquinha); break
        case 2: gravarRelatorio(tipoRosquinha); break
        default:
            alert('Produto inválido, tente novamente!')
    }
    atualizarDetalhesDoPedido()
}

function menuDeRosquinhas() {
    let menu = ''
    for (let i = 0; i < cardapio.length; i++) {
        menu += `<button onclick='realizarVenda(${i})' class='botaoDoMenu'>${cardapio[i][0]}</button></br>`
    }
    return menu
}
