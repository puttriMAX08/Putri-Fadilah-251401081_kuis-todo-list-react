export default function Toast({ toast }) {
  if (!toast) return null
  return (
    <div className="toast" role="status" key={toast.key}>
      {toast.msg}
    </div>
  )
}