const btns = document.querySelectorAll(".btn");

btns.forEach(btn => btn.addEventListener("click", filtraLivros));

function filtraLivros(){
    const elementoBtn = document.getElementById(this.id)
    const categoria = elementoBtn.value;
    let livrosFiltrados = livros.filter(livros => livros.categoria == categoria);
    exibeLivros(livrosFiltrados)
}