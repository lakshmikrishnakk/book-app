import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import AddBook from './assets/components/AddBook'
import DeleteBook from './assets/components/DeleteBook'
import SearchBook from './assets/components/SearchBook'
import ViewBookCart from './assets/components/ViewBookCart'
import { BrowserRouter, Route, Routes } from 'react-router-dom'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<AddBook/>}/>
      <Route path='/delete' element={<DeleteBook/>}/>
      <Route path='/search' element={<SearchBook/>}/>
      <Route path='/viewbook' element={<ViewBookCart/>}/>
     </Routes>
     
     </BrowserRouter>
    </>
  )
}

export default App
