import React,{ useEffect, useState} from "react";

interface Book {
    id: number;
    title: string;
    stock?: number;
    cover_image: string;
}

const BookList: React.FC = () => {
    const [books, setBooks] = useState<Book[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    //function to fetch the books from the backend
    const fetchBooks = async() => {
        try{
            const response = await fetch("http://localhost:4000/books");
            const data = await response.json();
            setBooks(data);
            setLoading(false);
        }catch(error){
            console.error('error al obtener libros',error);
            setLoading(false);
        }
    };

    // function for delete book
    const deleteBook = async (id: number) => {
        if(confirm('¿Estas seguro de eliminar el libro?')){
        try{
            await fetch(`http://localhost:4000/books/${id}`,{
                method: 'DELETE',
            })
            .then(response =>{
                if(response.ok){
                    alert('Libro eliminado');
                    fetchBooks(); //fetch the books again
                }else{
                    alert('Error al eliminar libro');
                }
            })
            }catch(error){
            console.error('error al eliminar libro',error);
        }
    };

    const updateBook = async (id: number) => {
        const newTitle = prompt('Ingrese el nuevo titulo');
        const newStock = prompt('Ingrese el nuevo stock');
        const newCoverImage = prompt('Ingrese la nueva imagen');
        const first_publish_year = prompt('Ingrese el año de publicación');
        if(newTitle && newStock && newCoverImage && first_publish_year){
            try{
                const response = await fetch(`http://localhost:4000/books/${id}`,{
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({title: newTitle, stock: parseInt(newStock), cover_image: newCoverImage, first_publish_year: first_publish_year}),
                });
                if(response.ok){
                    alert('Libro actualizado');
                    fetchBooks(); //fetch the books again
                }else{
                    alert('Error al actualizar libro');
                }
            }catch(error){
                console.error('error al actualizar libro',error);
            }
        }
    }

    //cargar libros al montar el componte
    useEffect(() => {
        fetchBooks();
    }, []);

    if(loading){
        return <p>Cargando libros...</p>;
    }
    return (
            <div className="article">
                {books.map((book) => (
                    <div key={book.id} className="filaLibros">
                        <img
                            style={{ height: 'auto', width: '150px', borderRadius: '12px' }}
                            src={book.cover_image}
                            alt={book.title}
                            className="libro"
                        />
                        <div>
                            <p><strong>{book.title}</strong></p>
                            {book.stock !== undefined && <p>Stock: {book.stock}</p>}
                            <button
                                type="button"
                                className="botonEliminar"
                                style={{ backgroundColor: 'red' }}
                                onClick={() => deleteBook(book.id)}
                            >
                                Eliminar
                            </button>
                            <button
                                type="button"
                                className="botonActualizar"
                                style={{ backgroundColor: 'rgb(91, 91, 253)' }}
                                onClick={() => updateBook(book.id)}
                            >
                                Actualizar
                            </button>
                        </div>
                    </div>
                ))}
            </div>    
        )
    };
};

export default BookList;