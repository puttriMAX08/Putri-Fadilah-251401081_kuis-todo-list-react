# Catatan Tugas – To-Do List React.js

Kuis Praktikum Pemrograman Web : Aplikasi To-Do List dengan React.js + Vite.
Data dummy dan dikelola dengan React State, sehingga setiap perubahan langsung tampil tanpa reload.

## Fitur
- Menampilkan daftar tugas (judul, status, prioritas, deadline)
- Melihat detail tugas di halaman `/todo/:id`
- Menambah tugas lewat formulir modal (dengan validasi)
- Mengubah tugas lewat formulir modal dari halaman detail
- Menghapus tugas dengan dialog konfirmasi
- Umpan balik berupa toast setelah tambah, ubah, dan hapus
- Filter status, pencarian judul, dan penanda deadline yang sudah lewat
- Responsif: tabel berubah menjadi kartu di layar kecil

## Struktur data tugas
```js
{ id: 1, title: '...', description: '...', priority: 'low | medium | high',
  deadline: 'YYYY-MM-DD', status: 'to-do | in progress | done' }
```

## Screenshot

### Daftar tugas
![Semua tugas](screenshots/semua.png)
![Status to-do](screenshots/todo.png)
![Status in progress](screenshots/inprogress.png)
![Status done](screenshots/done.png)

### Tambah tugas
![Form tambah](screenshots/form_tambah.png)
![Hasil tambah1](screenshots/tambah1.png)
![Hasil tambah2](screenshots/tambah2.png)

### Detail dan ubah tugas
![Detail](screenshots/detail.png)
![Ubah](screenshots/ubah.png)

### Hapus tugas
![Konfirmasi hapus](screenshots/validasi_hapus.png)
![Setelah dihapus](screenshots/dihapus.png)

### Pencarian dan tampilan kecil
![Cari judul](screenshots/cari.png)
![Tampilan kecil](screenshots/kecil.png)

### Detail berdasarkan id
![id 1](screenshots/cari_id1.png)
![id 2](screenshots/cari_id2.png)
![id 3](screenshots/cari_id3.png)
![id 6](screenshots/cari_id6.png)