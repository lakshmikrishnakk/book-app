import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import AddBook from './assets/components/AddBook'
import DeleteBook from './assets/components/DeleteBook'
import SearchBook from './assets/components/SearchBook'
import ViewBookCart from './assets/components/ViewBookCart'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AddBook />
      <DeleteBook />
      <SearchBook />
      <ViewBookCart/>
    </>
  )
}

export default App
