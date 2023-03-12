import './App.css'
import { Route, Routes } from 'react-router-dom'
import TodosPage from './pages/TodosPage'

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path={"/"} element={<TodosPage />} />
      </Routes>
    </div>
  )
}

export default App
