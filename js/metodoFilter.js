const btns = document.querySelectorAll(".btn");

btns.forEach(btn => btn.addEventListener("click", filtraLivros));

function filtraLivros(){
    const elementoBtn = document.getElementById(this.id)
    const categoria = elementoBtn.value;
    let livrosFiltrados = categoria == 'disponivel' ? livros.filter(livro => livro.quantidade > 0) : livros.filter(livro => livro.categoria == categoria);
    exibeLivros(livrosFiltrados)
}