export const STATUSES = ['to-do', 'in progress', 'done']
export const PRIORITIES = ['low', 'medium', 'high']

export const initialTodos = [
  { id: 1, title: 'Mengerjakan Proyek Computer Vision', description: 'Menyelesaikan proyek akhir computer vision tentang deteksi penggunaan helm.', priority: 'high', deadline: '2026-12-11', status: 'in progress' },
  { id: 2, title: 'Mempelajari Dasar Zustand', description: 'Baca dokumentasi resmi, lalu coba buat store sederhana untuk keranjang belanja.', priority: 'low', deadline: '2026-11-25', status: 'in progress' },
  { id: 3, title: 'Membuat Website Portfolio', description: 'Susun halaman beranda, proyek, dan kontak. Deploy ke Vercel.', priority: 'medium', deadline: '2026-12-20', status: 'in progress' },
  { id: 4, title: 'Mempelajari React Hooks', description: 'Latihan useState, useEffect, dan useMemo lewat contoh kecil.', priority: 'low', deadline: '2026-11-18', status: 'to-do' },
  { id: 5, title: 'Mengumpulkan Laporan Praktikum', description: 'Laporan modul 4 dalam format PDF, kirim lewat e-learning.', priority: 'high', deadline: '2026-11-10', status: 'done' },
]