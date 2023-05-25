import { Route, Routes } from "react-router-dom"
import Home from './components/home'
import Detail from "./components/detail"
import Create from "./components/create"
import Landing from "./components/landing"
import About from "./components/about"
import "./App.css"
function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/home' element={<Home />} />
        <Route path='/create' element={<Create />} />
        <Route path='/detail/:id' element={<Detail />} />
        <Route path='/about' element={<About />} />
      </Routes>

    </div>
  )
}
export default App
