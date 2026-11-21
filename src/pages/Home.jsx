import { useState } from 'react'
import { Link } from 'react-router-dom'
import TodoForm from '../components/TodoForm'
import ConfirmDialog from '../components/ConfirmDialog'
import { StatusBadge, Priority, fmtDate } from '../components/Badge'
import { STATUSES } from '../data/dummyTodos'

export default function Home({ todos, onAdd, onDelete }) {
  const [showForm, setShowForm] = useState(false)
  const [toDelete, setToDelete] = useState(null)
  const [filter, setFilter] = useState('semua')
  const [q, setQ] = useState('')

  const count = (s) => todos.filter((t) => t.status === s).length
  const shown = todos.filter(
    (t) => (filter === 'semua' || t.status === filter) && t.title.toLowerCase().includes(q.toLowerCase())
  )
  const today = new Date().toISOString().slice(0, 10)

  return (
    <main className="page">
      <header className="top">
        <div>
          <h1>Catatan <span>tugas</span> hari ini</h1>
          <p className="sub">
            {count('in progress')} sedang dikerjakan, {count('to-do')} belum dimulai, {count('done')} selesai.
          </p>
        </div>
        <button className="btn solid" onClick={() => setShowForm(true)}>+ Tambah Todo</button>
      </header>

      <div className="tools">
        <div className="chips">
          {['semua', ...STATUSES].map((s) => (
            <button key={s} className={filter === s ? 'chip on' : 'chip'} onClick={() => setFilter(s)}>{s}</button>
          ))}
        </div>
        <input className="search" type="search" placeholder="Cari judul tugas…" value={q} onChange={(e) => setQ(e.target.value)} aria-label="Cari tugas" />
      </div>

      {shown.length === 0 ? (
        <div className="empty">
          <p>{todos.length === 0 ? 'Belum ada tugas.' : 'Tidak ada tugas yang cocok.'}</p>
          <button className="btn solid" onClick={() => setShowForm(true)}>Tambah tugas</button>
        </div>
      ) : (
        <table className="ledger">
          <thead>
            <tr><th>Judul</th><th>Status</th><th>Prioritas</th><th>Deadline</th><th className="aksi">Aksi</th></tr>
          </thead>
          <tbody>
            {shown.map((t) => {
              const late = t.deadline < today && t.status !== 'done'
              return (
                <tr key={t.id} className={t.status === 'done' ? 'is-done' : ''}>
                  <td data-label="Judul" className="ttl">{t.title}</td>
                  <td data-label="Status"><StatusBadge status={t.status} /></td>
                  <td data-label="Prioritas"><Priority level={t.priority} /></td>
                  <td data-label="Deadline" className={late ? 'late' : ''}>
                    <span>{fmtDate(t.deadline)}{late && <small> (lewat)</small>}</span>
                  </td>
                  <td className="aksi">
                    <Link to={`/todo/${t.id}`} className="btn small solid">Lihat</Link>
                    <button className="btn small danger" onClick={() => setToDelete(t)}>Hapus</button>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      )}

      {showForm && <TodoForm mode="add" onSubmit={onAdd} onClose={() => setShowForm(false)} />}
      {toDelete && <ConfirmDialog todo={toDelete} onConfirm={onDelete} onClose={() => setToDelete(null)} />}
    </main>
  )
}