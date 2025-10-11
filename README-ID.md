[English](./README.md) | [Bahasa Indonesia](./README-ID.md)
---
# Proyek JawaScript

JawaScript adalah sebuah transpiler untuk bahasa pemrograman sederhana yang terinspirasi dari bahasa Jawa, dirancang agar lebih ekspresif dan mudah dibaca bagi developer yang familiar dengan bahasa tersebut.

## Daftar Isi

- [Fitur Bahasa](#fitur-bahasa)
  - [Blok Kode: `terus` & `mbari`](#blok-kode-terus--mbari)
  - [Komentar](#komentar)
  - [Variabel](#variabel)
  - [Konsol dan Input Pengguna](#konsol-dan-input-pengguna)
  - [Tipe Data](#tipe-data)
  - [Sistem Tipe Opsional](#sistem-tipe-opsional)
- [Alur Kontrol](#alur-kontrol)
  - [Operator Ternary: `ta` & `lek gak`](#operator-ternary-ta--lek-gak)
  - [Fungsi](#fungsi)
  - [Arrow Function: `lakoni`](#arrow-function-lakoni)
  - [Penanganan Error](#penanganan-error)
  - [Operasi Asinkron](#operasi-asinkron)
  - [Tuple (Data Pasangan Immutable)](#tuple-data-pasangan-immutable)
- [Fitur Unik Jawascript](#fitur-unik-jawascript)
  - [Pengecekan Null/Undefined: `iku ono` & `iku ilang`](#pengecekan-nullundefined-iku-ono--iku-ilang)
- [Operator dan Pembanding](#operator-dan-pembanding)
  - [Optional Chaining: `.mungkin.`](#optional-chaining-mungkin)
  - [Nullish Coalescing Operator: `utowoYenKosong`](#nullish-coalescing-operator-utowoyenkosong)
  - [Operator Bitwise](#operator-bitwise)
- [Kata Kunci Khusus](#kata-kunci-khusus)
- [Sistem Modul: `jupukno` & `metokno`](#sistem-modul-jupukno--metokno)
  - [Ekspor Ulang sebagai Namespace: `metokno kabeh dadi ...`](#ekspor-ulang-sebagai-namespace-metokno-kabeh-dadi)
  - [Impor Dinamis: `jupukno(...)`](#impor-dinamis-jupukno)
- [Class & Pewarisan (OOP)](#class--pewarisan-oop)
- [Metaprogramming: `Perantara` (Proxy) dan `Pantulan` (Reflect)](#metaprogramming-perantara-proxy-dan-pantulan-reflect)
- [Fungsi Bawaan](#fungsi-bawaan)
  - [Nilai Global](#nilai-global)
  - [Konstruktor Global](#konstruktor-global)
  - [Objek `Mtk` (untuk `Math`)](#objek-mtk-untuk-math)
  - [Objek `Tanggalan` (untuk `Date`)](#objek-tanggalan-untuk-date)
  - [Objek `DataJSON` (untuk `JSON`)](#objek-datajson-untuk-json)
  - [Fungsi Global](#fungsi-global)
  - [Method Promise: `.banjur` & `.nyekel`](#method-promise-banjur--nyekel)
  - [Method Array & String](#method-array--string)
- [Penggunaan CLI](#penggunaan-cli)

Kode ditulis dalam file dengan ekstensi `.jawa`.

### Blok Kode: `terus` & `mbari`

Jawascript adalah bahasa berbasis blok. Semua blok kode (untuk fungsi, perulangan, kondisional, dll.) harus dimulai dengan kata kunci `terus` dan diakhiri dengan kata kunci `mbari`.

```jawascript
lek (tenan) terus
  // kode di dalam blok
mbari
```

### Komentar

- **Komentar satu baris:** Dimulai dengan `//`.
- **Komentar multi-baris:** Dimulai dengan `/*` dan diakhiri dengan `*/`.

### Variabel

- `iki iku`: Untuk mendeklarasikan variabel konstan (tidak bisa diubah nilainya).
- `jarno`: Untuk mendeklarasikan variabel yang bisa diubah (mutable).

```jawascript
// Variabel konstan
iki iku jeneng yoiku "Budi"

// Variabel yang bisa diubah
jarno umur yoiku 25
umur yoiku umur tambah 1 // umur sekarang 26
```

### Konsol dan Input Pengguna

Jawascript menyediakan objek `cetakno` (setara dengan `console` JavaScript) untuk logging dan debugging, dan `takon` untuk input pengguna.

| Method | Deskripsi |
| :--- | :--- |
| `cetakno(...)` | Mencetak output ke konsol. |
| `cetakno.peringatan(...)` | Mencatat pesan peringatan ke konsol. |
| `cetakno.kesalahan(...)` | Mencatat pesan error ke konsol. |
| `cetakno.info(...)` | Mencatat pesan informasi ke konsol. |
| `cetakno.debug(...)` | Mencatat pesan debug ke konsol. |
| `cetakno.tabel(data)` | Menampilkan data tabular sebagai tabel. |
| `cetakno.hitung(label)` | Mencatat berapa kali `hitung()` dipanggil dengan label tertentu. |
| `cetakno.waktu(label)` | Memulai timer yang bisa Anda gunakan untuk melacak berapa lama sebuah operasi berlangsung. |
| `cetakno.akhirWaktu(label)` | Menghentikan timer yang sebelumnya dimulai dengan memanggil `cetakno.waktu()`. |
| `cetakno.grup(label)` | Membuat grup inline baru di konsol. |
| `cetakno.akhirGrup()` | Mengakhiri grup inline saat ini di konsol. |
| `takon(pesan)` | Meminta input dari pengguna dan mengembalikan nilainya. |

```jawascript
cetakno("Halo Dunyo!")

jarno jenengmu yoiku takon("Sopo jenengmu? ")
cetakno("Sugeng rawuh, " tambah jenengmu)

cetakno.peringatan("Iki peringatan!")
cetakno.kesalahan("Iki kesalahan!")
cetakno.waktu("operasiku")
// ... beberapa kode ...
cetakno.akhirWaktu("operasiku")
```

### Tipe Data

Kata kunci untuk tipe data primitif dan nilai.

- `tenan`: Merepresentasikan nilai boolean `true`.
- `gak`: Merepresentasikan nilai boolean `false`.
- `kosong`: Merepresentasikan nilai `null`.
- `oraDidefinisikan`: Merepresentasikan nilai `undefined`.

```jawascript
jarno isihSinau yoiku tenan
lek (isihSinau plek tenan) terus
  cetakno("Semangat!")
mbari
```

### Sistem Tipe Opsional

Jawascript sekarang mendukung sistem tipe statis opsional, mirip dengan GDScript atau TypeScript. Ini memungkinkan Anda untuk menambahkan anotasi tipe pada variabel, parameter fungsi, dan nilai kembalian fungsi. Meskipun tidak wajib, menggunakan tipe dapat secara signifikan meningkatkan keterbacaan kode, membantu menangkap error lebih awal selama pengembangan, dan meningkatkan dukungan IDE dengan autocompletion dan alat refactoring yang lebih baik.

**Keuntungan Utama:**
-   **Deteksi Error Lebih Awal:** Menangkap bug terkait tipe sebelum runtime.
-   **Keterbacaan yang Lebih Baik:** Kode menjadi dokumentasi diri, membuatnya lebih mudah dipahami.
-   **Dukungan IDE yang Lebih Baik:** Autocompletion, pengecekan tipe, dan kemampuan refactoring yang lebih baik.

**Sintaks:**

-   **Deklarasi Variabel:**
```jawascript
jarno umur: Angka = 30;
iki iku jeneng: Teks = "Budi";
jarno isAktif: Logika = tenan;
```

-   **Parameter dan Tipe Kembalian Fungsi:**
```jawascript
gawe sapa(jeneng: Teks): Teks terus
  balekno "Halo " tambah jeneng;
mbari

gawe tambah(a: Angka, b: Angka): Angka terus
  balekno a tambah b;
mbari
```

-   **Arrow Function (Parameter dan Tipe Kembalian):**
 ```jawascript
jarno getUmur = (tahunLahir: Angka): Angka lakoni
  balekno 2025 kurang tahunLahir;

jarno cetakInfo = (pesan: Teks, jumlah: Angka): OraOno lakoni terus
  cetakno(pesan tambah ": " tambah jumlah);
mbari;
 ```

**Tipe Dasar yang Didukung:**
-   `Angka` (JavaScript `number`)
-   `Teks` (JavaScript `string`)
-   `Logika` (JavaScript `boolean`)
-   `Kosong` (JavaScript `null`)
-   `OraDidefinisikan` (JavaScript `undefined`)
-   `Daftar` (JavaScript `Array`)
-   `Obyek` (JavaScript `Object`)
-   `Sembarang` (JavaScript `any`)
-   `OraOno` (JavaScript `void`)

**Cara Kerjanya:**
Jawascript mentranspilasi kode dengan anotasi tipe menjadi sintaks TypeScript yang valid. Anda kemudian dapat menggunakan kompiler TypeScript (`tsc`) untuk melakukan pengecekan tipe statis dan menghasilkan output JavaScript akhir.

### Alur Kontrol

Atur alur program Anda dengan kondisional, perulangan, dan pernyataan switch.

- **Kondisional**
  - `lek (kondisi)`: Memulai blok kondisional yang dieksekusi jika kondisi benar.
  - `lek misale (kondisi)`: Blok kondisional tambahan (`else if`).
  - `liyane`: Blok yang dieksekusi jika semua kondisi sebelumnya salah (`else`).

### Operator Ternary: `ta` & `lek gak`

Jawascript menyediakan ekspresi kondisional yang ringkas, mirip dengan operator ternary JavaScript (`? :`), menggunakan kata kunci `ta` dan `lek gak`.

- `kondisi ta nilai_jika_benar lek gak nilai_jika_salah`: Mengevaluasi `kondisi`. Jika benar, mengembalikan `nilai_jika_benar`; jika tidak, mengembalikan `nilai_jika_salah`.

```jawascript
// JS: const status = age >= 18 ? 'Adult' : 'Minor';

iki iku umur yoiku 20;
iki iku status yoiku umur luwihGedhePodo 18 ta 'Dewasa' lek gak 'Anak-anak';
cetakno("Status:", status); // Output: Dewasa

jarno umurLiyo yoiku 15;
cetakno("Status:", umurLiyo luwihGedhePodo 18 ta 'Dewasa' lek gak 'Anak-anak'); // Output: Anak-anak
```

- **Perulangan**
  - `kanggo (init; cond; iter)`: Konstruksi perulangan `for`.
  - `selagi (kondisi)`: Konstruksi perulangan `while`.
  - `lakoni ... selagi (kondisi)`: Konstruksi perulangan `do...while`, memastikan blok dieksekusi setidaknya sekali.

### Perulangan `for...in`

Jawascript mendukung iterasi atas properti enumerable dari sebuah objek menggunakan perulangan `kanggo...ing`, mirip dengan perulangan `for...in` di JavaScript.

- `kanggo (iki iku key ing object) terus ... mbari`: Melakukan iterasi atas kunci (nama properti) dari sebuah objek.

```jawascript
iki iku pengguna yoiku { jeneng: 'Sastro', umur: 30, kota: 'Jogja' };

cetakno('Properti pengguna:');
kanggo (iki iku kunci ing pengguna) terus
  cetakno(`${kunci}: ${pengguna[kunci]}`);
mbari
// Output:
// jeneng: Sastro
// umur: 30
// kota: Jogja
```

### Perulangan `for...of` (`kanggo...soko...`)

Untuk melakukan iterasi atas nilai dari objek yang dapat diulang (seperti Array, String, Map, atau Set), Jawascript menyediakan perulangan `kanggo...soko...`. Ini berbeda dari `kanggo...ing` (`for...in`), yang melakukan iterasi atas kunci atau indeks.

- `kanggo (iki iku value soko iterable) terus ... mbari`: Melakukan iterasi atas nilai dari sebuah iterable.

```jawascript
// Contoh dengan Array
iki iku woh_wohan yoiku ['apel', 'jeruk', 'mangga'];
kanggo (iki iku woh soko woh_wohan) terus
  cetakno(woh);
mbari
// Output:
// apel
// jeruk
// mangga

// Contoh dengan String
iki iku jeneng yoiku "Slamet";
kanggo (iki iku huruf soko jeneng) terus
  cetakno(huruf);
mbari
// Output:
// S
// l
// a
// m
// e
// t
```

- **Pernyataan Switch**
  - `pilih (variabel)`: Konstruksi pernyataan `switch`.
  - `kalo (nilai):`: Blok `case` di dalam switch.
  - `yowes:`: Blok `default` di dalam switch.

- **Kontrol Perulangan/Switch**
  - `mandek`: Keluar dari perulangan atau pernyataan switch (`break`).
  - `lanjutno`: Melompat ke iterasi berikutnya dari sebuah perulangan (`continue`).

```jawascript
// Contoh if/else
jarno nilai yoiku 85
lek (nilai luwihGedhe 90) terus
  cetakno("Istimewa")
mbari lek misale (nilai luwihGedhe 75) terus
  cetakno("Baik")
mbari liyane terus
  cetakno("Cukup")
mbari

// Contoh perulangan for
kanggo (jarno i yoiku 0; i luwihCilik 3; i++) terus
  cetakno(i)
mbari

// Contoh perulangan do...while
jarno hitung yoiku 0
lakoni terus
  cetakno("Hitungan: " tambah hitung)
  hitung++
mbari selagi (hitung luwihCilik 3)
```

### Fungsi

- `gawe (nama)(params)`: Mendefinisikan sebuah fungsi.
- `balekno (nilai)`: Mengembalikan nilai dari sebuah fungsi.
- `asilno (nilai)`: Menjeda dan melanjutkan fungsi generator, mengembalikan nilai dari generator (`yield`).

```jawascript
gawe hitungLuas(panjang, lebar) terus
  balekno panjang ping lebar
mbari

iki iku luas yoiku hitungLuas(10, 5)
cetakno(luas) // -> 50

// Contoh fungsi generator menggunakan asilno
gawe tenangan idGenerator() terus
  jarno id yoiku 0
  selagi (tenan) terus
    asilno id++
  mbari
mbari

jarno generator yoiku idGenerator anyar()
cetakno(generator.next().value) // Output: 0
cetakno(generator.next().value) // Output: 1
```

### Arrow Function: `lakoni`

Jawascript mendukung sintaks yang lebih pendek untuk fungsi, setara dengan arrow function (`=>`) di JavaScript, menggunakan kata kunci `lakoni`. `lakoni` berarti "lakukan" atau "kerjakan", yang dengan sempurna menangkap esensi pemetaan parameter ke sebuah output.

- **Return Implisit:** Untuk fungsi satu baris, nilai kembaliannya implisit.
- **Badan Blok:** Untuk fungsi multi-baris, Anda dapat menggunakan kata kunci `terus` dan `mbari`.

```jawascript
// JS: const multiply = (a, b) => a * b;
iki iku kalikan yoiku (a, b) lakoni a ping b;
cetakno(kalikan(7, 8)); // -> 56

// Digunakan sebagai callback
iki iku angka yoiku [1, 2, 3];
iki iku angkaDikaliDua yoiku angka.petakake(n lakoni n ping 2);
cetakno(angkaDikaliDua); // -> [2, 4, 6]

// Dengan badan blok
iki iku sapa yoiku (jeneng) lakoni terus
  iki iku sapaan yoiku "Sugeng rawuh, " tambah jeneng;
  balekno sapaan;
mbari;
cetakno(sapa("Sastro")); // -> Sugeng rawuh, Sastro
```

### Penanganan Error

- `cobak`: Memulai blok untuk menguji potensi error (`try`).
- `nyekel (error)`: Blok yang dieksekusi jika terjadi error di blok `cobak` (`catch`).
- `pungkasan`: Blok yang selalu dieksekusi setelah `cobak` dan `nyekel`, terlepas dari hasilnya (`finally`).
- `uncalen (nilai)`: Melempar error kustom (`throw`).

```jawascript
cobak terus
  uncalen "Waduh, error!"
mbari nyekel (e) terus
  cetakno("Error tertangkap: " tambah e)
mbari pungkasan terus
  cetakno("Ini selalu dijalankan")
mbari
```

### Operasi Asinkron

- `tenangan`: Mendeklarasikan fungsi asinkron (`async`).
- `enteni`: Menjeda eksekusi fungsi asinkron untuk menunggu Promise selesai (`await`).

```jawascript
// Anggap ada fungsi yang mengembalikan Promise
gawe ambilData() { ... }

tenangan gawe prosesData() terus
  cetakno("Mulai mengambil data...")
  iki iku data yoiku enteni ambilData()
  cetakno("Data berhasil diambil:", data)
mbari
```

### Tuple (Data Pasangan Immutable)

Jawascript memiliki tipe data `Tuple` yang unik, mirip dengan array tetapi isinya tidak dapat diubah (immutable) setelah dibuat. Ini ideal untuk data yang harus tetap konstan, seperti koordinat atau pasangan nilai.

Untuk membuat `Tuple`, Anda bisa menggunakan fungsi `tuple(...)`.

```jawascript
// Membuat Tuple koordinat
iki iku koordinat yoiku tuple(10, 20)
cetakno(koordinat[0]) // Output: 10
cetakno(koordinat[1]) // Output: 20

// Mencoba mengubah isi Tuple (ini tidak akan berhasil karena sifatnya immutable)
cobak terus
  koordinat[0] = 5 // Ini tidak akan mengubah nilai
mbari nyekel (e) terus
  cetakno("Error saat mengubah tuple:", e.pesan) // Jika terjadi error, akan ditangkap di sini
mbari
cetakno(koordinat[0]) // Output: Tetap 10

// Tuple bisa berisi tipe data yang berbeda
iki iku infoPengguna yoiku tuple("Budi", 28, tenan)
cetakno(infoPengguna[0]) // Output: "Budi"
cetakno(infoPengguna[1]) // Output: 28
```

## Fitur Unik Jawascript

Untuk memenuhi visi menjadi lebih sederhana dan lebih ekspresif daripada JavaScript, Jawascript memperkenalkan syntactic sugar yang unik untuk pola-pola umum.

### Pengecekan Null/Undefined: `iku ono` & `iku ilang`

Pengecekan `null` atau `undefined` adalah tugas yang sangat umum. Jawascript menyederhanakannya dengan dua kata kunci khusus: `ono` (ada) dan `ilang` (hilang/tidak ada).

- `variabel iku ono`: Memeriksa apakah sebuah variabel **TIDAK** `null` atau `undefined`.
- `variabel iku ilang`: Memeriksa apakah sebuah variabel **ADALAH** `null` atau `undefined`.

Ini menyediakan cara yang lebih mudah dibaca dan tidak rentan error untuk menangani nilai yang mungkin kosong. Di balik layar, `iku ilang` ditranspilasi menjadi `== null`, yang merupakan trik JavaScript terkenal untuk memeriksa `null` dan `undefined` secara bersamaan.

```jawascript
jarno varKosong yoiku kosong; // null
jarno varLain;

jarno varIsi yoiku 0;

// Cek ketiadaan
lek (varKosong iku ilang) terus
  cetakno('varKosong tidak ada.'); // Ini akan berjalan
mbari

lek (varLain iku ilang) terus
  cetakno('varLain juga tidak ada.'); // Ini juga akan berjalan
mbari

// Cek keberadaan
lek (varIsi iku ono) terus
  cetakno('varIsi ada, nilainya adalah: ', varIsi); // Ini akan berjalan
mbari

lek (varKosong iku ono) terus
  // Blok ini tidak akan berjalan
mbari liyane terus
  cetakno('varKosong tidak ada.');
mbari
```

## Operator dan Pembanding

Jawascript menggantikan operator umum JavaScript dengan kata-kata bahasa Jawa untuk membuat kode lebih ekspresif.

**Penting:** Saat menggunakan sebagian besar operator ini, Anda **harus** memberikan spasi sebelum dan sesudahnya. Pengecualian utama adalah `ora` (`!`), yang biasanya ditempatkan sebelum nilai atau grup.

**Benar:** `jarno hasil yoiku 5 tambah 3`
**Salah:** `jarno hasil yoiku 5'tambah'3`

| Operator Jawa | Ekuivalen JavaScript | Deskripsi |
| :--- | :--- | :--- |
| `yoiku` | `=` | Penugasan |
| `tambah` | `+` | Penjumlahan |
| `kurang` | `-` | Pengurangan |
| `ping` | `*` | Perkalian |
| `bagi` | `/` | Pembagian |
| `siso` | `%` | Modulo (sisa bagi) |
| `pangkat` | `**` | Pangkat |
| `tambahKaro` | `+=` | Penugasan penjumlahan |
| `kurangKaro` | `-=` | Penugasan pengurangan |
| `pingKaro` | `*=` | Penugasan perkalian |
| `bagiKaro` | `/=` | Penugasan pembagian |
| `sisoKaro` | `%=` | Penugasan modulo |
| `plek` | `===` | Persamaan ketat (nilai dan tipe sama) |
| `podo` | `==` | Persamaan longgar (nilai sama) |
| `gakPlek` | `!==` | Ketidaksamaan ketat |
| `gakPodo` | `!=` | Ketidaksamaan longgar |
| `luwihGedhe` | `>` | Lebih besar dari |
| `luwihCilik` | `<` | Lebih kecil dari |
| `luwihGedhePodo`| `>=` | Lebih besar dari atau sama dengan |
| `luwihCilikPodo`| `<=` | Lebih kecil dari atau sama dengan |
| `lan` | `&&` | Logika AND |
| `utawa` | `||` | Logika OR |
| `ora` | `!` | Logika NOT |
| `ikuJinise` | `instanceof` | Memeriksa apakah sebuah objek adalah instance dari kelas tertentu |
| `tipene` | `typeof` | Memeriksa tipe data dari sebuah nilai |
| `hapusen` | `delete` | Menghapus properti dari sebuah objek |
| `kosongno` | `void` | Mengevaluasi ekspresi dan mengembalikan `undefined` |
| `ing` | `in` | Memeriksa apakah sebuah properti ada di dalam objek |

### Optional Chaining: `.mungkin.`

Jawascript menyediakan cara aman untuk mengakses properti dari objek yang mungkin `null` atau `undefined` tanpa menyebabkan error. Ini dicapai dengan menggunakan sintaks `.mungkin.`, mirip dengan operator `?.` di JavaScript.

- `.mungkin.`: Mengakses properti dengan aman. Jika ada bagian dari rantai yang `null` atau `undefined`, ekspresi akan berhenti dan mengembalikan `undefined`.

```jawascript
iki iku pengguna yoiku { jeneng: 'Sastro', alamat: { jalan: 'Jl. Kenangan' } };
iki iku penggunaKosong yoiku kosong;

// Mengakses properti yang ada
iki iku namaJalan yoiku pengguna.alamat.mungkin.jalan;
cetakno('Nama Jalan:', namaJalan); // Output: Jl. Kenangan

// Mengakses properti yang tidak ada
iki iku kodePos yoiku pengguna.alamat.mungkin.kodePos;
cetakno('Kode Pos (tidak ada):', kodePos); // Output: undefined

// Mengakses properti dari objek null
iki iku namaJalanKosong yoiku penggunaKosong.mungkin.alamat.mungkin.jalan;
cetakno('Nama Jalan dari objek null:', namaJalanKosong); // Output: undefined
```

### Nullish Coalescing Operator: `utowoYenKosong`

Operator ini menyediakan cara untuk menetapkan nilai default untuk variabel yang `null` atau `undefined`. Tidak seperti operator OR logika (`||`), `utowoYenKosong` hanya akan menggunakan nilai default jika sisi kiri benar-benar `null` atau `undefined`, bukan untuk nilai falsy lainnya seperti `0` atau `''`.

- `nilai utowoYenKosong nilaiDefault`: Mengembalikan `nilai` jika tidak `null` atau `undefined`; jika tidak, mengembalikan `nilaiDefault`.

```jawascript
iki iku nilaiNol yoiku 0;
iki iku nilaiKosong yoiku kosong;
iki iku nilaiOraDidefinisikan yoiku oraDidefinisikan;
iki iku nilaiTeksKosong yoiku '';

cetakno('Nilai Nol utowoYenKosong 10:', nilaiNol utowoYenKosong 10); // Output: 0
cetakno('Nilai Kosong utowoYenKosong 10:', nilaiKosong utowoYenKosong 10); // Output: 10
cetakno('Nilai OraDidefinisikan utowoYenKosong 10:', nilaiOraDidefinisikan utowoYenKosong 10); // Output: 10
cetakno('Nilai Teks Kosong utowoYenKosong 10:', nilaiTeksKosong utowoYenKosong 10); // Output: ''

// Bandingkan dengan OR logika (utawa)
cetakno('Nilai Nol utawa 10:', nilaiNol utawa 10); // Output: 10 (karena 0 adalah falsy)
```

### Operator Bitwise

Jawascript menyediakan serangkaian kata kunci untuk melakukan operasi bitwise, yang memanipulasi nilai pada level bit biner. Ini berguna untuk pemrograman tingkat rendah, manajemen flag, dan algoritma tertentu.

| Operator Jawa | Ekuivalen JavaScript | Deskripsi |
| :--- | :--- | :--- |
| `lanbit` | `&` | Bitwise AND |
| `utawabit` | `|` | Bitwise OR |
| `xor` | `^` | Bitwise XOR (Exclusive OR) |
| `walik` | `~` | Bitwise NOT (Inversi) |
| `geserKiwo` | `<<` | Geser Kiri |
| `geserTengen`| `>>` | Geser Kanan |
| `geserTengenNol`| `>>>` | Geser Kanan dengan Isi Nol |

**Contoh:**
```jawascript
iki iku a yoiku 5; // Biner: 0101
iki iku b yoiku 3; // Biner: 0011

cetakno('a lanbit b:', a lanbit b); // Output: 1 (0001)
cetakno('a utawabit b:', a utawabit b); // Output: 7 (0111)
cetakno('a xor b:', a xor b); // Output: 6 (0110)
cetakno('walik a:', walik a); // Output: -6 (Biner: 11111111111111111111111111111010)

cetakno('a geserKiwo 1:', a geserKiwo 1); // Output: 10 (1010)
cetakno('a geserTengen 1:', a geserTengen 1); // Output: 2 (0010)
```

**Contoh:**
```jawascript
iki iku angkaSiji yoiku 10
jarno angkaLoro yoiku 4

// Aritmatika
jarno hasilTambah yoiku angkaSiji tambah angkaLoro // -> 14
cetakno(2 pangkat 3) // -> 8

// Perbandingan & Logika
lek (hasilTambah luwihGedhe 10 lan ora (angkaSiji podo 0)) terus
  cetakno("Hasilnya lebih besar dari 10 DAN angkaSiji bukan 0")
mbari

// Penugasan
jarno skorku yoiku 100
skorku kurangKaro 10 // skorku sekarang 90
cetakno(skorku)

// Contoh untuk ikuJinise
kelas Mobil terus
  wujudno(merk) terus
    iki.merk yoiku merk
  mbari
mbari
jarno mobilku yoiku Mobil anyar("Toyota")
cetakno(mobilku ikuJinise Mobil) // Output: tenan

// Contoh untuk tipene
cetakno(tipene "halo") // Output: "string"

// Contoh untuk hapusen
jarno obj yoiku { a: 1, b: 2 }
hapusen obj.a
cetakno(obj.a) // Output: oraDidefinisikan

// Contoh untuk ing
jarno person yoiku { jeneng: "Budi", umur: 30 }
cetakno("jeneng" ing person) // Output: tenan
cetakno("alamat" ing person) // Output: gak
```

## Kata Kunci Khusus

Jawascript menyertakan beberapa kata kunci khusus yang menyediakan fungsionalitas spesifik atau merujuk pada konteks tertentu.

| Kata Kunci Jawa | Ekuivalen JavaScript | Deskripsi |
| :--- | :--- | :--- |
| `iki` | `this` | Merujuk pada instance objek saat ini. |
| `soko` | `of` | Digunakan dalam perulangan `kanggo...soko` (`for...of`) untuk iterasi atas nilai dari objek iterable. |
| `debug` | `debugger` | Memanggil fungsi debugger JavaScript, menjeda eksekusi. |
| `tetep` | `static` | Mendefinisikan method atau properti statis di dalam kelas, yang dimiliki oleh kelas itu sendiri bukan oleh instance. |
| `entuk` | `get` | Mendefinisikan method getter di dalam kelas, digunakan untuk mengambil nilai sebuah properti. |
| `pasang` | `set` | Mendefinisikan method setter di dalam kelas, digunakan untuk mengatur nilai sebuah properti. |

**Contoh:**
```jawascript
// Contoh untuk iki (this) - sudah dibahas di bagian Class & Pewarisan

// Contoh untuk soko (for...of)
jarno daftarAngka yoiku [1, 2, 3]
kanggo (jarno angka soko daftarAngka) terus
  cetakno(angka) // Output: 1, 2, 3
mbari

// Contoh untuk debug
// debug // Hapus komentar untuk mengaktifkan debugger

// Contoh untuk tetep (static)
kelas Utilitas terus
  tetep gawe sapa() terus
    cetakno("Halo dari Utilitas!")
  mbari
mbari
Utilitas.sapa() // Output: "Halo dari Utilitas!"

// Contoh untuk entuk (get) dan pasang (set)
kelas Kotak terus
  wujudno(lebar, dhuwur) terus
    iki._lebar yoiku lebar
    iki._dhuwur yoiku dhuwur
  mbari

  entuk area terus
    balekno iki._lebar ping iki._dhuwur
  mbari

  pasang ukuran(nilai) terus
    iki._lebar yoiku nilai
    iki._dhuwur yoiku nilai
  mbari
mbari

jarno kotakku yoiku Kotak anyar(5, 10)
cetakno(kotakku.area) // Output: 50
kotakku.ukuran yoiku 7
cetakno(kotakku.area) // Output: 49
```

## Sistem Modul: `jupukno` & `metokno`

Jawascript mendukung sistem modul untuk membantu Anda mengatur kode ke dalam beberapa file.

- `metokno { ... }`: Untuk mengekspor variabel atau fungsi tertentu/bernama.
- `metokno biasane ...`: Untuk mengekspor satu nilai default dari sebuah file.
- `jupukno ... soko '...'`: Untuk mengimpor kode dari file lain.
- `biasane`: Digunakan dengan `jupukno` dan `metokno` untuk menentukan impor/ekspor default.
- `dadi`: Untuk mengganti nama impor (`as`).

### Ekspor Ulang sebagai Namespace: `metokno kabeh dadi ...`

Sintaks ini memungkinkan Anda untuk mengekspor ulang semua ekspor dari modul lain sebagai satu objek namespace.

```jawascript
// JS: export * as utils from './utils.js';

// Jawascript:
metokno kabeh dadi util soko './util_export.js';

// Contoh penggunaan (anggap util_export.js mengekspor `a` dan `b`)
// cetakno(util.a);
```

### Impor Dinamis: `jupukno(...)`

Jawascript mendukung impor dinamis, memungkinkan Anda memuat modul sesuai permintaan. Ini berguna untuk pemisahan kode atau memuat modul secara kondisional.

```jawascript
// JS: import('./module.js').then(module => console.log(module));

// Jawascript:
jupukno('./modul_dinamis.js')
  .banjur(modul lakoni cetakno('Pesan dari modul dinamis:', modul.pesan))
  .nyekel(error lakoni cetakno('Error saat mengimpor modul:', error));

cetakno('Ini akan dieksekusi sebelum modul dinamis selesai diimpor.');
```

**Penting:** Path impor harus menunjuk ke file `.js` yang sudah ditranspilasi, bukan file sumber `.jawa`.

**Contoh:**

**`util.jawa`**
```jawascript
// util.jawa
gawe salam(jeneng) terus
  balekno "Sugeng rawuh, " tambah jeneng
mbari

iki iku VERSI yoiku "1.0"

// Ekspor bernama
metokno { salam }

// Ekspor default
metokno biasane VERSI
```

**`app.jawa`**
```jawascript
// app.jawa
// Impor default (VERSI) dan bernama (salam), ganti nama salam menjadi ngucapnoSalam
jupukno biasane versiAplikasi, { salam dadi ngucapnoSalam } soko './util.js'

cetakno("Versi:", versiAplikasi) // -> Versi: 1.0
cetakno(ngucapnoSalam("Doni")) // -> Sugeng rawuh, Doni
```

## Class & Pewarisan (OOP)

Jawascript juga mendukung Pemrograman Berorientasi Objek dasar.

- `kelas ...`: Untuk mendeklarasikan sebuah kelas.
- `wujudno(...)`: Konstruktor kelas.
- `turunan soko`: Untuk mewarisi dari kelas induk (`extends`).
- `induk(...)`: Untuk memanggil konstruktor kelas induk (`super`).
- `iki`: Merujuk pada instance objek saat ini (mirip dengan `this` di JavaScript).

**Contoh:**
```jawascript
// Kelas Induk
kelas Kewan terus
  wujudno(jeneng) terus
    iki.jeneng yoiku jeneng
  mbari

  mangan() terus
    cetakno(iki.jeneng tambah " lagi mangan.")
  mbari
mbari

// Kelas Anak
kelas Kucing turunan soko Kewan terus
  wujudno(jeneng) terus
    induk(jeneng) // memanggil konstruktor induk
  mbari

  meong() terus
    cetakno(iki.jeneng tambah " muni Meong!")
  mbari
mbari

jarno kucingku yoiku Kucing anyar("Tom")
kucingku.mangan()  // Method warisan
kucingku.meong()   // Method sendiri
```

## Metaprogramming: `Perantara` (Proxy) dan `Pantulan` (Reflect)

Jawascript mendukung metaprogramming tingkat lanjut melalui objek `Perantara` (Proxy) dan `Pantulan` (Reflect), yang memungkinkan Anda untuk mencegat dan mendefinisikan perilaku kustom untuk operasi bahasa fundamental.

-   `Perantara`: Sebuah objek yang membungkus objek lain (target) dan mencegat operasi seperti pencarian properti, penugasan, dan pemanggilan fungsi.
-   `Pantulan`: Objek bawaan yang menyediakan metode statis untuk operasi yang dicegat, memungkinkan Anda untuk memanggil perilaku default asli dari dalam handler proxy Anda.

**Kata Kunci:**

| Kata Kunci Jawa | Ekuivalen JavaScript | Deskripsi |
| :--- | :--- | :--- |
| `Perantara` | `Proxy` | Konstruktor Proxy. |
| `Pantulan` | `Reflect` | Objek Reflect. |
| `Pantulan.jupuk` | `Reflect.get` | Mengambil properti dari sebuah objek. |
| `Pantulan.pasang` | `Reflect.set` | Mengatur properti pada sebuah objek. |
| `Pantulan.bangun` | `Reflect.construct` | Membangun objek baru. |
| `...` | `...` | Dan semua method `Reflect` lainnya. |

**Contoh:**
Berikut cara membuat proxy yang mencatat akses properti dan memvalidasi nilai baru sebelum mengaturnya.

```jawascript
// 1. Objek target
iki iku target yoiku {
  pesan: 'Hello World',
  nilai: 100
};

// 2. Handler untuk proxy
iki iku handler yoiku {
  // Perangkap untuk mendapatkan properti
  jupuk: gawe(obj, prop) terus
    cetakno(`Mencoba mengambil properti: "${prop}"`);
    // Gunakan Pantulan.jupuk untuk perilaku default
    balekno Pantulan.jupuk(obj, prop);
  mbari,

  // Perangkap untuk mengatur properti
  pasang: gawe(obj, prop, value) terus
    cetakno(`Mencoba mengatur "${prop}" menjadi "${value}"`);
    lek (prop plek 'nilai' lan tipene value ora plek 'Angka') terus
      uncalen anyar Kesalahan('Nilai harus berupa angka!');
    mbari
    // Gunakan Pantulan.pasang untuk perilaku default
    balekno Pantulan.pasang(obj, prop, value);
  mbari
};

// 3. Buat objek Proxy
iki iku p yoiku anyar Perantara(target, handler);

// 4. Picu perangkap 'get'
cetakno(p.pesan); // -> "Mencoba mengambil properti: "pesan""
                   // -> "Hello World"

// 5. Picu perangkap 'set' (berhasil)
p.nilai yoiku 200; // -> "Mencoba mengatur "nilai" menjadi "200""

// 6. Picu perangkap 'set' (gagal)
cobak terus
  p.nilai yoiku 'bukan angka'; // -> "Mencoba mengatur "nilai" menjadi "bukan angka""
mbari nyekel (e) terus
  cetakno('Error: ' tambah e.pesan); // -> "Error: Nilai harus berupa angka!"
mbari
```

## Fungsi Bawaan

JawaScript menyediakan akses ke beberapa objek bawaan JavaScript umum dan fungsi global.

### Nilai Global

*   `kosong`: Merepresentasikan nilai `null`.
*   `oraDidefinisikan`: Merepresentasikan nilai `undefined`.
*   `gudukAngka`: Merepresentasikan `NaN` (Not-a-Number).
*   `tanpaBates`: Merepresentasikan `Infinity`.

### Konstruktor Global

Jawascript menyediakan padanan bahasa Jawa untuk konstruktor global JavaScript yang umum. Ini digunakan untuk membuat instance baru dari tipe bawaan.

**Sintaks Pembuatan Instance Baru:**
Anda sekarang dapat membuat instance baru menggunakan sintaks `NamaKelas anyar()`, selain sintaks tradisional `anyar NamaKelas()`.

| Konstruktor Jawa | Ekuivalen JavaScript | Deskripsi |
| :--- | :--- | :--- |
| `Daftar` | `Array` | Membuat objek Array baru. |
| `Obyek` | `Object` | Membuat objek Object baru. |
| `Teks` | `String` | Membuat objek String baru. |
| `Angka` | `Number` | Membuat objek Number baru. |
| `Logika` | `Boolean` | Membuat objek Boolean baru. |
| `Simbol` | `Symbol` | Membuat objek Symbol baru. |
| `Peta` | `Map` | Membuat objek Map baru. |
| `Kumpulan` | `Set` | Membuat objek Set baru. |
| `Janji` | `Promise` | Membuat objek Promise baru. |
| `Kesalahan` | `Error` | Membuat objek Error baru. |
| `PolaTeks` | `RegExp` | Membuat objek RegExp baru untuk ekspresi reguler. |

**Method Statis untuk `Obyek` (Object) dan `Daftar` (Array):**
Jawascript juga menyediakan akses langsung ke method statis umum dari `Object` dan `Array` menggunakan nama Jawa mereka.

| Method Jawa | Ekuivalen JavaScript | Deskripsi |
| :--- | :--- | :--- |
| `Obyek.iku(value1, value2)` | `Object.is(value1, value2)` | Membandingkan dua nilai untuk persamaan ketat. |
| `Obyek.wenehno(target, ...sources)` | `Object.assign(target, ...sources)` | Menyalin semua properti enumerable sendiri dari satu atau lebih objek sumber ke objek target. |
| `Obyek.kunci(obj)` | `Object.keys(obj)` | Mengembalikan array dari nama properti enumerable sendiri dari objek yang diberikan. |
| `Obyek.nilai(obj)` | `Object.values(obj)` | Mengembalikan array dari nilai properti enumerable sendiri dari objek yang diberikan. |
| `Obyek.entri(obj)` | `Object.entries(obj)` | Mengembalikan array dari pasangan `[kunci, nilai]` properti enumerable string-keyed sendiri dari objek yang diberikan. |
| `Daftar.ikiDaftar(value)` | `Array.isArray(value)` | Menentukan apakah nilai yang diteruskan adalah sebuah `Array`. |

**Contoh:**
```jawascript
// Sintaks pembuatan instance baru
jarno daftarKosong yoiku Daftar anyar()
cetakno(daftarKosong) // Output: []

jarno obyekKosong yoiku Obyek anyar()
cetakno(obyekKosong) // Output: {}

// Sintaks pembuatan instance lama masih berfungsi
jarno teksBaru yoiku Teks anyar("Halo")
cetakno(teksBaru) // Output: [String: 'Halo']

// Contoh method statis
iki iku obj1 yoiku { a: 1 };
iki iku obj2 yoiku { b: 2 };
iki iku obj3 yoiku Obyek.wenehno({}, obj1, obj2);
cetakno("Object.assign: " + DataJSON.stringkan(obj3)); // Output: {"a":1,"b":2}
cetakno("Object.is(1, 1): " tambah Obyek.iku(1, 1)); // Output: tenan
cetakno("Object.keys: " + Obyek.kunci(obj3)); // Output: a,b
cetakno("Array.isArray([]): " + Daftar.ikiDaftar(Daftar anyar())); // Output: tenan
```

**Contoh untuk `Simbol`:**
`Simbol` membuat nilai unik yang dapat digunakan sebagai kunci properti dalam sebuah objek, mencegah tabrakan nama.

```jawascript
// Contoh untuk Simbol
iki iku idUnik yoiku Simbol('id')
iki iku pangguna yoiku {
  jeneng: 'Slamet'
}

pangguna[idUnik] yoiku '987-xyz'

// Kunci simbol tidak terlihat dalam iterasi normal
cetakno(Obyek.kunci(pangguna)) // -> ['jeneng']
cetakno(pangguna.jeneng)      // -> 'Slamet'
cetakno(pangguna[idUnik])     // -> '987-xyz'
```

### Objek `Mtk` (untuk `Math`)

Jawascript menyediakan objek `Mtk` sebagai padanan dari objek `Math` bawaan JavaScript, yang menawarkan berbagai fungsi dan konstanta matematika.

**Konstanta**

| Konstanta | Deskripsi |
| :--- | :--- |
| `Mtk.PI` | Rasio keliling lingkaran terhadap diameternya (≈ 3.14159). |
| `Mtk.E` | Bilangan Euler, dasar logaritma natural (≈ 2.718). |
| `Mtk.LN2` | Logaritma natural dari 2 (≈ 0.693). |
| `Mtk.LN10` | Logaritma natural dari 10 (≈ 2.303). |
| `Mtk.LOG2E` | Logaritma basis 2 dari E (≈ 1.443). |
| `Mtk.LOG10E` | Logaritma basis 10 dari E (≈ 0.434). |
| `Mtk.SQRT1_2` | Akar kuadrat dari 1/2 (≈ 0.707). |
| `Mtk.SQRT2` | Akar kuadrat dari 2 (≈ 1.414). |

**Fungsi**

| Fungsi | Deskripsi |
| :--- | :--- |
| `Mtk.acak()` | Mengembalikan angka pseudo-random antara 0 dan 1. |
| `Mtk.bunder(x)` | Membulatkan angka ke integer terdekat. |
| `Mtk.ngisor(x)` | Mengembalikan integer terbesar yang kurang dari atau sama dengan sebuah angka (`floor`). |
| `Mtk.nduwur(x)` | Mengembalikan integer terkecil yang lebih besar dari atau sama dengan sebuah angka (`ceil`). |
| `Mtk.mutlak(x)` | Mengembalikan nilai absolut dari sebuah angka. |
| `Mtk.pangkat(basis, eksponen)` | Mengembalikan basis dipangkatkan dengan eksponen. |
| `Mtk.oyot(x)` | Mengembalikan akar kuadrat dari sebuah angka. |
| `Mtk.palingDhuwur(a, b, ...)` | Mengembalikan yang terbesar dari nol atau lebih angka (`max`). |
| `Mtk.palingNgisor(a, b, ...)` | Mengembalikan yang terkecil dari nol atau lebih angka (`min`). |
| `Mtk.sin(x)` | Mengembalikan sinus dari sebuah angka. |
| `Mtk.cos(x)` | Mengembalikan kosinus dari sebuah angka. |
| `Mtk.tan(x)` | Mengembalikan tangen dari sebuah angka. |
| `Mtk.asin(x)` | Mengembalikan arcsine dari sebuah angka. |
| `Mtk.acos(x)` | Mengembalikan arccosine dari sebuah angka. |
| `Mtk.atan(x)` | Mengembalikan arctangen dari sebuah angka. |
| `Mtk.atan2(y, x)` | Mengembalikan arctangen dari hasil bagi argumennya. |
| `Mtk.log(x)` | Mengembalikan logaritma natural (basis E) dari sebuah angka. |
| `Mtk.log2(x)` | Mengembalikan logaritma basis 2 dari sebuah angka. |
| `Mtk.log10(x)` | Mengembalikan logaritma basis 10 dari sebuah angka. |
| `Mtk.exp(x)` | Mengembalikan E<sup>x</sup>. |
| `Mtk.cbrt(x)` | Mengembalikan akar kubik dari sebuah angka. |
| `Mtk.clz32(x)` | Mengembalikan jumlah bit nol di depan dalam integer 32-bit. |
| `Mtk.cosh(x)` | Mengembalikan kosinus hiperbolik dari sebuah angka. |
| `Mtk.expm1(x)` | Mengembalikan e<sup>x</sup> - 1. |
| `Mtk.fround(x)` | Mengembalikan representasi float presisi tunggal terdekat. |
| `Mtk.hypot(...args)` | Mengembalikan akar kuadrat dari jumlah kuadrat argumen. |
| `Mtk.imul(x, y)` | Mengembalikan hasil perkalian 32-bit seperti di C. |
| `Mtk.log1p(x)` | Mengembalikan logaritma natural dari 1 + x. |
| `Mtk.sign(x)` | Mengembalikan tanda dari sebuah angka. |
| `Mtk.sinh(x)` | Mengembalikan sinus hiperbolik dari sebuah angka. |
| `Mtk.tanh(x)` | Mengembalikan tangen hiperbolik dari sebuah angka. |
| `Mtk.trunc(x)` | Mengembalikan bagian integer dari sebuah angka. |

### Objek `Tanggalan` (untuk `Date`)

*   `Tanggalan.saiki()`: Mengembalikan jumlah milidetik yang telah berlalu sejak 1 Januari 1970 UTC (`Date.now()`).
*   `Tanggalan anyar()`: Membuat objek Date baru yang merepresentasikan tanggal dan waktu saat ini.

### Objek `DataJSON` (untuk `JSON`)

*   `DataJSON.urai(str)`: Mengurai string JSON (`JSON.parse`).
*   `DataJSON.stringkan(obj)`: Mengonversi nilai JavaScript menjadi string JSON (`JSON.stringify`).

### Fungsi Global

*   `ikiGudukAngka(nilai)`: Menentukan apakah sebuah nilai adalah `NaN` (`isNaN`).
*   `jadiknoInt(str, radix)`: Mengurai string dan mengembalikan integer (`parseInt`).
*   `jadiknoFloat(str)`: Mengurai string dan mengembalikan angka floating-point (`parseFloat`).
*   `ikiTerbatas(nilai)`: Menentukan apakah sebuah nilai adalah angka terbatas (`isFinite`).
*   `uraiURI(encodedURI)`: Mendekode Uniform Resource Identifier (URI) (`decodeURI`).
*   `enkodeURI(uri)`: Mengenkode Uniform Resource Identifier (URI) (`encodeURI`).
*   `uraiBagianURI(encodedURIComponent)`: Mendekode komponen Uniform Resource Identifier (URI) (`decodeURIComponent`).
*   `enkodeBagianURI(uriComponent)`: Mengenkode komponen Uniform Resource Identifier (URI) (`encodeURIComponent`).
*   `globalIki`: Merujuk pada objek global `globalThis`, menyediakan cara standar untuk mengakses lingkup global.
*   `setWaktuInterval(callback, delay)`: Memanggil fungsi atau mengeksekusi cuplikan kode berulang kali, dengan jeda waktu tetap di antara setiap panggilan (`setInterval`).
*   `hapusWaktuInterval(intervalID)`: Menghapus timer yang diatur dengan `setWaktuInterval()` (`clearInterval`).
*   `setWaktuTunda(callback, delay)`: Mengeksekusi fungsi, atau mengevaluasi ekspresi, setelah penundaan yang ditentukan (`setTimeout`).
*   `hapusWaktuTunda(timeoutID)`: Menghapus timer yang diatur dengan `setWaktuTunda()` (`clearTimeout`).

**Contoh:**
```jawascript
cetakno(ikiGudukAngka("abc")) // Output: tenan
cetakno(jadiknoInt("101", 2)) // Output: 5
cetakno(ikiTerbatas(10 / 0)) // Output: gak

jarno uri yoiku "https://example.com/path with spaces"
jarno encoded yoiku enkodeURI(uri)
cetakno(encoded) // Output: https://example.com/path%20with%20spaces
cetakno(uraiURI(encoded)) // Output: https://example.com/path with spaces

setWaktuTunda(gawe () terus
  cetakno("Ini muncul setelah 1 detik")
mbari, 1000)

jarno hitungMundur yoiku 3
jarno intervalId yoiku setWaktuInterval(gawe () terus
  cetakno("Hitung mundur: " tambah hitungMundur)
  hitungMundur kurangKaro 1
  lek (hitungMundur plek 0) terus
    hapusWaktuInterval(intervalId)
    cetakno("Selesai!")
  mbari
mbari, 1000)
```

### Method Promise: `.banjur` & `.nyekel`

Jawascript menyediakan padanan bahasa Jawa untuk method Promise standar, memungkinkan penanganan kode asinkron yang jelas dan konsisten.

| Method Jawascript | Ekuivalen JavaScript | Deskripsi |
| :--- | :--- | :--- |
| `.banjur(onFulfilled, onRejected?)` | `.then(onFulfilled, onRejected?)` | Menangani pemenuhan yang berhasil dari sebuah Promise. |
| `.nyekel(onRejected)` | `.catch(onRejected)` | Menangani penolakan dari sebuah Promise. |

**Contoh:**
```jawascript
// JS: myPromise.then(result => console.log(result)).catch(error => console.error(error));

// Jawascript:
iki iku janjiContoh yoiku Janji anyar((resolve, reject) dadi terus
  // Simulasikan operasi asinkron
  setWaktuTunda(() dadi resolve('Operasi berhasil!'), 100);
mbari);

janjiContoh
  .banjur(hasil lakoni cetakno('Sukses:', hasil))
  .nyekel(error lakoni cetakno('Error:', error));

// Contoh dengan promise yang gagal
iki iku janjiGagal yoiku Janji anyar((resolve, reject) lakoni terus
  setWaktuTunda(() lakoni reject('Operasi gagal!'), 50);
mbari);

janjiGagal
  .banjur(hasil lakoni cetakno('Sukses (tidak seharusnya terjadi):', hasil))
  .nyekel(error lakoni cetakno('Error:', error));
```

### Method Array & String

Jawascript menyediakan banyak method umum untuk Array dan String. Banyak nama method dapat digunakan untuk keduanya (seperti `.dawane` untuk mendapatkan panjang Array atau String).

#### Method Khusus Array

Method ini untuk tipe `Daftar` (Array).

| Method Jawascript | Ekuivalen JavaScript | Contoh Penggunaan |
| :--- | :--- | :--- |
| `.dorong(item)` | `.push(item)` | `daftarSaya.dorong(4)` |
| `.jupukPungkasan()`| `.pop()` | `itemTerakhir = daftarSaya.jupukPungkasan()` |
| `.geser()` | `.shift()` | `itemPertama = daftarSaya.geser()` |
| `.tambahNgarep(item)`| `.unshift(item)`| `daftarSaya.tambahNgarep(0)` |
| `.sambung(idx, del, item?)` | `.splice(idx, del, item?)` | `daftarSaya.sambung(1, 0, 'itemBaru')` |
| `.sambungake(separator)`| `.join(separator)`| `daftarSaya.sambungake('-')` |
| `.walik()` | `.reverse()` | `daftarSaya.walik()` |
| `.urutake(fn?)` | `.sort(fn?)` | `[3,1,2].urutake((a, b) => a - b)` |
| `.golek(fn)` | `.find(fn)` | `daftarSaya.golek(x => x > 1)` |
| `.golekIndeks(fn)` | `.findIndex(fn)` | `daftarSaya.golekIndeks(x => x > 10)` |
| `.golekIndeksPungkasan(item)`| `.lastIndexOf(item)`| `['a','b','a'].golekIndeksPungkasan('a')` |
| `.saring(fn)` | `.filter(fn)` | `daftarSaya.saring(x => x > 2)` |
| `.petakake(fn)` | `.map(fn)` | `daftarSaya.petakake(x => x * 2)` |
| `.kanggoSaben(fn)` | `.forEach(fn)` | `daftarSaya.kanggoSaben(x => cetakno(x))` |
| `.suda(fn, initial?)` | `.reduce(fn, initial?)` | `daftarSaya.suda((total, saatIni) => total + saatIni)` |
| `.sudaTengen(fn, initial?)` | `.reduceRight(fn, initial?)`| `daftarSaya.sudaTengen((total, saatIni) => total + saatIni)` |
| `.ana(fn)` | `.some(fn)` | `daftarSaya.ana(x => x > 5)` |
| `.kabeh(fn)` | `.every(fn)` | `daftarSaya.kabeh(x => x > 0)` |

#### Method Khusus String

Method ini untuk tipe `Teks` (String).

| Method Jawascript | Ekuivalen JavaScript | Contoh Penggunaan |
| :--- | :--- | :--- |
| `.gedekno()` | `.toUpperCase()` | `teksSaya.gedekno()` |
| `.cilikno()` | `.toLowerCase()` | `teksSaya.cilikno()` |
| `.rapikno()` | `.trim()` | `' beberapa spasi '.rapikno()` |
| `.gantien(a, b)` | `.replace(a, b)` | `teksSaya.gantien('lama', 'baru')` |
| `.gantienKabeh(a, b)`| `.replaceAll(a, b)`| `teksSaya.gantienKabeh('a', 'o')` |
| `.pecahen(separator)`| `.split(separator)`| `'a-b-c'.pecahen('-')` |
| `.dimulaiKaro(s)` | `.startsWith(s)` | `teksSaya.dimulaiKaro('Jawa')` |
| `.diakhiriKaro(s)` | `.endsWith(s)` | `teksSaya.diakhiriKaro('!')` |
| `.tambahiNgarep(len, txt)` | `.padStart(len, txt)` | `teksSaya.tambahiNgarep(10, '0')` |
| `.tambahiMburi(len, txt)` | `.padEnd(len, txt)` | `teksSaya.tambahiMburi(10, '.')` |
| `.potonganTeks(start, end?)`| `.substring(start, end?)`| `teksSaya.potonganTeks(0, 4)` |
| `.karakterKe(index)`| `.charAt(index)` | `teksSaya.karakterKe(0)` |
| `.cocokno(regex)` | `.match(regex)` | `teksSaya.cocokno(/jawa/i)` |
| `.goleki(word)` | `.search(word)` | `teksSaya.goleki('keren')` |

#### Method Bersama (untuk Array & String)

Method ini berfungsi pada `Daftar` (Array) dan `Teks` (String).

| Method Jawascript | Ekuivalen JavaScript | Contoh Penggunaan |
| :--- | :--- | :--- |
| `.dawane` | `.length` | `[1,2].dawane` atau `'abc'.dawane` |
| `.ngemot(item)` | `.includes(item)` | `daftarSaya.ngemot(2)` atau `teksSaya.ngemot('a')` |
| `.iris(start, end?)` | `.slice(start, end?)` | `daftarSaya.iris(1)` atau `teksSaya.iris(0, 5)` |
| `.gabung(item)` | `.concat(item)` | `daftar1.gabung(daftar2)` atau `teks1.gabung(teks2)` |
| `.indeksSaka(item)`| `.indexOf(item)` | `daftarSaya.indeksSaka(3)` atau `teksSaya.indeksSaka('b')` |

## Penggunaan CLI

Jawascript menyediakan alat Command Line Interface (CLI) bernama `djawa` untuk membantu Anda mengelola dan menjalankan file `.jawa` Anda.

### Instalasi

1.  Pastikan Anda telah menginstal [Node.js](https://nodejs.org/).
2.  Instal JawaScript secara global melalui npm:
    ```bash
    npm install -g @jawirhytam/jawirscript
    ```
    Atau, untuk menginstal versi terbaru langsung dari GitHub:
    ```bash
    npm install -g https://github.com/gegesteorngoding/djawa-script
    ```

### Perintah

Berikut adalah perintah `djawa` yang tersedia:

*   **`djawa run <file.jawa>`**
    Mentranspilasi dan mengeksekusi file `.jawa` secara langsung.

*   **`djawa build <file.jawa>`**
    Mentranspilasi file `.jawa` menjadi file `.js`.

*   **`djawa make <filename>`**
    Membuat file `.jawa` baru dari template.

*   `djawa version` atau `djawa -v`
    Menampilkan versi JawaScript saat ini.

*   `djawa help` atau `djawa -h`
    Menampilkan pesan bantuan.