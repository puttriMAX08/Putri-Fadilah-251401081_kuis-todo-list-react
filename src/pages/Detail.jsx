import { useState } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import TodoForm from '../components/TodoForm'
import ConfirmDialog from '../components/ConfirmDialog'
import { StatusBadge, Priority, fmtDate } from '../components/Badge'

export default function Detail({ todos, onUpdate, onDelete }) {
  const { id } = useParams()
  const navigate = useNavigate()
  const [editing, setEditing] = useState(false)
  const [deleting, setDeleting] = useState(false)
  const todo = todos.find((t) => String(t.id) === id)

  if (!todo) {
    return (
      <main className="page narrow">
        <div className="empty">
          <p>Tugas tidak ditemukan. Mungkin sudah dihapus.</p>
          <Link to="/" className="btn solid">Kembali ke daftar</Link>
        </div>
      </main>
    )
  }

  return (
    <main className="page narrow">
      <Link to="/" className="back">← Semua tugas</Link>
      <article className="sheet">
        <h1 className="dtitle">{todo.title}</h1>
        <dl>
          <div><dt>Status</dt><dd><StatusBadge status={todo.status} /></dd></div>
          <div><dt>Prioritas</dt><dd><Priority level={todo.priority} /></dd></div>
          <div><dt>Deadline</dt><dd>{fmtDate(todo.deadline)}</dd></div>
        </dl>
        <h3>Deskripsi</h3>
        <p className="desc">{todo.description || 'Belum ada deskripsi.'}</p>
        <div className="actions">
          <Link to="/" className="btn ghost">Kembali</Link>
          <button className="btn danger" onClick={() => setDeleting(true)}>Hapus</button>
          <button className="btn solid" onClick={() => setEditing(true)}>Ubah</button>
        </div>
      </article>

      {editing && <TodoForm mode="edit" initial={todo} onSubmit={(d) => onUpdate(todo.id, d)} onClose={() => setEditing(false)} />}
      {deleting && <ConfirmDialog todo={todo} onConfirm={(i) => { onDelete(i); navigate('/') }} onClose={() => setDeleting(false)} />}
    </main>
  )
}