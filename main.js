const buttonBotao = document.getElementById('botao')

listaProdutos = []

function addCarrinho(nome, valor, fotoProduto){
    listaProdutos.push({produto: nome, preco: valor, foto: fotoProduto})
    console.log(listaProdutos)
    salvarCarrinho()
}

function exibirCarrinho(){
    var codigo = ''
    var contador = 0
    codigo += '<h1>Carrinho</h1>'
    listaProdutos.forEach(prod => {
        codigo += `<div class="produto-carrinho">
        <div class="nome"><img src='imagens/${prod.foto}' class='fotoCarrinho'/ > ${prod.produto}</div>
        <div class="valor"> R$ ${prod.preco}
        <a href="#" onclick="remover(${contador})">X</a>
        </div>
        </div>`

        contador++
    });

    document.getElementById('lista').innerHTML = codigo
}

function remover(index){
    var confirmou = confirm(`Deseja remover ${listaProdutos[index].nome} do carrinho?`)

    if(confirmou){
        listaProdutos.splice(index, 1)
        salvarCarrinho()
    }
}

function salvarCarrinho(){
    localStorage.setItem('carrinho', JSON.stringify(listaProdutos))
    window.location.href='carrinho.html'
    exibirCarrinho()
}

function obterCarrinho(){
    if (localStorage.getItem('carrinho') != null){
        listaProdutos = JSON.parse(localStorage.getItem('carrinho'))
        exibirCarrinho()
    }
}

if (buttonBotao != null){
    buttonBotao.addEventListener('click', alterar)
}

function botao(){
    produtos.classlist.toggle('active')
}
obterCarrinho()