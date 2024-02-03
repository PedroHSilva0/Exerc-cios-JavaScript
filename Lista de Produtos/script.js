const produtos = [  
    {nome: "Computador",categoria:"Tecnoliga",preço:"800"},
    {nome: "Telemóveel",categoria:"Tecnoliga",preço:"600"},
    {nome: "TV",categoria:"Tecnoliga",preço:"750"}]

let produtoTabela = document.getElementById("produtoList")

for(i=0;i<produtos.length;i++){
    let produtoTabelaLinha = document.createElement('tr');
    
    let produtosTabelaDadosNome = document.createElement('td');
    produtosTabelaDadosNome.innerHTML = produtos[i].nome;
    produtoTabelaLinha.appendChild(produtosTabelaDadosNome);
    produtoTabela.appendChild(produtoTabelaLinha)

    let produtosTabelaDadosCategoria = document.createElement('td');
    produtosTabelaDadosCategoria.innerHTML = produtos[i].categoria;
    produtoTabelaLinha.appendChild(produtosTabelaDadosCategoria);
    produtoTabela.appendChild(produtoTabelaLinha)

    let produtosTabelaDadosPreço = document.createElement('td');
    produtosTabelaDadosPreço.innerHTML = produtos[i].preço;
    produtoTabelaLinha.appendChild(produtosTabelaDadosPreço);
    produtoTabela.appendChild(produtoTabelaLinha)
}