import Modal from './Modal'

export default function ConfirmDialog({ todo, onConfirm, onClose }) {
  return (
    <Modal title="Hapus tugas ini?" onClose={onClose}>
      <p className="confirm-text">“{todo.title}” akan dihapus dan tidak bisa dikembalikan.</p>
      <div className="actions">
        <button className="btn ghost" onClick={onClose}>Batal</button>
        <button className="btn danger" onClick={() => { onConfirm(todo.id); onClose() }}>Ya, hapus</button>
      </div>
    </Modal>
  )
}