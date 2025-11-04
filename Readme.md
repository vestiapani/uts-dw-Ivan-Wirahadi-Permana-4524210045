# 🧩 Anime Profile Card Generator

* **Nama Proyek:** Anime Profile Card Generator
* **Topik UTS:** Live Preview Generator (Topik Bebas)
* **Dibuat oleh:** Ivan Wirahadi Permana/4524210045
* **Mata Kuliah:** Desain Web
* **Tahun:** 2025

---

## 🎯 Deskripsi Proyek

Proyek ini merupakan implementasi dari tugas Ujian Tengah Semester dengan tema "Live Preview Generator", di mana pengguna dapat membuat kartu profil karakter anime secara interaktif.

web ini memungkinkan pengguna untuk:

* Mengisi data karakter melalui Panel Kontrol.
* Melihat hasil pratinjau kartu secara real-time di Area Pratinjau.
* Klik pada nama karakter untuk membuka gambar di tab baru.

Topik yang diangkat adalah **Anime Profile Card Generator**, yaitu alat sederhana untuk membuat kartu profil karakter dari anime favorit secara langsung.

## 🧱 Struktur Halaman

### 1️⃣ Header
Berisi judul utama dan deskripsi singkat proyek:
```html
<header>
  <h1>Anime Profile Card Generator</h1>
  <p>Buat kartu profil karaktermu secara langsung!</p>
</header>
````

### 2️⃣ Hero Section

  * Menampilkan tampilan pembuka dengan teks ajakan dan gambar ilustratif.
  * **Desktop:** gambar ditampilkan di samping teks.
  * **Mobile:** gambar dijadikan background hero section.
  * Terdapat tombol `Mulai Sekarang` yang akan men-scroll halaman ke bagian form Panel Kontrol.

### 3️⃣ Panel Kontrol (Form Input)

Bagian ini berisi input untuk mengisi data karakter:

  * Nama Karakter
  * Asal Anime
  * Tanggal Lahir Karakter
  * Deskripsi Singkat
  * URL Gambar Karakter

Formulir ini berada di dalam elemen `<section>` dengan `id="panel-kontrol"`.

### 4️⃣ Area Pratinjau

Menampilkan hasil *live preview* berdasarkan input pengguna. Struktur utamanya:

```html
<article class="area-pratinjau">
  <div class="kartu-anime">
    <img id="preview-gambar">
    <div class="info-karakter">
      <h3 id="preview-nama"></h3>
      <h4 id="preview-anime"></h4>
      <h4 id="preview-birthday"></h4>
      <p id="preview-deskripsi"></p>
    </div>
  </div>
</article>
```

### 5️⃣ Footer

Menampilkan informasi hak cipta dan nama pembuat proyek.

-----

## 💅 Styling & Layout (CSS)

  * Menggunakan pendekatan **mobile-first** (tampilan awal 1 kolom, lalu berubah ke 2 kolom saat layar lebar).
  * Menggunakan **Flexbox** dan **CSS Grid** untuk mengatur layout.
  * Font utama: "Poppins", sans-serif.
  * Warna utama: `#f02b63` (pink-merah) dengan aksen putih dan hitam.
  * Menggunakan `clamp()` untuk ukuran font responsif.
  * Hero section memiliki efek background image dan overlay otomatis pada mobile.
  * Efek `hover` halus pada tombol dan kartu pratinjau.

-----

## ⚙️ Interaktivitas (JavaScript)

**File:** `script.js`

### Fungsi Utama:

  * Menghubungkan input form (`input`, `textarea`) ke elemen pratinjau secara langsung (real-time).
  * Menggunakan event listener `input` untuk setiap elemen.
  * Jika input kosong → menampilkan teks default.
  * Jika input gambar kosong → menampilkan gambar placeholder bawaan.

Cuplikan Fungsi `updatePreview()`:

```javascript
function updatePreview() {
  previewNama.textContent = inputNama.value || "Nama Karakter";
  previewAnime.textContent = inputAnime.value || "Asal Anime";
  previewBirthday.textContent = inputBirthday.value || "Tanggal Lahir Karakter";
  previewDeskripsi.textContent = inputDeskripsi.value || "Deskripsi karakter akan muncul di sini.";

  if (inputGambar.value.trim() === "") {
    previewGambar.src = "Assets/akiyamaMizuki (2).jpg";
  } else {
    previewGambar.src = inputGambar.value;
  }
}
```

### Fitur Tambahan:

Nama karakter (`#preview-nama`) bisa diklik untuk membuka gambar karakter di tab baru:

```javascript
previewNama.addEventListener("click", function () {
  const url = inputGambar.value.trim();
  if (url) {
    window.open(url, "_blank");
  } else {
    alert("Masukkan URL gambar terlebih dahulu!");
  }
});
```

-----

## 📂 Struktur Folder

```
📁 uts-dw-Ivan Wirahadi Permana-4524210045
│
├── index.html
├── style.css
├── script.js
└── 📁 Assets/
    └── background.jpg
    └── akiyamaMizuki (2).jpg
```

-----

## 🧠 Konsep yang Diterapkan

| Aspek | Implementasi |
| :--- | :--- |
| **HTML Semantik** | Menggunakan `<header>`, `<main>`, `<footer>`, `<section>`, `<article>` |
| **Form & Aksesibilitas** | Setiap input memiliki `<label>` dengan atribut `for` yang sesuai |
| **CSS Responsif** | Mobile-first dengan media query `@media (min-width: 768px)` |
| **Flexbox & Grid** | Mengatur layout hero dan main section |
| **JavaScript DOM** | Menggunakan `querySelector()` dan `addEventListener("input")` |
| **Live Preview** | Update otomatis setiap ada perubahan input |
| **Fallback / Default Value**| Jika input kosong, menampilkan nilai default |
| **Interaktivitas Tambahan**| Klik nama karakter untuk membuka gambar |

-----

## 🧾 Petunjuk Penggunaan

1.  Buka file `index.html` di browser.
2.  Isi semua input pada bagian **Panel Kontrol**.
3.  Lihat hasil preview di bagian kanan atau bawah (tergantung ukuran layar).
4.  Klik nama karakter di pratinjau untuk membuka gambar di tab baru.

-----
## 💻 Screenshot Live Server
<img width="1899" height="925" alt="image" src="https://github.com/user-attachments/assets/680fd69b-1184-47c7-a49d-c5a863777154" />

<img width="1899" height="925" alt="image" src="https://github.com/user-attachments/assets/c47dba0f-9bc9-4d9f-a4db-db937b7525e4" />

-----

## 🧭 Persyaratan UTS yang Terpenuhi

- [x] Repositori GitHub sudah dibuat
- [x] Melakukan minimal 3 commit
- [x] Menerapkan HTML Semantik (header, main, footer)
- [x] Formulir sudah aksesibel (label + for/id)
- [x] Layout Mobile-First (1 kolom)
- [x] Layout Desktop (2 kolom) pakai Grid/Flexbox
- [x] Menerapkan JavaScript Live Preview (minimal 3 input)

-----

## 💻 Teknologi yang Digunakan

  * **HTML5**
  * **CSS3** (Flexbox, Grid, Responsive Design)
  * **Vanilla JavaScript** (DOM Manipulation)

-----

## 📜 Lisensi

Proyek ini dibuat untuk keperluan akademik Ujian Tengah Semester Mata Kuliah Desain Web.

© 2025 – Anime Profile Card Generator by vestiapani
