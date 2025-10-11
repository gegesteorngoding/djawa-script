[English](./README.md) | [Bahasa Indonesia](./README-ID.md)
---
# Proyek JawaScript, Coy!

Jadi gini, JawaScript itu semacam "penerjemah" kode keren. Dia bisa ngubah bahasa pemrograman simpel yang terinspirasi dari bahasa Jawa jadi JavaScript biasa. Tujuannya? Biar ngoding jadi lebih asik, santai, dan gampang dibaca, apalagi buat lo yang ngerti vibe Jawa.

## Isinya Apa Aja?

- [Dasar-dasarnya](#dasar-dasarnya)
  - [Blok Kode: `terus` & `mbari`](#blok-kode-terus--mbari)
  - [Ngasih Catetan (Komentar)](#ngasih-catetan-komentar)
  - [Nyimpen Data (Variabel)](#nyimpen-data-variabel)
  - [Nampilin & Nanya Sesuatu](#nampilin--nanya-sesuatu)
  - [Tipe Data](#tipe-data)
  - [Sistem Tipe (Kalo Mau Keliatan Pro)](#sistem-tipe-kalo-mau-keliatan-pro)
- [Ngatur Alur Kode](#ngatur-alur-kode)
  - [Keputusan Cepet (Ternary)](#keputusan-cepet-operator-ternary-ta--lek-gak)
  - [Kode yang Bisa Dipake Lagi (Fungsi)](#kode-yang-bisa-dipake-lagi-fungsi)
  - [Fungsi Singkat (Arrow Function)](#fungsi-singkat-arrow-function-lakoni)
  - [Nanganin Error (Biar Gak Panik)](#nanganin-error-biar-gak-panik)
  - [Ngerjain Sesuatu Nanti (Async/Await)](#ngerjain-sesuatu-nanti-asyncawait)
  - [Data Pasangan yang Gak Bisa Diubah (Tuple)](#data-pasangan-yang-gak-bisa-diubah-tuple)
- [Jurus Spesial Jawascript](#jurus-spesial-jawascript)
  - [Ngecek Nilai Kosong (`iku ono` & `iku ilang`)](#ngecek-nilai-kosong-iku-ono--iku-ilang)
- [Operator & Perbandingan](#operator--perbandingan)
  - [Akses Properti Aman (Optional Chaining)](#akses-properti-aman-optional-chaining-mungkin)
  - [Nilai Cadangan (Nullish Coalescing)](#nilai-cadangan-nullish-coalescing-operator-utowoyenkosong)
  - [Sihir di Level Bit (Operator Bitwise)](#sihir-di-level-bit-operator-bitwise)
- [Kata Kunci Spesial](#kata-kunci-spesial)
- [Mecah Kode (Modul)](#mecah-kode-modul)
- [Bikin Cetakan (Class & OOP)](#bikin-cetakan-class--oop)
- [Buat yang Udah Jago (Metaprogramming)](#buat-yang-udah-jago-metaprogramming)
- [Bonus Bawaan](#bonus-bawaan)
- [Pakai dari Terminal (CLI)](#pakai-dari-terminal-cli)

Semua kodemu ditulis di file yang akhirannya `.jawa`.

### Blok Kode: `terus` & `mbari`

Jawascript itu basisnya blok. Setiap potongan kode (kayak di fungsi, perulangan, if-else) wajib diawali `terus` dan diakhiri `mbari`. Gampang, kan?

```jawascript
lek (tenan) terus
  // kodemu taro di sini
mbari
```

### Ngasih Catetan (Komentar)

- **Satu baris:** Pake `//`.
- **Banyak baris:** Awali pake `/*` dan akhiri pake `*/`.

### Nyimpen Data (Variabel)

- `iki iku`: Buat data yang nilainya gak bakal berubah (konstanta).
- `jarno`: Buat data yang nilainya bisa lo ubah-ubah nanti (variabel).

```jawascript
// Data yang gak bisa diganti
iki iku jenengku yoiku "Budi"

// Data yang bisa diubah
jarno umurku yoiku 25
umurku yoiku umurku tambah 1 // umurku sekarang 26
```

### Nampilin & Nanya Sesuatu

Jawascript punya `cetakno` (kayak `console` di JS) buat nampilin info dan `takon` buat nanya sesuatu ke pengguna.

| Method | Gunanya Buat Apa? |
| :--- | :--- |
| `cetakno(...)` | Nampilin tulisan ke konsol. |
| `cetakno.peringatan(...)` | Ngasih tau ada peringatan. |
| `cetakno.kesalahan(...)` | Ngasih tau kalo ada error. |
| `cetakno.info(...)` | Cuma info biasa aja. |
| `cetakno.debug(...)` | Buat lo yang lagi nyari kutu (bug). |
| `takon(pesan)` | Nanya sesuatu ke pengguna. |

```jawascript
cetakno("Halo Dunyo!")

jarno jenengmu yoiku takon("Jenengmu sopo? ")
cetakno("Halo, " tambah jenengmu)

cetakno.peringatan("Waduh, ada peringatan!")
cetakno.kesalahan("Anjir, error!")
```

### Tipe Data

Kata kunci buat nilai-nilai dasar.

- `tenan`: Artinya `true`.
- `gak`: Artinya `false`.
- `kosong`: Artinya `null`.
- `oraDidefinisikan`: Artinya `undefined`.

```jawascript
jarno lagiBelajar yoiku tenan
lek (lagiBelajar plek tenan) terus
  cetakno("Gaskeun!")
mbari
```

### Sistem Tipe (Kalo Mau Keliatan Pro)

Sekarang Jawascript bisa pake tipe data, mirip-mirip TypeScript gitu. Gak wajib sih, tapi ini bikin kodemu lebih rapi, gampang nemu bug, dan bikin editor kodemu jadi lebih pinter.

**Kenapa keren?**
-   **Nemu Bug Lebih Cepet:** Gak perlu nunggu kodenya jalan buat tau ada yang salah.
-   **Gampang Dibaca:** Kode lo jadi lebih jelas maksudnya apa.
-   **Editor Jadi Pinter:** Autocomplete dan fitur lain di IDE jadi lebih mantep.

**Contohnya:**

```jawascript
// Variabel
jarno umur: Angka = 30;
iki iku jeneng: Teks = "Budi";

// Fungsi
gawe sapa(jeneng: Teks): Teks terus
  balekno "Halo " tambah jeneng;
mbari
```

**Tipe Dasar:** `Angka`, `Teks`, `Logika`, `Kosong`, `Daftar`, `Obyek`, `Sembarang` (any), `OraOno` (void).

**Gimana cara kerjanya?** Jawascript bakal ngubah kodemu jadi kode TypeScript, jadi lo bisa pake compiler TypeScript (`tsc`) buat ngecek.

### Ngatur Alur Kode

Atur jalan cerita kodemu pake if-else, perulangan, dan switch.

- **If/Else**
  - `lek (kondisi)`: `if`
  - `lek misale (kondisi)`: `else if`
  - `liyane`: `else`

### Keputusan Cepet (Operator Ternary: `ta` & `lek gak`)

Cara singkat buat if-else dalam sebaris.

- `kondisi ta nilai_kalo_bener lek gak nilai_kalo_salah`: Kalo kondisinya bener, dapet nilai pertama. Kalo salah, dapet nilai kedua.

```jawascript
// JS: const status = age >= 18 ? 'Adult' : 'Minor';

iki iku umur yoiku 20;
iki iku status yoiku umur luwihGedhePodo 18 ta 'Dewasa' lek gak 'Bocil';
cetakno("Status:", status); // -> Dewasa
```

- **Perulangan**
  - `kanggo (init; cond; iter)`: Perulangan `for` biasa.
  - `selagi (kondisi)`: Perulangan `while` biasa.
  - `lakoni ... selagi (kondisi)`: Perulangan `do...while`. Pasti jalan sekali.
  - `kanggo...ing`: Perulangan `for...in` buat ngiterasi kunci objek.
  - `kanggo...soko`: Perulangan `for...of` buat ngiterasi nilai array.

- **Kontrol Perulangan**
  - `mandek`: `break` buat keluar dari perulangan.
  - `lanjutno`: `continue` buat lanjut ke iterasi berikutnya.

### Kode yang Bisa Dipake Lagi (Fungsi)

- `gawe (nama)(params)`: Bikin fungsi.
- `balekno (nilai)`: Balikin nilai.
- `asilno (nilai)`: `yield` nilai dari generator.

```jawascript
gawe hitungLuas(panjang, lebar) terus
  balekno panjang ping lebar
mbari

iki iku luas yoiku hitungLuas(10, 5)
cetakno(luas) // -> 50
```

### Fungsi Singkat (Arrow Function: `lakoni`)

Jawascript punya cara nulis fungsi yang lebih pendek, kayak arrow function di JS. Cukup pake `lakoni`.

```jawascript
// JS: const multiply = (a, b) => a * b;
iki iku kalikan yoiku (a, b) lakoni a ping b;
cetakno(kalikan(7, 8)); // -> 56

// Kalo butuh banyak baris
iki iku sapa yoiku (jeneng) lakoni terus
  iki iku sapaan yoiku "Woy, " tambah jeneng;
  balekno sapaan;
mbari;
cetakno(sapa("Sastro")); // -> Woy, Sastro
```

### Nanganin Error (Biar Gak Panik)

- `cobak`: `try` buat nyoba kode yang mungkin error.
- `nyekel (error)`: `catch` buat nangkep errornya.
- `pungkasan`: `finally`, apapun yang terjadi, ini bakal tetep jalan.
- `uncalen (nilai)`: `throw` buat ngelempar error.

```jawascript
cobak terus
  uncalen "Waduh, error, Cok!"
mbari nyekel (e) terus
  cetakno("Error ketangkep: " tambah e)
mbari pungkasan terus
  cetakno("Ini pasti jalan, dah.")
mbari
```

### Ngerjain Sesuatu Nanti (Async/Await)

- `tenangan`: Bikin fungsi jadi asinkron (`async`).
- `enteni`: Nungguin sesuatu kelar (`await`).

```jawascript
tenangan gawe prosesData() terus
  cetakno("Lagi ngambil data, sabar...")
  iki iku data yoiku enteni ambilData() // anggap ambilData udah ada
  cetakno("Dapet datanya:", data)
mbari
```

### Data Pasangan yang Gak Bisa Diubah (Tuple)

Jawascript punya `Tuple`. Kayak array, tapi isinya gabisa diubah sama sekali. Cocok buat data yang harus paten, contohnya koordinat.

```jawascript
// Bikin Tuple koordinat
iki iku koordinat yoiku tuple(10, 20)
cetakno(koordinat[0]) // -> 10

// Gak bakal bisa diubah!
cobak terus
  koordinat[0] = 5 // Gak bakal ngaruh
mbari nyekel (e) terus
  cetakno("Tuh kan, error. Kubilang juga apa:", e.pesan)
mbari
cetakno(koordinat[0]) // -> Tetep 10
```

## Jurus Spesial Jawascript

Jawascript punya beberapa trik unik buat bikin hidup lo lebih gampang.

### Ngecek Nilai Kosong (`iku ono` & `iku ilang`)

Ngecek `null` atau `undefined` itu nyebelin. Pake Jawascript jadi gampang.

- `variabel iku ono`: Ngecek kalo variabel itu **ADA** isinya (bukan `null` atau `undefined`).
- `variabel iku ilang`: Ngecek kalo variabel itu **GAK ADA** isinya (`null` atau `undefined`).

Jauh lebih gampang dibaca. `iku ilang` itu di belakang layar jadi `== null`, trik JS buat ngecek keduanya sekaligus.

```jawascript
jarno varKosong yoiku kosong; // null
jarno varLain; // undefined

lek (varKosong iku ilang) terus
  cetakno('varKosong itu ilang.'); // Ini jalan
mbari

lek (varLain iku ilang) terus
  cetakno('varLain juga ilang.'); // Ini juga jalan
mbari
```

## Operator & Perbandingan

Jawascript ngeganti operator JS yang ngebosenin pake kata-kata Jawa. **Inget, kasih spasi sebelum dan sesudah operatornya!**

| Bahasa Jawa | JavaScript | Artinya |
| :--- | :--- | :--- |
| `yoiku` | `=` | Ngasih nilai |
| `tambah` | `+` | Tambah |
| `kurang` | `-` | Kurang |
| `ping` | `*` | Kali |
| `bagi` | `/` | Bagi |
| `siso` | `%` | Sisa bagi |
| `plek` | `===` | Sama persis |
| `podo` | `==` | Sama aja |
| `lan` | `&&` | DAN |
| `utawa` | `||` | ATAU |
| `ora` | `!` | BUKAN |

### Akses Properti Aman (Optional Chaining: `.mungkin.`)

Akses data di dalem objek yang mungkin `null` atau `undefined` tanpa bikin kodemu meledak. Pake aja `.mungkin.`.

```jawascript
iki iku user yoiku { profil: { jeneng: 'Sastro' } };
iki iku userKosong yoiku kosong;

// Ngambil properti dengan aman
iki iku jenengUser yoiku user.profil.mungkin.jeneng;
cetakno('Jeneng User:', jenengUser); // -> Sastro

// Nyoba ngambil dari yang gak ada
iki iku jenengKosong yoiku userKosong.mungkin.profil.mungkin.jeneng;
cetakno('Jeneng dari yang kosong:', jenengKosong); // -> undefined
```

### Nilai Cadangan (Nullish Coalescing: `utowoYenKosong`)

Kasih nilai cadangan kalo sebuah variabel itu `null` atau `undefined`. Ini lebih pinter dari `||` karena gak bakal ngeganti nilai `0` atau `''`.

```jawascript
iki iku nilaiKosong yoiku kosong;
iki iku nilaiNol yoiku 0;

cetakno(nilaiKosong utowoYenKosong 10); // -> 10
cetakno(nilaiNol utowoYenKosong 10); // -> 0 (Nol-nya tetep aman)
```

### Sihir di Level Bit (Operator Bitwise)

Buat anak IT banget yang suka mainan biner.

| Bahasa Jawa | JavaScript | Artinya |
| :--- | :--- | :--- |
| `lanbit` | `&` | Bitwise AND |
| `utawabit` | `|` | Bitwise OR |
| `xor` | `^` | Bitwise XOR |
| `walik` | `~` | Bitwise NOT |
| `geserKiwo` | `<<` | Geser Kiri |
| `geserTengen`| `>>` | Geser Kanan |

## Kata Kunci Spesial

Beberapa kata kunci lain buat situasi khusus.

| Bahasa Jawa | JavaScript | Artinya |
| :--- | :--- | :--- |
| `iki` | `this` | Konteks objek saat ini. |
| `tetep` | `static` | Buat properti/method di level kelas. |
| `entuk` | `get` | Getter di kelas. |
| `pasang` | `set` | Setter di kelas. |

## Mecah Kode (Modul)

Biar kodemu rapi, pecah aja jadi beberapa file.

- `metokno { ... }`: Ekspor beberapa hal (named export).
- `metokno biasane ...`: Ekspor satu hal utama (default export).
- `jupukno ... soko '...'`: Impor dari file lain.
- `dadi`: Ganti nama impor (`as`).

**`util.jawa`**
```jawascript
gawe sapa(jeneng) terus
  balekno "Woy, " tambah jeneng
mbari
metokno { sapa }
```

**`app.jawa`**
```jawascript
// Ambil fungsi sapa dari util.js
jupukno { sapa } soko './util.js'

cetakno(sapa("Doni")) // -> Woy, Doni
```

## Bikin Cetakan (Class & OOP)

Betul, lo bisa ngoding pake gaya OOP (Object-Oriented Programming).

- `kelas ...`: Bikin kelas.
- `wujudno(...)`: Konstruktor.
- `turunan soko`: Mewarisi dari kelas lain (`extends`).
- `induk(...)`: Manggil konstruktor kelas induk (`super`).

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
    induk(jeneng) // manggil konstruktor induk
  mbari
  meong() terus
    cetakno(iki.jeneng tambah " bilang Meong!")
  mbari
mbari

jarno kucingku yoiku Kucing anyar("Tom")
kucingku.mangan()  // Method warisan
kucingku.meong()   // Method punya sendiri
```

## Buat yang Udah Jago (Metaprogramming)

Buat yang udah pro, Jawascript dukung `Perantara` (Proxy) dan `Pantulan` (Reflect). Lo bisa ngoprek perilaku dasar dari bahasanya. Ngeri, kan?

## Bonus Bawaan

Jawascript ngasih nama Jawa buat hal-hal bawaan JS kayak `Math` (`Mtk`), `Date` (`Tanggalan`), dan `JSON` (`DataJSON`), plus banyak fungsi global lainnya.

## Pakai dari Terminal (CLI)

Jawascript punya alat CLI namanya `djawa` buat ngejalanin kodemu.

### Instalasi

1.  Pastikan [Node.js](https://nodejs.org/) udah keinstall.
2.  Install global dari npm:
    ```bash
    npm install -g @jawirhytam/jawirscript
    ```

### Perintah-perintah

- **`djawa run <file.jawa>`**: Buat ngejalanin file.
- **`djawa build <file.jawa>`**: Buat ngubah file `.jawa` jadi `.js`.
- **`djawa make <namafile>`**: Bikin file `.jawa` baru dari template.
- **`djawa version` atau `djawa -v`**: Nampilin versi.
- **`djawa help` atau `djawa -h`**: Nampilin bantuan.
