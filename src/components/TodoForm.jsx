import { useState } from 'react'
import Modal from './Modal'
import { STATUSES, PRIORITIES } from '../data/dummyTodos'

const empty = { title: '', description: '', status: 'to-do', priority: 'low', deadline: '' }

export default function TodoForm({ mode = 'add', initial, onSubmit, onClose }) {
  const [form, setForm] = useState(initial ? { ...initial } : empty)
  const [errors, setErrors] = useState({})

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))

  const submit = (e) => {
    e.preventDefault()
    const err = {}
    if (!form.title.trim()) err.title = 'Judul tidak boleh kosong'
    if (!form.deadline) err.deadline = 'Pilih tanggal deadline'
    setErrors(err)
    if (Object.keys(err).length) return
    onSubmit({ ...form, title: form.title.trim(), description: form.description.trim() })
    onClose()
  }

  return (
    <Modal title={mode === 'add' ? 'Tambah tugas' : 'Ubah tugas'} onClose={onClose}>
      <form onSubmit={submit} noValidate>
        <label>
          Judul
          <input value={form.title} onChange={set('title')} placeholder="Apa yang mau dikerjakan?" autoFocus />
          {errors.title && <small className="err">{errors.title}</small>}
        </label>
        <label>
          Deskripsi
          <textarea rows="3" value={form.description} onChange={set('description')} placeholder="Catatan tambahan (opsional)" />
        </label>
        <div className="row2">
          <label>
            Status
            <select value={form.status} onChange={set('status')}>
              {STATUSES.map((s) => <option key={s}>{s}</option>)}
            </select>
          </label>
          <label>
            Prioritas
            <select value={form.priority} onChange={set('priority')}>
              {PRIORITIES.map((p) => <option key={p}>{p}</option>)}
            </select>
          </label>
        </div>
        <label>
          Deadline
          <input type="date" value={form.deadline} onChange={set('deadline')} />
          {errors.deadline && <small className="err">{errors.deadline}</small>}
        </label>
        <div className="actions">
          <button type="button" className="btn ghost" onClick={onClose}>Batal</button>
          <button type="submit" className="btn solid">{mode === 'add' ? 'Simpan tugas' : 'Simpan perubahan'}</button>
        </div>
      </form>
    </Modal>
  )
}