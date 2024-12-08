
import {useState}from 'react'
import {Link,Outlet}from 'react-router-dom'
//

const Books=(props)=>{
const books=props.books

    
    return(
        <div class='books-list'>
        { books.map(b=>{
            return(<div class='book-card'>
                <h3>name:{b.name}</h3> 
                      <p>author:{b.author}</p>
                <Link to={`/books/${b.id}`}>more detailes</Link>
                </div>)
        })}
<Outlet/>
        </div>
    )
}
export default Books