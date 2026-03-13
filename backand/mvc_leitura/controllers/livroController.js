import livro from "../models/livro.js";

let listaLivros = [
    new livro(1, "o Alienista", "machado", 43),
    new livro(2, 'dom Casmurro', "mschado", 899),
    new livro(3, "meu diario otario", "fulana", 120 )
]

const livroController = {
    listar: (req, res) => {
        res.render('livros.ejs', {livros: listaLivros})
    },
    adicionar: (req,res) => {
        const {titulo, autor, paginas} = req.body;

        try{
            const novoLivro = new livro(
                listaLivros.length + 1,
                titulo,
                autor,
                Number(paginas)
            );
            listaLivros.push(novoLivro);
            res.redirect('/livros');
        }catch(e)
        {
            res.status(400).render('livros.ejs', {listar: listaLivros, erro: e.message})
        }
    },

    marcarComoLido: (req,res) =>{
        const {id} = req.body;
        const livro = listaLivros.find(l => listaLivros.id === Number(id))
        livro.marcarComoLido();
        res.redirect('/livros');
    }
}

export default livroController;