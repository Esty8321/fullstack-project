import { useParams } from 'react-router-dom'

const BookById = (props) => {

    const { id } = useParams()
    const books = props.books
    const book=books.find(b=>b.id===parseInt(id))
    return (<div class='book-detail' >
      
      <h1>Book Details</h1>
      <h3>Name: {book.name}</h3>
      <p>Author: {book.author}</p>
      <p>ID: {book.id}</p>
      {/* //if i want put an image */}
     <button >purchase</button>   
    </div>)
}
export default BookById