import logo from './logo.svg';
import './App.css';
//import Books from './books'
import { Route, Routes, Link } from 'react-router-dom'
//import BookById from './bookById'
//import Home from './home.jsx'
import { useState, useContext } from 'react'
//import Login from './login.jsx'
import MyContext from './mycontext'
import { useRef } from 'react'
import React,{Suspense} from 'react';
////////////
const LazyHome=React.lazy(()=>import('./home.jsx'))
const LazyBooks=React.lazy(()=>import('./books'))
const LazyLogin=React.lazy(()=>import('./login.jsx'))
const LazyBookById=React.lazy(()=>import('./bookById'))

function App() {

  const [books, setBooks] = useState(
    [{ id: 1, name: "black and white", author: "Ester Ranan" }, { id: 2, name: "everyOne can", author: "Avigail maizlik" }]
  )

  const [name, setName] = useState('')

  return (
    <div >
      <MyContext.Provider value={setName}>
        <nav>
          <ul>
            <li>
              {name}
              </li>
            <li>
              <Link to='/'>home</Link>
            </li>
            <li>
              <Link to='/books'>books</Link>
            </li>
            <li>
              <Link to='/login'>login</Link>
            </li>
          </ul>
          
        </nav>



        {/* {////////} */}

        <Routes>
          <Route path='/books' element={<Suspense fallback='loading...'><LazyBooks books={books} /></Suspense>} />
          <Route path='/books/:id' element={<Suspense fallback='loading...'><LazyBookById books={books} /></Suspense>} />
          <Route path='/' element={<Suspense fallback='loading...'><LazyHome /></Suspense>} />
          <Route path='/login' element={<Suspense fallback='loading'><LazyLogin /></Suspense>} />
        </Routes>
      </MyContext.Provider>


      
    </div>
  );
}

export default App;
