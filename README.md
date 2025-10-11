[English](./README.md) | [Bahasa Indonesia](./README-ID.md)
---
# Yo, What's up? This is JawaScript!

So, JawaScript is this cool thing called a "transpiler". It takes a simple programming language inspired by Javanese and turns it into regular JavaScript. The whole point is to make coding more chill and easier to read, especially if you get the Javanese vibe.

## What's Inside

- [The Basics](#the-basics)
  - [Code Blocks: `terus` & `mbari`](#code-blocks-terus--mbari)
  - [Leaving Notes (Comments)](#leaving-notes-comments)
  - [Storing Stuff (Variables)](#storing-stuff-variables)
  - [Printing & Asking Stuff](#printing--asking-stuff)
  - [Data Types](#data-types)
  - [Optional Types (If You're Feeling Fancy)](#optional-types-if-youre-feeling-fancy)
- [Controlling the Flow](#controlling-the-flow)
  - [Quick Decisions (Ternary)](#quick-decisions-ternary-operator-ta--lek-gak)
  - [Reusable Code (Functions)](#reusable-code-functions)
  - [Short & Sweet Functions (Arrow Functions)](#short--sweet-functions-arrow-functions-lakoni)
  - [Handling Oopsies (Error Handling)](#handling-oopsies-error-handling)
  - [Doing Things Later (Async/Await)](#doing-things-later-asyncawait)
  - [Data Pairs That Don't Change (Tuples)](#data-pairs-that-dont-change-tuples)
- [Jawascript's Special Moves](#jawascripts-special-moves)
  - [Checking for Nothing (`iku ono` & `iku ilang`)](#checking-for-nothing-iku-ono--iku-ilang)
- [Operators & Comparisons](#operators--comparisons)
  - [Safe Property Access (Optional Chaining)](#safe-property-access-optional-chaining-mungkin)
  - [Default Values (Nullish Coalescing)](#default-values-nullish-coalescing-operator-utowoyenkosong)
  - [Bit-level Magic (Bitwise Operators)](#bit-level-magic-bitwise-operators)
- [Special Keywords](#special-keywords)
- [Splitting Up Your Code (Modules)](#splitting-up-your-code-modules)
- [Building Blueprints (Classes & OOP)](#building-blueprints-classes--oop)
- [Super Advanced Stuff (Metaprogramming)](#super-advanced-stuff-metaprogramming)
- [Built-in Goodies](#built-in-goodies)
- [Using the Command Line Tool](#using-the-command-line-tool-cli)

All your code goes into files ending with `.jawa`.

### Code Blocks: `terus` & `mbari`

Jawascript is all about blocks. Any chunk of code (like in functions, loops, ifs) needs to start with `terus` and end with `mbari`. Easy peasy.

```jawascript
lek (tenan) terus
  // your code goes here
mbari
```

### Leaving Notes (Comments)

- **Single-line:** Use `//`.
- **Multi-line:** Start with `/*` and end with `*/`.

### Storing Stuff (Variables)

- `iki iku`: Use this for stuff that won't change (constants).
- `jarno`: Use this for stuff you need to change later (variables).

```jawascript
// A value that never changes
iki iku myName yoiku "Budi"

// A value you can change
jarno myAge yoiku 25
myAge yoiku myAge tambah 1 // myAge is now 26
```

### Printing & Asking Stuff

Jawascript gives you `cetakno` (like `console` in JS) to print things out and `takon` to ask the user for input.

| Method | What it does |
| :--- | :--- |
| `cetakno(...)` | Prints stuff to the console. |
| `cetakno.peringatan(...)` | Yells a warning. |
| `cetakno.kesalahan(...)` | Screams about an error. |
| `cetakno.info(...)` | Just some friendly info. |
| `cetakno.debug(...)` | For when you're hunting bugs. |
| `takon(message)` | Asks the user a question. |

```jawascript
cetakno("Hello World!")

jarno yourName yoiku takon("What's your name? ")
cetakno("Wassup, " tambah yourName)

cetakno.peringatan("Uh oh, a warning!")
cetakno.kesalahan("Yikes, an error!")
```

### Data Types

Keywords for your basic data values.

- `tenan`: It's `true`.
- `gak`: It's `false`.
- `kosong`: It's `null`.
- `oraDidefinisikan`: It's `undefined`.

```jawascript
jarno isLearning yoiku tenan
lek (isLearning plek tenan) terus
  cetakno("You got this!")
mbari
```

### Optional Types (If You're Feeling Fancy)

Jawascript now lets you add types to your code, kinda like TypeScript. It's optional, but it makes your code cleaner, helps you catch bugs early, and makes your code editor smarter.

**Why it's cool:**
-   **Catch Bugs Early:** Find type mistakes before you even run the code.
-   **Easier to Read:** Your code basically explains itself.
-   **Smarter Editor:** Get better autocomplete and help from your IDE.

**How it looks:**

```jawascript
// Variables
jarno age: Angka = 30;
iki iku name: Teks = "Budi";

// Functions
gawe greet(name: Teks): Teks terus
  balekno "Hello " tambah name;
mbari
```

**Basic Types:** `Angka` (number), `Teks` (string), `Logika` (boolean), `Kosong` (null), `Daftar` (Array), `Obyek` (Object), `Sembarang` (any), `OraOno` (void).

**How it works:** Jawascript just turns this into TypeScript code, so you can use the TypeScript compiler (`tsc`) to check it.

### Controlling the Flow

Tell your code where to go with ifs, loops, and switches.

- **If/Else**
  - `lek (condition)`: `if`
  - `lek misale (condition)`: `else if`
  - `liyane`: `else`

### Quick Decisions (Ternary Operator: `ta` & `lek gak`)

A short way to do an if/else check in one line.

- `condition ta value_if_true lek gak value_if_false`: If the condition is true, you get the first value. If not, you get the second.

```jawascript
// JS: const status = age >= 18 ? 'Adult' : 'Minor';

iki iku age yoiku 20;
iki iku status yoiku age luwihGedhePodo 18 ta 'Adult' lek gak 'Minor';
cetakno("Status:", status); // -> Adult
```

- **Loops**
  - `kanggo (init; cond; iter)`: Your classic `for` loop.
  - `selagi (condition)`: Your classic `while` loop.
  - `lakoni ... selagi (condition)`: A `do...while` loop. It always runs at least once.
  - `kanggo...ing`: `for...in` loop to go through object keys.
  - `kanggo...soko`: `for...of` loop to go through array values.

- **Loop Control**
  - `mandek`: `break` out of a loop.
  - `lanjutno`: `continue` to the next iteration.

### Reusable Code (Functions)

- `gawe (name)(params)`: Make a function.
- `balekno (value)`: Return a value.
- `asilno (value)`: `yield` a value from a generator.

```jawascript
gawe calculateArea(length, width) terus
  balekno length ping width
mbari

iki iku area yoiku calculateArea(10, 5)
cetakno(area) // -> 50
```

### Short & Sweet Functions (Arrow Functions: `lakoni`)

Jawascript has a shorter way to write functions, just like arrow functions in JS. Just use `lakoni`.

```jawascript
// JS: const multiply = (a, b) => a * b;
iki iku multiply yoiku (a, b) lakoni a ping b;
cetakno(multiply(7, 8)); // -> 56

// With multiple lines
iki iku greet yoiku (name) lakoni terus
  iki iku greeting yoiku "Welcome, " tambah name;
  balekno greeting;
mbari;
cetakno(greet("Sastro")); // -> Welcome, Sastro
```

### Handling Oopsies (Error Handling)

- `cobak`: `try` a block of code.
- `nyekel (error)`: `catch` any errors.
- `pungkasan`: `finally`, do this no matter what.
- `uncalen (value)`: `throw` an error.

```jawascript
cobak terus
  uncalen "Oh no, an error!"
mbari nyekel (e) terus
  cetakno("Caught an oopsie: " tambah e)
mbari pungkasan terus
  cetakno("This always runs, for real.")
mbari
```

### Doing Things Later (Async/Await)

- `tenangan`: Makes a function asynchronous (`async`).
- `enteni`: Waits for something to finish (`await`).

```jawascript
tenangan gawe processData() terus
  cetakno("Grabbing data...")
  iki iku data yoiku enteni fetchData() // assume fetchData exists
  cetakno("Got the data:", data)
mbari
```

### Data Pairs That Don't Change (Tuples)

Jawascript has `Tuples`. They're like arrays, but once you make one, you can't change what's inside. Perfect for things that should stay put, like coordinates.

```jawascript
// Make a coordinate Tuple
iki iku coords yoiku tuple(10, 20)
cetakno(coords[0]) // -> 10

// You can't change it!
cobak terus
  coords[0] = 5 // This won't work
mbari nyekel (e) terus
  cetakno("See? Told ya. Error:", e.message)
mbari
cetakno(coords[0]) // -> Still 10
```

## Jawascript's Special Moves

Jawascript has some unique tricks to make your life easier.

### Checking for Nothing (`iku ono` & `iku ilang`)

Checking for `null` or `undefined` is annoying. Jawascript makes it a breeze.

- `variable iku ono`: Checks if a variable is **NOT** `null` or `undefined`.
- `variable iku ilang`: Checks if a variable **IS** `null` or `undefined`.

It's way more readable. `iku ilang` just becomes `== null` in JS, which cleverly checks for both at once.

```jawascript
jarno emptyVar yoiku kosong; // null
jarno anotherVar; // undefined

lek (emptyVar iku ilang) terus
  cetakno('emptyVar is missing.'); // This runs
mbari

lek (anotherVar iku ilang) terus
  cetakno('anotherVar is also missing.'); // This also runs
mbari
```

## Operators & Comparisons

Jawascript swaps out boring JS operators for Javanese words. **Just remember to put spaces around them!**

| Javanese | JavaScript | What it is |
| :--- | :--- | :--- |
| `yoiku` | `=` | Assignment |
| `tambah` | `+` | Addition |
| `kurang` | `-` | Subtraction |
| `ping` | `*` | Multiplication |
| `bagi` | `/` | Division |
| `siso` | `%` | Remainder |
| `plek` | `===` | Strictly equals |
| `podo` | `==` | Loosely equals |
| `lan` | `&&` | AND |
| `utawa` | `||` | OR |
| `ora` | `!` | NOT |

### Safe Property Access (Optional Chaining: `.mungkin.`)

Safely dig into objects that might be `null` or `undefined` without your code blowing up. Use `.mungkin.`.

```jawascript
iki iku user yoiku { profile: { name: 'Sastro' } };
iki iku noUser yoiku kosong;

// Get a property safely
iki iku userName yoiku user.profile.mungkin.name;
cetakno('User name:', userName); // -> Sastro

// Try to get something from nothing
iki iku noName yoiku noUser.mungkin.profile.mungkin.name;
cetakno('Name from nothing:', noName); // -> undefined
```

### Default Values (Nullish Coalescing: `utowoYenKosong`)

Give a variable a fallback value if it's `null` or `undefined`. It's smarter than `||` because it won't replace `0` or `''`.

```jawascript
iki iku nullValue yoiku kosong;
iki iku zeroValue yoiku 0;

cetakno(nullValue utowoYenKosong 10); // -> 10
cetakno(zeroValue utowoYenKosong 10); // -> 0 (see? zero is kept)
```

### Bit-level Magic (Bitwise Operators)

For the nerds who like to fiddle with binary bits. 

| Javanese | JavaScript | What it is |
| :--- | :--- | :--- |
| `lanbit` | `&` | Bitwise AND |
| `utawabit` | `|` | Bitwise OR |
| `xor` | `^` | Bitwise XOR |
| `walik` | `~` | Bitwise NOT |
| `geserKiwo` | `<<` | Left Shift |
| `geserTengen`| `>>` | Right Shift |

## Special Keywords

More keywords for special situations.

| Javanese | JavaScript | What it is |
| :--- | :--- | :--- |
| `iki` | `this` | The current object context. |
| `tetep` | `static` | For class-level properties/methods. |
| `entuk` | `get` | A class getter. |
| `pasang` | `set` | A class setter. |

## Splitting Up Your Code (Modules)

Keep your code tidy by splitting it into different files.

- `metokno { ... }`: Export specific things (named export).
- `metokno biasane ...`: Export one main thing (default export).
- `jupukno ... soko '...'`: Import stuff from another file.
- `dadi`: Rename an import (`as`).

**`utils.jawa`**
```jawascript
gawe greet(name) terus
  balekno "Wassup, " tambah name
mbari
metokno { greet }
```

**`app.jawa`**
```jawascript
// Grab the greet function from utils.js
jupukno { greet } soko './utils.js'

cetakno(greet("Doni")) // -> Wassup, Doni
```

## Building Blueprints (Classes & OOP)

Yep, you can do Object-Oriented Programming.

- `kelas ...`: Declare a class.
- `wujudno(...)`: The constructor.
- `turunan soko`: Inherit from another class (`extends`).
- `induk(...)`: Call the parent's constructor (`super`).

```jawascript
// Parent Class
kelas Animal terus
  wujudno(name) terus
    iki.name yoiku name
  mbari
  eat() terus
    cetakno(iki.name tambah " is eating.")
  mbari
mbari

// Child Class
kelas Cat turunan soko Animal terus
  wujudno(name) terus
    induk(name) // call parent constructor
  mbari
  meow() terus
    cetakno(iki.name tambah " says Meow!")
  mbari
mbari

jarno myCat yoiku Cat anyar("Tom")
myCat.eat()  // Inherited method
myCat.meow()   // Its own method
```

## Super Advanced Stuff (Metaprogramming)

For the real pros, Jawascript supports `Perantara` (Proxy) and `Pantulan` (Reflect) to let you mess with the fundamental behaviors of the language. It's pretty wild.

## Built-in Goodies

JawaScript gives you Javanese names for common built-in JS stuff like `Math` (`Mtk`), `Date` (`Tanggalan`), and `JSON` (`DataJSON`), plus a bunch of global functions.

## Using the Command Line Tool (CLI)

Jawascript's got a CLI tool called `djawa` to run your code.

### Installation

1.  Make sure you have [Node.js](https://nodejs.org/) installed.
2.  Install it globally from NPM:
    ```bash
    npm install -g @jawirhytam/jawirscript
    ```

    Or install it from GitHub:
    ```bash
    npm install -g https://github.com/gegesteorngoding/djawa-script
    ```

### Commands

- **`djawa run <file.jawa>`**: Runs a file.
- **`djawa build <file.jawa>`**: Turns a `.jawa` file into a `.js` file.
- **`djawa make <filename>`**: Creates a new `.jawa` file from a template.
- **`djawa version` or `djawa -v`**: Shows the version.
- **`djawa help` or `djawa -h`**: Shows help.
