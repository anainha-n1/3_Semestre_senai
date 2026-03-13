class livro{
 constructor(id, titulo, autor, paginas){
    if(!titulo || !autor){
        throw new Error("titulo ou autor são obrigatórios");
    }
    this.id = id;
    this.titulo = titulo;
    this.autor = autor;
    this.paginas = paginas;
    this.lido = false;

    
}
descricao(){
    return `${this.titulo} - ${ this.autor}`}

tamanho(){
if ( this.paginas <= 150) return 'leitura curta'; {
if ( this.paginas <= 300) return 'leitura media'; 
return 'leitura longa'
}
}
marcarComoLido(){
    this.lido = true;
}

}

export default livro