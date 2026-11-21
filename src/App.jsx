import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { initialTodos } from './data/dummyTodos'
import Home from './pages/Home'
import Detail from './pages/Detail'
import Toast from './components/Toast'

export default function App() {
  const [todos, setTodos] = useState(initialTodos)
  const [toast, setToast] = useState(null)

  const notify = (msg) => setToast({ msg, key: Date.now() })

  useEffect(() => {
    if (!toast) return
    const t = setTimeout(() => setToast(null), 2800)
    return () => clearTimeout(t)
  }, [toast])

  const addTodo = (data) => {
    const id = Math.max(0, ...todos.map((t) => t.id)) + 1
    setTodos((prev) => [{ ...data, id }, ...prev])
    notify('Tugas ditambahkan')
  }
  const updateTodo = (id, data) => {
    setTodos((prev) => prev.map((t) => (t.id === id ? { ...t, ...data } : t)))
    notify('Perubahan disimpan')
  }
  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((t) => t.id !== id))
    notify('Tugas dihapus')
  }

  return (
    <>
      <Routes>
        <Route path="/" element={<Home todos={todos} onAdd={addTodo} onDelete={deleteTodo} />} />
        <Route path="/todo/:id" element={<Detail todos={todos} onUpdate={updateTodo} onDelete={deleteTodo} />} />
        <Route path="*" element={<Detail todos={[]} />} />
      </Routes>
      <Toast toast={toast} />
    </>
  )
}