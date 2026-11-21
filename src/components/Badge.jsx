export function StatusBadge({ status }) {
  return <span className={`badge st-${status.replace(' ', '-')}`}>{status}</span>
}
export function Priority({ level }) {
  return (
    <span className={`prio pr-${level}`}>
      <i aria-hidden="true" />
      {level}
    </span>
  )
}
export const fmtDate = (d) =>
  d ? new Date(d + 'T00:00:00').toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' }) : '-'