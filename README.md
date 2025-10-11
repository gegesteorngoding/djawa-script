# JawaScript Project

This is a "Transpiler" project for a "simple" programming language inspired by Javanese and jaksel-script.

## Table of Contents

- [Language Features](#language-features)
  - [Code Blocks: `terus` & `mbari`](#code-blocks-terus--mbari)
  - [Comments](#comments)
  - [Variables](#variables)
  - [Console and User Input](#console-and-user-input)
  - [Data Types](#data-types)
  - [Optional Type System](#optional-type-system)
- [Control Flow](#control-flow)
  - [Ternary Operator: `ta` & `lek gak`](#ternary-operator-ta--lek-gak)
  - [Functions](#functions)
  - [Arrow Functions: `lakoni`](#arrow-functions-lakoni)
  - [Error Handling](#error-handling)
  - [Asynchronous Operations](#asynchronous-operations)
  - [Tuple (Immutable Pair Data)](#tuple-immutable-pair-data)
- [Jawascript Unique Features](#jawascript-unique-features)
  - [Null/Undefined Checks: `iku ono` & `iku ilang`](#nullundefined-checks-iku-ono--iku-ilang)
- [Operators and Comparators](#operators-and-comparators)
  - [Optional Chaining: `.mungkin.`](#optional-chaining-mungkin)
  - [Nullish Coalescing Operator: `utowoYenKosong`](#nullish-coalescing-operator-utowoyenkosong)
  - [Bitwise Operators](#bitwise-operators)
- [Special Keywords](#special-keywords)
- [Module System: `jupukno` & `metokno`](#module-system-jupukno--metokno)
  - [Re-exporting as Namespace: `metokno kabeh dadi ...`](#re-exporting-as-namespace-metokno-kabeh-dadi)
  - [Dynamic Imports: `jupukno(...)`](#dynamic-imports-jupukno)
- [Class & Inheritance (OOP)](#class--inheritance-oop)
- [Built-in Functions](#built-in-functions)
  - [Global Values](#global-values)
  - [Global Constructors](#global-constructors)
  - [`Mtk` Object (for `Math`)](#mtk-object-for-math)
  - [`Tanggalan` Object (for `Date`)](#tanggalan-object-for-date)
  - [`DataJSON` Object (for `JSON`)](#datajson-object-for-json)
  - [Global Functions](#global-functions)
  - [Promise Methods: `.banjur` & `.nyekel`](#promise-methods-banjur--nyekel)
  - [Array & String Methods](#array--string-methods)
- [CLI Usage](#cli-usage)

Code is written in files with the `.jawa` extension.

### Code Blocks: `terus` & `mbari`

Jawascript is a block-based language. All code blocks (for functions, loops, conditionals, etc.) must start with the `terus` keyword and end with the `mbari` keyword.

```jawascript
lek (tenan) terus
  // code inside the block
mbari
```

### Comments

- **Single-line comments:** Start with `//`.
- **Multi-line comments:** Start with `/*` and end with `*/`.

### Variables

- `iki iku`: For declaring a constant variable (cannot be reassigned).
- `jarno`: For declaring a mutable variable (can be reassigned).

```jawascript
// Variable that cannot be changed
iki iku jeneng yoiku "Budi"

// Variable that can be changed
jarno umur yoiku 25
umur yoiku umur tambah 1 // umur is now 26
```

### Console and User Input

Jawascript provides the `cetakno` object (equivalent to JavaScript's `console`) for logging and debugging, and `takon` for user input.

| Method | Description |
| :--- | :--- |
| `cetakno(...)` | Prints output to the console. |
| `cetakno.peringatan(...)` | Logs a warning message to the console. |
| `cetakno.kesalahan(...)` | Logs an error message to the console. |
| `cetakno.info(...)` | Logs an informational message to the console. |
| `cetakno.debug(...)` | Logs a debug message to the console. |
| `cetakno.tabel(data)` | Displays tabular data as a table. |
| `cetakno.hitung(label)` | Logs the number of times that `count()` has been invoked with a given label. |
| `cetakno.waktu(label)` | Starts a timer you can use to track how long an operation takes. |
| `cetakno.akhirWaktu(label)` | Stops a timer that was previously started by calling `cetakno.waktu()`. |
| `cetakno.grup(label)` | Creates a new inline group in the console. |
| `cetakno.akhirGrup()` | Ends the current inline group in the console. |
| `takon(message)` | Prompts the user for input and returns the value. |

```jawascript
cetakno("Halo Dunyo!")

jarno jenengmu yoiku takon("Sopo jenengmu? ")
cetakno("Sugeng rawuh, " tambah jenengmu)

cetakno.peringatan("Ini peringatan!")
cetakno.kesalahan("Ini kesalahan!")
cetakno.waktu("myOperation")
// ... some code ...
cetakno.akhirWaktu("myOperation")
```

### Data Types

Keywords for primitive data types and values.

- `tenan`: Represents the boolean value `true`.
- `gak`: Represents the boolean value `false`.
- `kosong`: Represents a `null` value.
- `oraDidefinisikan`: Represents an `undefined` value.

```jawascript
jarno isihSinau yoiku tenan
lek (isihSinau plek tenan) terus
  cetakno("Semangat!")
mbari
```

### Optional Type System

Jawascript now supports an optional static type system, similar to GDScript or TypeScript. This allows you to add type annotations to your variables, function parameters, and function return types. While not mandatory, using types can significantly improve code readability, help catch errors early during development, and enhance IDE support with better autocompletion and refactoring tools.

**Key Benefits:**
-   **Early Error Detection:** Catch type-related bugs before runtime.
-   **Improved Readability:** Code becomes self-documenting, making it easier to understand.
-   **Enhanced IDE Support:** Better autocompletion, type-checking, and refactoring capabilities.

**Syntax:**

-   **Variable Declarations:**
```jawascript
jarno umur: Angka = 30;
iki iku jeneng: Teks = "Budi";
jarno isAktif: Logika = tenan;
```

-   **Function Parameters and Return Types:**
```jawascript
gawe sapa(jeneng: Teks): Teks terus
  balekno "Halo " tambah jeneng;
mbari

gawe tambah(a: Angka, b: Angka): Angka terus
  balekno a tambah b;
mbari
```

-   **Arrow Functions (Parameters and Return Types):**
 ```jawascript
jarno getUmur = (tahunLahir: Angka): Angka lakoni
  balekno 2025 kurang tahunLahir;

jarno cetakInfo = (pesan: Teks, jumlah: Angka): OraOno lakoni terus
  cetakno(pesan tambah ": " tambah jumlah);
mbari;
 ```

**Supported Basic Types:**
-   `Angka` (JavaScript `number`)
-   `Teks` (JavaScript `string`)
-   `Logika` (JavaScript `boolean`)
-   `Kosong` (JavaScript `null`)
-   `OraDidefinisikan` (JavaScript `undefined`)
-   `Daftar` (JavaScript `Array`)
-   `Obyek` (JavaScript `Object`)
-   `Sembarang` (JavaScript `any`)
-   `OraOno` (JavaScript `void`)

**How it Works:**
Jawascript transpiles code with type annotations into valid TypeScript syntax. You can then use a TypeScript compiler (`tsc`) to perform static type checking and generate the final JavaScript output.

### Control Flow

Manage the flow of your program with conditionals, loops, and switch statements.

- **Conditionals**
  - `lek (condition)`: Starts a conditional block that executes if the condition is true.
  - `lek misale (condition)`: An additional conditional block.
  - `liyane`: A block that executes if all previous conditions are false.

### Ternary Operator: `ta` & `lek gak`

Jawascript provides a concise conditional expression, similar to JavaScript's ternary operator (`? :`), using the keywords `ta` and `lek gak`.

- `condition ta value_if_true lek gak value_if_false`: Evaluates `condition`. If true, returns `value_if_true`; otherwise, returns `value_if_false`.

```jawascript
// JS: const status = age >= 18 ? 'Adult' : 'Minor';

iki iku umur yoiku 20;
iki iku status yoiku umur luwihGedhePodo 18 ta 'Dewasa' lek gak 'Anak-anak';
cetakno("Status:", status); // Output: Dewasa

jarno umurLiyo yoiku 15;
cetakno("Status:", umurLiyo luwihGedhePodo 18 ta 'Dewasa' lek gak 'Anak-anak'); // Output: Anak-anak
```

- **Loops**
  - `kanggo (init; cond; iter)`: A `for` loop construct.
  - `selagi (condition)`: A `while` loop construct.
  - `lakoni ... selagi (condition)`: A `do...while` loop construct, ensuring the block executes at least once.

### `for...in` Loop

Jawascript supports iterating over the enumerable properties of an object using the `kanggo...ing` loop, similar to JavaScript's `for...in` loop.

- `kanggo (iki iku key ing object) terus ... mbari`: Iterates over the keys (property names) of an object.

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

### `for...of` Loop (`kanggo...soko...`)

To iterate over the values of an iterable object (like an Array, String, Map, or Set), Jawascript provides the `kanggo...soko...` loop. This is different from `kanggo...ing` (`for...in`), which iterates over the keys or indices.

- `kanggo (iki iku value soko iterable) terus ... mbari`: Iterates over the values of an iterable.

```jawascript
// Example with an Array
iki iku woh_wohan yoiku ['apel', 'jeruk', 'mangga'];
kanggo (iki iku woh soko woh_wohan) terus
  cetakno(woh);
mbari
// Output:
// apel
// jeruk
// mangga

// Example with a String
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

- **Switch Statement**
  - `pilih (variable)`: A `switch` statement construct.
  - `kalo (value):`: A `case` block within a switch.
  - `yowes:`: The `default` block within a switch.

- **Loop/Switch Control**
  - `mandek`: Exits a loop or switch statement.
  - `lanjutno`: Skips to the next iteration of a loop.

```jawascript
// Example of if/else
jarno nilai yoiku 85
lek (nilai luwihGedhe 90) terus
  cetakno("Istimewa")
mbari lek misale (nilai luwihGedhe 75) terus
  cetakno("Apik")
mbari liyane terus
  cetakno("Cukup")
mbari

// Example of a for loop
kanggo (jarno i yoiku 0; i luwihCilik 3; i++) terus
  cetakno(i)
mbari

// Example of a do...while loop
jarno hitung yoiku 0
lakoni terus
  cetakno("Hitungan: " tambah hitung)
  hitung++
mbari selagi (hitung luwihCilik 3)
```

### Functions

- `gawe (name)(params)`: Defines a function.
- `balekno (value)`: Returns a value from a function.
- `asilno (value)`: Pauses and resumes a generator function, returning a value from the generator.

```jawascript
gawe itungLuas(panjang, lebar) terus
  balekno panjang ping lebar
mbari

iki iku luas yoiku itungLuas(10, 5)
cetakno(luas) // -> 50

// Example of a generator function using asilno
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

### Arrow Functions: `lakoni`

Jawascript supports a shorter syntax for functions, equivalent to JavaScript's arrow functions (`=>`), using the `lakoni` keyword. `lakoni` translates to "do" or "perform", perfectly capturing the essence of mapping parameters to an output.

- **Implicit Return:** For single-line functions, the return is implicit.
- **Block Body:** For multi-line functions, you can use the `terus` and `mbari` keywords.

```jawascript
// JS: const multiply = (a, b) => a * b;
iki iku multiply yoiku (a, b) lakoni a ping b;
cetakno(multiply(7, 8)); // -> 56

// Used as a callback
iki iku angka yoiku [1, 2, 3];
iki iku angkaPodoDikaliLoro yoiku angka.petakake(n lakoni n ping 2);
cetakno(angkaPodoDikaliLoro); // -> [2, 4, 6]

// With a block body
iki iku sapa yoiku (jeneng) lakoni terus
  iki iku sapaan yoiku "Sugeng rawuh, " tambah jeneng;
  balekno sapaan;
mbari;
cetakno(sapa("Sastro")); // -> Sugeng rawuh, Sastro
```

### Error Handling

- `cobak`: Starts a block to test for potential errors.
- `nyekel (error)`: A block that executes if an error occurs in the `cobak` block.
- `pungkasan`: A block that always executes after `cobak` and `nyekel`, regardless of the outcome.
- `uncalen (value)`: Throws a custom error.

```jawascript
cobak terus
  uncalen "Waduh, error!"
mbari nyekel (e) terus
  cetakno("Ketangkep error: " tambah e)
mbari pungkasan terus
  cetakno("Iki mesti dijalanin")
mbari
```

### Asynchronous Operations

- `tenangan`: Declares an asynchronous function.
- `enteni`: Pauses the execution of an async function to wait for a Promise to resolve.

```jawascript
// Assuming a function that returns a Promise
gawe ambilData() { ... }

tenangan gawe prosesData() terus
  cetakno("Mulai mengambil data...")
  iki iku data yoiku enteni ambilData()
  cetakno("Data berhasil diambil:", data)
mbari
```

### Tuple (Immutable Pair Data)

Jawascript features a unique `Tuple` data type, similar to an array but its contents cannot be changed (immutable) after creation. This is ideal for data that should remain constant, such as coordinates or pairs of values.

To create a `Tuple`, you can use the `tuple(...)` function.

```jawascript
// Create a coordinate Tuple
iki iku koordinat yoiku tuple(10, 20)
cetakno(koordinat[0]) // Output: 10
cetakno(koordinat[1]) // Output: 20

// Attempt to modify Tuple content (this will not succeed due to immutability)
coba terus
  koordinat[0] = 5 // This will not change the value of koordinat[0]
mbari nyekel (e) terus
  cetakno("Error saat mengubah tuple:", e.pesan) // If an error occurs, it will be caught here
mbari
cetakno(koordinat[0]) // Output: Still 10

// Tuples can contain different data types
iki iku infoPengguna yoiku tuple("Budi", 28, tenan)
cetakno(infoPengguna[0]) // Output: "Budi"
cetakno(infoPengguna[1]) // Output: 28
```

## Jawascript Unique Features

To fulfill the vision of being simpler and more expressive than JavaScript, Jawascript introduces unique syntactic sugar for common patterns.

### Null/Undefined Checks: `iku ono` & `iku ilang`

Checking for `null` or `undefined` is a very common task. Jawascript simplifies this with two dedicated keywords: `ono` (exists) and `ilang` (is missing/gone).

- `variabel iku ono`: Checks if a variable is **NOT** `null` or `undefined`.
- `variabel iku ilang`: Checks if a variable **IS** `null` or `undefined`.

This provides a more readable and less error-prone way to handle potentially empty values. Under the hood, `iku ilang` is transpiled to `== null`, which is a well-known JavaScript trick to check for both `null` and `undefined` at the same time.

```jawascript
jarno variabelKosong yoiku kosong; // null
jarno variabelLiyo;

jarno variabelIsi yoiku 0;

// Check for absence
lek (variabelKosong iku ilang) terus
  cetakno('variabelKosong is missing.'); // This will run
mbari

lek (variabelLiyo iku ilang) terus
  cetakno('variabelLiyo is also missing.'); // This will also run
mbari

// Check for existence
lek (variabelIsi iku ono) terus
  cetakno('variabelIsi exists, its value is: ', variabelIsi); // This will run
mbari

lek (variabelKosong iku ono) terus
  // This block will not run
mbari liyane terus
  cetakno('variabelKosong does not exist.');
mbari
```

## Operators and Comparators

Jawascript replaces common JavaScript operators with Javanese words to make the code more expressive.

**Important:** When using most of these operators, you **must** leave a space before and after them. The main exception is `ora` (`!`), which is typically placed before a value or group.

**Correct:** `jarno hasil yoiku 5 tambah 3`
**Incorrect:** `jarno hasil yoiku 5'tambah'3`

| Javanese Operator | JavaScript Equivalent | Description |
| :--- | :--- | :--- |
| `yoiku` | `=` | Assignment |
| `tambah` | `+` | Addition |
| `kurang` | `-` | Subtraction |
| `ping` | `*` | Multiplication |
| `bagi` | `/` | Division |
| `siso` | `%` | Modulo (remainder) |
| `pangkat` | `**` | Exponentiation (pangkat) |
| `tambahKaro` | `+=` | Addition assignment |
| `kurangKaro` | `-=` | Subtraction assignment |
| `pingKaro` | `*=` | Multiplication assignment |
| `bagiKaro` | `/=` | Division assignment |
| `sisoKaro` | `%=` | Modulo assignment |
| `plek` | `===` | Strict equality (equal value and type) |
| `podo` | `==` | Loose equality (equal value) |
| `gakPlek` | `!==` | Strict inequality |
| `gakPodo` | `!=` | Loose inequality |
| `luwihGedhe` | `>` | Greater than |
| `luwihCilik` | `<` | Less than |
| `luwihGedhePodo`| `>=` | Greater than or equal to |
| `luwihCilikPodo`| `<=` | Less than or equal to |
| `lan` | `&&` | Logical AND |
| `utawa` | `||` | Logical OR |
| `ora` | `!` | Logical NOT |
| `ikuJinise` | `instanceof` | Checks if an object is an instance of a specific class |
| `tipene` | `typeof` | Checks the data type of a value |
| `hapusen` | `delete` | Deletes a property from an object |
| `kosongno` | `void` | Evaluates an expression and returns `undefined` |
| `ing` | `in` | Checks if a property exists in an object |

### Optional Chaining: `.mungkin.`

Jawascript provides a safe way to access properties of an object that might be `null` or `undefined` without causing an error. This is achieved using the `.mungkin.` syntax, similar to JavaScript's `?.` operator.

- `.mungkin.`: Safely accesses a property. If any part of the chain is `null` or `undefined`, the expression short-circuits and returns `undefined`.

```jawascript
iki iku pengguna yoiku { jeneng: 'Sastro', alamat: { jalan: 'Jl. Kenangan' } };
iki iku penggunaKosong yoiku kosong;

// Accessing an existing property
iki iku namaJalan yoiku pengguna.alamat.mungkin.jalan;
cetakno('Nama Jalan:', namaJalan); // Output: Jl. Kenangan

// Accessing a non-existent property
iki iku kodePos yoiku pengguna.alamat.mungkin.kodePos;
cetakno('Kode Pos (non-existent):', kodePos); // Output: undefined

// Accessing property from a null object
iki iku namaJalanKosong yoiku penggunaKosong.mungkin.alamat.mungkin.jalan;
cetakno('Nama Jalan from null object:', namaJalanKosong); // Output: undefined
```

### Nullish Coalescing Operator: `utowoYenKosong`

This operator provides a way to set a default value for a variable that is `null` or `undefined`. Unlike the logical OR (`||`) operator, `utowoYenKosong` only falls back to the default value if the left-hand side is strictly `null` or `undefined`, not for other falsy values like `0` or `''`.

- `value utowoYenKosong defaultValue`: Returns `value` if it's not `null` or `undefined`; otherwise, returns `defaultValue`.

```jawascript
iki iku nilaiNol yoiku 0;
iki iku nilaiKosong yoiku kosong;
iki iku nilaiOraDidefinisikan yoiku oraDidefinisikan;
iki iku nilaiTeksKosong yoiku '';

cetakno('Nilai Nol utowoYenKosong 10:', nilaiNol utowoYenKosong 10); // Output: 0
cetakno('Nilai Kosong utowoYenKosong 10:', nilaiKosong utowoYenKosong 10); // Output: 10
cetakno('Nilai OraDidefinisikan utowoYenKosong 10:', nilaiOraDidefinisikan utowoYenKosong 10); // Output: 10
cetakno('Nilai Teks Kosong utowoYenKosong 10:', nilaiTeksKosong utowoYenKosong 10); // Output: ''

// Compare with logical OR (utawa)
cetakno('Nilai Nol utawa 10:', nilaiNol utawa 10); // Output: 10 (because 0 is falsy)
```

### Bitwise Operators

Jawascript provides a set of keywords for performing bitwise operations, which manipulate values at the binary bit level. These are useful for low-level programming, flag management, and certain algorithms.

| Javanese Operator | JavaScript Equivalent | Description |
| :--- | :--- | :--- |
| `lanbit` | `&` | Bitwise AND |
| `utawabit` | `|` | Bitwise OR |
| `xor` | `^` | Bitwise XOR (Exclusive OR) |
| `walik` | `~` | Bitwise NOT (Inversion) |
| `geserKiwo` | `<<` | Left Shift |
| `geserTengen`| `>>` | Right Shift |
| `geserTengenNol`| `>>>` | Zero-fill Right Shift |

**Example:**
```jawascript
iki iku a yoiku 5; // Binary: 0101
iki iku b yoiku 3; // Binary: 0011

cetakno('a lanbit b:', a lanbit b); // Output: 1 (0001)
cetakno('a utawabit b:', a utawabit b); // Output: 7 (0111)
cetakno('a xor b:', a xor b); // Output: 6 (0110)
cetakno('walik a:', walik a); // Output: -6 (Binary: 11111111111111111111111111111010)

cetakno('a geserKiwo 1:', a geserKiwo 1); // Output: 10 (1010)
cetakno('a geserTengen 1:', a geserTengen 1); // Output: 2 (0010)
```

**Example:**
```jawascript
iki iku angkaSiji yoiku 10
jarno angkaLoro yoiku 4

// Arithmetic
jarno hasilTambah yoiku angkaSiji tambah angkaLoro // -> 14
cetakno(2 pangkat 3) // -> 8

// Comparison & Logical
lek (hasilTambah luwihGedhe 10 lan ora (angkaSiji podo 0)) terus
  cetakno("Result is greater than 10 AND angkaSiji is not 0")
mbari

// Assignment
jarno skorku yoiku 100
skorku kurangKaro 10 // skorku is now 90
cetakno(skorku)

// Example for ikuJinise
kelas Mobil terus
  wujudno(merk) terus
    iki.merk yoiku merk
  mbari
mbari
jarno mobilku yoiku Mobil anyar("Toyota")
cetakno(mobilku ikuJinise Mobil) // Output: tenan

// Example for tipene
cetakno(tipene "halo") // Output: "string"

// Example for hapusen
jarno obj yoiku { a: 1, b: 2 }
hapusen obj.a
cetakno(obj.a) // Output: oraDidefinisikan

// Example for ing
jarno person yoiku { jeneng: "Budi", umur: 30 }
cetakno("jeneng" ing person) // Output: tenan
cetakno("alamat" ing person) // Output: gak
```

## Special Keywords

Jawascript includes several special keywords that provide specific functionalities or refer to particular contexts.

| Javanese Keyword | JavaScript Equivalent | Description |
| :--- | :--- | :--- |
| `iki` | `this` | Refers to the current object instance. |
| `soko` | `of` | Used in `kanggo...soko` (`for...of`) loops for iterating over values of iterable objects. |
| `debug` | `debugger` | Invokes the JavaScript debugger function, pausing execution. |
| `tetep` | `static` | Defines a static method or property in a class, belonging to the class itself rather than instances. |
| `entuk` | `get` | Defines a getter method in a class, used to retrieve the value of a property. |
| `pasang` | `set` | Defines a setter method in a class, used to set the value of a property. |

**Example:**
```jawascript
// Example for iki (this) - already covered in Class & Inheritance section

// Example for soko (for...of)
jarno daftarAngka yoiku [1, 2, 3]
kanggo (jarno angka soko daftarAngka) terus
  cetakno(angka) // Output: 1, 2, 3
mbari

// Example for debug
// debug // Uncomment to activate debugger

// Example for tetep (static)
kelas Utilitas terus
  tetep gawe sapa() terus
    cetakno("Halo dari Utilitas!")
  mbari
mbari
Utilitas.sapa() // Output: "Halo dari Utilitas!"

// Example for entuk (get) and pasang (set)
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

## Module System: `jupukno` & `metokno`

Jawascript supports a module system to help you organize your code into multiple files.

- `metokno { ... }`: For exporting specific/named variables or functions.
- `metokno biasane ...`: For exporting a single default value from a file.
- `jupukno ... soko '...'`: For importing code from another file.
- `biasane`: Used with `jupukno` and `metokno` to specify a default import/export.
- `dadi`: For renaming an import.

### Re-exporting as Namespace: `metokno kabeh dadi ...`

This syntax allows you to re-export all exports from another module as a single namespace object.

```jawascript
// JS: export * as utils from './utils.js';

// Jawascript:
metokno kabeh dadi util soko './util_export.js';

// Example of usage (assuming util_export.js exports `a` and `b`)
// cetakno(util.a);
```

### Dynamic Imports: `jupukno(...)`

Jawascript supports dynamic imports, allowing you to load modules on demand. This is useful for code splitting or conditionally loading modules.

```jawascript
// JS: import('./module.js').then(module => console.log(module));

// Jawascript:
jupukno('./modul_dinamis.js')
  .banjur(modul lakoni cetakno('Pesan dari modul dinamis:', modul.pesan))
  .nyekel(error lakoni cetakno('Error saat mengimpor modul:', error));

cetakno('Ini akan dieksekusi sebelum modul dinamis selesai diimpor.');
```

**Important:** The import path must point to the transpiled `.js` file, not the source `.jawa` file.

**Example:**

**`util.jawa`**
```jawascript
// util.jawa
gawe salam(jeneng) terus
  balekno "Sugeng rawuh, " tambah jeneng
mbari

iki iku VERSI yoiku "1.0"

// Export named
metokno { salam }

// Export default
metokno biasane VERSI
```

**`app.jawa`**
```jawascript
// app.jawa
// Import default (VERSI) and named (salam), renaming salam to ngucapnoSalam
jupukno biasane versiAplikasi, { salam dadi ngucapnoSalam } soko './util.js'

cetakno("Versi:", versiAplikasi) // -> Versi: 1.0
cetakno(ngucapnoSalam("Doni")) // -> Sugeng rawuh, Doni
```

## Class & Inheritance (OOP)

Jawascript also supports basic Object-Oriented Programming.

- `kelas ...`: For declaring a class.
- `wujudno(...)`: The class constructor.
- `turunan soko`: For inheriting from a parent class.
- `induk(...)`: For calling the parent class's constructor.
- `iki`: Refers to the current object instance (similar to `this` in JavaScript).

**Example:**
```jawascript
// Parent Class
kelas Kewan terus
  wujudno(jeneng) terus
    iki.jeneng yoiku jeneng
  mbari

  mangan() terus
    cetakno(iki.jeneng tambah " lagi mangan.")
  mbari
mbari

// Child Class
kelas Kucing turunan soko Kewan terus
  wujudno(jeneng) terus
    induk(jeneng) // calls parent constructor
  mbari

  meong() terus
    cetakno(iki.jeneng tambah " muni Meong!")
  mbari
mbari

jarno kucingku yoiku Kucing anyar("Tom")
kucingku.mangan()  // Inherited method
kucingku.meong()   // Own method
```

## Metaprogramming: `Perantara` (Proxy) dan `Pantulan` (Reflect)

Jawascript supports advanced metaprogramming through `Perantara` (Proxy) and `Pantulan` (Reflect) objects, allowing you to intercept and define custom behavior for fundamental language operations.

-   `Perantara`: An object that wraps another object (the target) and intercepts operations like property lookup, assignment, and function invocation.
-   `Pantulan`: A built-in object that provides static methods for the intercepted operations, allowing you to invoke the original default behavior from within your proxy handler.

**Keywords:**

| Javanese Keyword | JavaScript Equivalent | Description |
| :--- | :--- | :--- |
| `Perantara` | `Proxy` | The Proxy constructor. |
| `Pantulan` | `Reflect` | The Reflect object. |
| `Pantulan.jupuk` | `Reflect.get` | Retrieves a property from an object. |
| `Pantulan.pasang` | `Reflect.set` | Sets a property on an object. |
| `Pantulan.bangun` | `Reflect.construct` | Constructs a new object. |
| `...` | `...` | And all other `Reflect` methods. |

**Example:**
Here's how to create a proxy that logs property accesses and validates new values before setting them.

```jawascript
// 1. The target object
iki iku target yoiku {
  pesen: 'Halo Dunia',
  nilai: 100
};

// 2. The handler for the proxy
iki iku penangan yoiku {
  // Trap for getting a property
  jupuk: gawe(obj, prop) terus
    cetakno(`Nyoba jupuk properti: "${prop}"`);
    // Use Pantulan.jupuk for default behavior
    balekno Pantulan.jupuk(obj, prop);
  mbari,

  // Trap for setting a property
  pasang: gawe(obj, prop, value) terus
    cetakno(`Nyoba masang "${prop}" dadi "${value}"`);
    lek (prop plek 'nilai' lan tipene value ora plek 'Angka') terus
      uncalen anyar Kesalahan('Nilai kudu angka!');
    mbari
    // Use Pantulan.pasang for default behavior
    balekno Pantulan.pasang(obj, prop, value);
  mbari
};

// 3. Create the Proxy object
iki iku p yoiku anyar Perantara(target, penangan);

// 4. Trigger the 'jupuk' trap
cetakno(p.pesen); // -> "Nyoba jupuk properti: "pesen""
                 // -> "Halo Dunia"

// 5. Trigger the 'pasang' trap (success)
p.nilai yoiku 200; // -> "Nyoba masang "nilai" dadi "200""

// 6. Trigger the 'pasang' trap (failure)
cobak terus
  p.nilai yoiku 'dudu angka'; // -> "Nyoba masang "nilai" dadi "dudu angka""
mbari nyekel (e) terus
  cetakno('Error: ' tambah e.message); // -> "Error: Nilai kudu angka!"
mbari
```

## Built-in Functions

JawaScript provides access to several common built-in JavaScript objects and global functions.

### Global Values

*   `kosong`: Represents a `null` value.
*   `oraDidefinisikan`: Represents an `undefined` value.
*   `gudukAngka`: Represents `NaN` (Not-a-Number).
*   `tanpaBates`: Represents `Infinity`.

### Global Constructors

Jawascript provides Javanese equivalents for common JavaScript global constructors. These are used to create new instances of built-in types.

**New Instance Creation Syntax:**
You can now create new instances using the `ClassName anyar()` syntax, in addition to the traditional `anyar ClassName()` syntax.

| Javanese Constructor | JavaScript Equivalent | Description |
| :--- | :--- | :--- |
| `Daftar` | `Array` | Creates a new Array object. |
| `Obyek` | `Object` | Creates a new Object object. |
| `Teks` | `String` | Creates a new String object. |
| `Angka` | `Number` | Creates a new Number object. |
| `Logika` | `Boolean` | Creates a new Boolean object. |
| `Simbol` | `Symbol` | Creates a new Symbol object. |
| `Peta` | `Map` | Creates a new Map object. |
| `Kumpulan` | `Set` | Creates a new Set object. |
| `Janji` | `Promise` | Creates a new Promise object. |
| `Kesalahan` | `Error` | Creates a new Error object. |
| `PolaTeks` | `RegExp` | Creates a new RegExp object for regular expressions. |

**Static Methods for `Obyek` (Object) and `Daftar` (Array):**
Jawascript also provides direct access to common static methods of `Object` and `Array` using their Javanese names.

| Javanese Method | JavaScript Equivalent | Description |
| :--- | :--- | :--- |
| `Obyek.iku(value1, value2)` | `Object.is(value1, value2)` | Compares two values for strict equality. |
| `Obyek.wenehno(target, ...sources)` | `Object.assign(target, ...sources)` | Copies all enumerable own properties from one or more source objects to a target object. |
| `Obyek.kunci(obj)` | `Object.keys(obj)` | Returns an array of a given object's own enumerable property names. |
| `Obyek.nilai(obj)` | `Object.values(obj)` | Returns an array of a given object's own enumerable property values. |
| `Obyek.entri(obj)` | `Object.entries(obj)` | Returns an array of a given object's own enumerable string-keyed property `[key, value]` pairs. |
| `Daftar.ikiDaftar(value)` | `Array.isArray(value)` | Determines whether the passed value is an `Array`. |

**Example:**
```jawascript
// New instance creation syntax
jarno daftarKosong yoiku Daftar anyar()
cetakno(daftarKosong) // Output: []

jarno obyekKosong yoiku Obyek anyar()
cetakno(obyekKosong) // Output: {}

// Old instance creation syntax still works
jarno teksBaru yoiku Teks anyar("Halo")
cetakno(teksBaru) // Output: [String: 'Halo']

jarno janjiBaru yoiku Janji anyar(gawe (resolve, reject) terus
  // Lakukan sesuatu yang asinkron
  resolve("Selesai!")
mbari)
janjiBaru.banjur(gawe (pesan) terus
  cetakno(pesan) // Output: Selesai!
mbari)

// Static methods example
iki iku obj1 yoiku { a: 1 };
iki iku obj2 yoiku { b: 2 };
iki iku obj3 yoiku Obyek.wenehno({}, obj1, obj2);
cetakno("Object.assign: " + DataJSON.stringkan(obj3)); // Output: {"a":1,"b":2}
cetakno("Object.is(1, 1): " tambah Obyek.iku(1, 1)); // Output: tenan
cetakno("Object.keys: " + Obyek.kunci(obj3)); // Output: a,b
cetakno("Array.isArray([]): " + Daftar.ikiDaftar(Daftar anyar())); // Output: tenan
```

**Example for `Simbol`:**
`Simbol` creates a unique value that can be used as a property key in an object, preventing name collisions.

```jawascript
// Example for Simbol
iki iku idUnik yoiku Simbol('id')
iki iku pangguna yoiku {
  jeneng: 'Slamet'
}

pangguna[idUnik] yoiku '987-xyz'

// The symbol key is not visible in normal iterations
cetakno(Obyek.kunci(pangguna)) // -> ['jeneng']
cetakno(pangguna.jeneng)      // -> 'Slamet'
cetakno(pangguna[idUnik])     // -> '987-xyz'
```

### `Mtk` Object (for `Math`)

Jawascript provides the `Mtk` object as an equivalent to JavaScript's built-in `Math` object, offering various mathematical functions and constants.

**Constants**

| Constant | Description |
| :--- | :--- |
| `Mtk.PI` | Ratio of a circle's circumference to its diameter (≈ 3.14159). |
| `Mtk.E` | Euler's number, base of natural logarithms (≈ 2.718). |
| `Mtk.LN2` | Natural logarithm of 2 (≈ 0.693). |
| `Mtk.LN10` | Natural logarithm of 10 (≈ 2.303). |
| `Mtk.LOG2E` | Base 2 logarithm of E (≈ 1.443). |
| `Mtk.LOG10E` | Base 10 logarithm of E (≈ 0.434). |
| `Mtk.SQRT1_2` | Square root of 1/2 (≈ 0.707). |
| `Mtk.SQRT2` | Square root of 2 (≈ 1.414). |

**Functions**

| Function | Description |
| :--- | :--- |
| `Mtk.acak()` | Returns a pseudo-random number between 0 and 1. |
| `Mtk.bunder(x)` | Rounds a number to the nearest integer. |
| `Mtk.ngisor(x)` | Returns the largest integer less than or equal to a number. |
| `Mtk.nduwur(x)` | Returns the smallest integer greater than or equal to a number. |
| `Mtk.mutlak(x)` | Returns the absolute value of a number. |
| `Mtk.pangkat(base, exp)` | Returns the base to the exponent power. |
| `Mtk.oyot(x)` | Returns the square root of a number. |
| `Mtk.palingDhuwur(a, b, ...)` | Returns the largest of zero or more numbers. |
| `Mtk.palingNgisor(a, b, ...)` | Returns the smallest of zero or more numbers. |
| `Mtk.sin(x)` | Returns the sine of a number. |
| `Mtk.cos(x)` | Returns the cosine of a number. |
| `Mtk.tan(x)` | Returns the tangent of a number. |
| `Mtk.asin(x)` | Returns the arcsine of a number. |
| `Mtk.acos(x)` | Returns the arccosine of a number. |
| `Mtk.atan(x)` | Returns the arctangent of a number. |
| `Mtk.atan2(y, x)` | Returns the arctangent of the quotient of its arguments. |
| `Mtk.log(x)` | Returns the natural logarithm (base E) of a number. |
| `Mtk.log2(x)` | Returns the base 2 logarithm of a number. |
| `Mtk.log10(x)` | Returns the base 10 logarithm of a number. |
| `Mtk.exp(x)` | Returns E<sup>x</sup>. |
| `Mtk.cbrt(x)` | Returns the cube root of a number. |
| `Mtk.clz32(x)` | Returns the number of leading zero bits in a 32-bit integer. |
| `Mtk.cosh(x)` | Returns the hyperbolic cosine of a number. |
| `Mtk.expm1(x)` | Returns e<sup>x</sup> - 1. |
| `Mtk.fround(x)` | Returns the nearest single precision float representation. |
| `Mtk.hypot(...args)` | Returns the square root of the sum of squares of arguments. |
| `Mtk.imul(x, y)` | Returns the result of a C-like 32-bit multiplication. |
| `Mtk.log1p(x)` | Returns the natural logarithm of 1 + x. |
| `Mtk.sign(x)` | Returns the sign of a number. |
| `Mtk.sinh(x)` | Returns the hyperbolic sine of a number. |
| `Mtk.tanh(x)` | Returns the hyperbolic tangent of a number. |
| `Mtk.trunc(x)` | Returns the integer part of a number. |

### `Tanggalan` Object (for `Date`)

*   `Tanggalan.saiki()`: Returns the number of milliseconds elapsed since January 1, 1970 UTC.
*   `Tanggalan anyar()`: Creates a new Date object representing the current date and time.

### `DataJSON` Object (for `JSON`)

*   `DataJSON.urai(str)`: Parses a JSON string.
*   `DataJSON.stringkan(obj)`: Converts a JavaScript value to a JSON string.

### Global Functions

*   `ikiGudukAngka(value)`: Determines whether a value is `NaN` (Not a Number).
*   `jadiknoInt(str, radix)`: Parses a string and returns an integer.
*   `jadiknoFloat(str)`: Parses a string and returns a floating-point number.
*   `ikiTerbatas(value)`: Determines whether a value is a finite number.
*   `uraiURI(encodedURI)`: Decodes a Uniform Resource Identifier (URI) component.
*   `enkodeURI(uri)`: Encodes a Uniform Resource Identifier (URI).
*   `uraiBagianURI(encodedURIComponent)`: Decodes a Uniform Resource Identifier (URI) component.
*   `enkodeBagianURI(uriComponent)`: Encodes a Uniform Resource Identifier (URI) component.
*   `globalIki`: Refers to the global `globalThis` object, providing a standard way to access the global scope.
*   `setWaktuInterval(callback, delay)`: Repeatedly calls a function or executes a code snippet, with a fixed time delay between each call.
*   `hapusWaktuInterval(intervalID)`: Clears a timer set with `setWaktuInterval()`.
*   `setWaktuTunda(callback, delay)`: Executes a function, or evaluates an expression, after a specified delay (in milliseconds).
*   `hapusWaktuTunda(timeoutID)`: Clears a timer set with `setWaktuTunda()`.

**Example:**
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

### Promise Methods: `.banjur` & `.nyekel`

Jawascript provides Javanese equivalents for the standard Promise methods, allowing for clear and consistent asynchronous code handling.

| Jawascript Method | JavaScript Equivalent | Description |
| :--- | :--- | :--- |
| `.banjur(onFulfilled, onRejected?)` | `.then(onFulfilled, onRejected?)` | Handles the successful fulfillment of a Promise. |
| `.nyekel(onRejected)` | `.catch(onRejected)` | Handles the rejection of a Promise. |

**Example:**
```jawascript
// JS: myPromise.then(result => console.log(result)).catch(error => console.error(error));

// Jawascript:
iki iku janjiContoh yoiku Janji anyar((resolve, reject) dadi terus
  // Simulate an async operation
  setWaktuTunda(() dadi resolve('Operasi berhasil!'), 100);
mbari);

janjiContoh
  .banjur(hasil lakoni cetakno('Sukses:', hasil))
  .nyekel(error lakoni cetakno('Error:', error));

// Example with a failing promise
iki iku janjiGagal yoiku Janji anyar((resolve, reject) lakoni terus
  setWaktuTunda(() lakoni reject('Operasi gagal!'), 50);
mbari);

janjiGagal
  .banjur(hasil lakoni cetakno('Sukses (tidak seharusnya terjadi):', hasil))
  .nyekel(error lakoni cetakno('Error:', error));
```

### Array & String Methods

Jawascript now hooks you up with a bunch of common methods for Arrays and Strings. Many method names can be used for both (like `.dawane` to get the length of an Array or a String).

#### Array-Specific Methods

These methods are for `Daftar` (Array) types.

| Jawascript Method | JavaScript Equivalent | Example Usage |
| :--- | :--- | :--- |
| `.dorong(item)` | `.push(item)` | `myList.dorong(4)` |
| `.jupukPungkasan()`| `.pop()` | `lastItem = myList.jupukPungkasan()` |
| `.geser()` | `.shift()` | `firstItem = myList.geser()` |
| `.tambahNgarep(item)`| `.unshift(item)`| `myList.tambahNgarep(0)` |
| `.sambung(idx, del, item?)` | `.splice(idx, del, item?)` | `myList.sambung(1, 0, 'newItem')` |
| `.sambungake(separator)`| `.join(separator)`| `myList.sambungake('-')` |
| `.walik()` | `.reverse()` | `myList.walik()` |
| `.urutake(fn?)` | `.sort(fn?)` | `[3,1,2].urutake((a, b) => a - b)` |
| `.golek(fn)` | `.find(fn)` | `myList.golek(x => x > 1)` |
| `.golekIndeks(fn)` | `.findIndex(fn)` | `myList.golekIndeks(x => x > 10)` |
| `.golekIndeksPungkasan(item)`| `.lastIndexOf(item)`| `['a','b','a'].golekIndeksPungkasan('a')` |
| `.saring(fn)` | `.filter(fn)` | `myList.saring(x => x > 2)` |
| `.petakake(fn)` | `.map(fn)` | `myList.petakake(x => x * 2)` |
| `.kanggoSaben(fn)` | `.forEach(fn)` | `myList.kanggoSaben(x => cetakno(x))` |
| `.suda(fn, initial?)` | `.reduce(fn, initial?)` | `myList.suda((total, current) => total + current)` |
| `.sudaTengen(fn, initial?)` | `.reduceRight(fn, initial?)`| `myList.sudaTengen((total, current) => total + current)` |
| `.ana(fn)` | `.some(fn)` | `myList.ana(x => x > 5)` |
| `.kabeh(fn)` | `.every(fn)` | `myList.kabeh(x => x > 0)` |

#### String-Specific Methods

These methods are for `Teks` (String) types.

| Jawascript Method | JavaScript Equivalent | Example Usage |
| :--- | :--- | :--- |
| `.gedekno()` | `.toUpperCase()` | `myText.gedekno()` |
| `.cilikno()` | `.toLowerCase()` | `myText.cilikno()` |
| `.rapikno()` | `.trim()` | `' some space '.rapikno()` |
| `.gantien(a, b)` | `.replace(a, b)` | `myText.gantien('old', 'new')` |
| `.gantienKabeh(a, b)`| `.replaceAll(a, b)`| `myText.gantienKabeh('a', 'o')` |
| `.pecahen(separator)`| `.split(separator)`| `'a-b-c'.pecahen('-')` |
| `.dimulaiKaro(s)` | `.startsWith(s)` | `myText.dimulaiKaro('Jawa')` |
| `.diakhiriKaro(s)` | `.endsWith(s)` | `myText.diakhiriKaro('!')` |
| `.tambahiNgarep(len, txt)` | `.padStart(len, txt)` | `myText.tambahiNgarep(10, '0')` |
| `.tambahiMburi(len, txt)` | `.padEnd(len, txt)` | `myText.tambahiMburi(10, '.')` |
| `.potonganTeks(start, end?)`| `.substring(start, end?)`| `myText.potonganTeks(0, 4)` |
| `.karakterKe(index)`| `.charAt(index)` | `myText.karakterKe(0)` |
| `.cocokno(regex)` | `.match(regex)` | `myText.cocokno(/jawa/i)` |
| `.goleki(word)` | `.search(word)` | `myText.goleki('cool')` |

#### Shared Methods (for both Array & String)

These things are work on both `Daftar` (Array) and `Teks` (String).

| Jawascript Method | JavaScript Equivalent | Example Usage |
| :--- | :--- | :--- |
| `.dawane` | `.length` | `[1,2].dawane` or `'abc'.dawane` |
| `.ngemot(item)` | `.includes(item)` | `myList.ngemot(2)` or `myText.ngemot('a')` |
| `.iris(start, end?)` | `.slice(start, end?)` | `myList.iris(1)` or `myText.iris(0, 5)` |
| `.gabung(item)` | `.concat(item)` | `list1.gabung(list2)` or `text1.gabung(text2)` |
| `.indeksSaka(item)`| `.indexOf(item)` | `myList.indeksSaka(3)` or `myText.indeksSaka('b')` |

## CLI Usage

Jawascript provides a Command Line Interface (CLI) tool named `djawa` to help you manage and run your `.jawa` files.

### Installation

1.  Make sure you have [Node.js](https://nodejs.org/) installed.
2.  Install JawaScript globally via npm:
    ```bash
    npm install -g @jawirhytam/jawirscript
    ```

### Commands

Here are the available `djawa` commands:

*   **`djawa run <file.jawa>`**
    Transpiles and executes a `.jawa` file directly.

*   **`djawa build <file.jawa>`**
    Transpiles a `.jawa` file into a `.js` file.

*   **`djawa make <filename>`**
    Creates a new `.jawa` file from a template.

*   `djawa version` or `djawa -v`
    Displays the current version of JawaScript.

*   `djawa help` or `djawa -h`
    Shows the help message.
