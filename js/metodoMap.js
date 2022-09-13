function aplicaDesconto(livros) {
    const desconto = 0.3;
    precoDesconto = livros.map(livro => {
        return {...livro, preco: livro.preco - (livro.preco * desconto)}
    })
    return precoDesconto;
}