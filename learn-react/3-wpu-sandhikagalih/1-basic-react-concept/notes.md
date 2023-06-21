Prerequisite:
Basic Skill:
1. HTML+CSS
2. Javascript Fundamentals
3. DOM
4. Modern Javascript (ES6)
5. Git & CLI
6. Package Manager (NodeJS + NPM)

Modern Javascript Technique:
1. ES6 Variables (let & const)
2. Functions & Arrow Functions
3. Object & Classes
4. Arrays & Arrays Methods
5. Destructuring
6. Template Literals
7. Ternary Operators
8. ES Modules & Import / Export Syntax

Editor Setup
1. Code Editor: VSCode
2. Linter: ESLint
3. Code Formatter: Prettier
4. Browser Extention: React Developer Tools

React Core Concepts:
1. Components
2. Props
3. State

Membuat UI Menggunakan Komponen:
1. UI bisa dipecah menjadi bagian-bagian kecil yang disebut dengan komponen.
2. Dengan komponen kita bisa membuat potongan kode yang mandiri dan bisa digunakan kembali.
3. Anggap saja sebagai blok-blok LEGO, dimana kita bisa menyusun potongan-potongan kecil untuk membuat struktur yang lebih besar.
4. Jika kita ingin mengubah sebuah elemen pada UI kita hanya perlu mengubah komponennya saja.

Aturan Membuat Komponen
1. Komponen pada React pada dasarnya adalah function pada javascript.
2. Nama function ditulis diawali dengan huruf besar.
3. Function mengembalikan elemen UI yang akan dijadikan komponen, dan ditulis dengan JSX.
4. Dipanggil sebagai tag HTML saat di-render

Konsep Komponen Bersarang (Nested Component)
1. Sebuah aplikasi biasanya di dalamnya terdapat banyak komponen
2. Kita bisa menyimpan sebuah komponen di dalam komponen lain
3. Misalnya kita mau memasukkan komponen Header tadi ke dalam komponen HomePage
4. Buat function untuk setiap komponen yang akan dibuat

Konsep Menggunakan Kembali Komponen (Reuseable Component)
1. Kita bisa menggunakan komponen berulang-ulang dengan menuliskan tag nya kembali.
2. Bagaimana jika kita ingin menggunakan komponen yang sama tapi informasinya beda? Solusi menggunakan props.

Menampilkan Data Menggunakan Props
1. Di dalam HTML biasa, kita bisa menggunakan atribut untuk mengubah perilaku dari sebuah elemen.
2. Props mirip dengan atribut src pada elemen img, bisa mengubah sumber gambar yang akan ditampilkan.
3. Mirip seperti itu, kita juga bisa mengirimkan properti sebagai informasi untuk sebuah komponen, yang disebut dengan props.
4. Props tersebut ditangkap sebagai object saat komponen dibuat.

Menampilkan Elemen Menggunakan Pengulangan
1. Sangat umum ketika kita ingin menampilkan banyak data menggunakan pengulangan.
2. Salah satu caranya dalah dengan menggunakan method pada array.
3. Untuk memanipulasi data dan menampilkan elemen UI yang identik secara style, tapi berbeda informasinya.

Unique Key
1. React butuh sesuatu untuk menandai sebuah elemen dengan nilai yang unik, karena React harus tau elemen mana yang berubah.

Menambah Interaktivitas Dengan State
1. Banyak hal di halaman kita bisa berubah karena ada interaksi yang dilakukan oleh user.
2. Pada React, data yang berubah seiring waktu disebut dengan State.
3. Kita bisa menambahkan State untuk komponen manapun, dan diubah ketika kita butuhkan.
4. Untuk menambahkan interaktivitas pada elemen kita, React menggunkan State dan juga Event Handler.

State dan Hooks
1. Misalnya kita akan membuat tombol yang jika diklik, akan menambahkan jumlah angka sesuai dengan bebarapa kali tombol diklik.
2. React punya serangkaian function yang disebut dengan Hooks, yang memungkinkan kita menambahkan logic pada komponen kita.
3. Salah satu Hooks yang bisa digunakan untuk mengelola state adalah setState(), yang mengembalikan nilai berupa array, dan bisa kita akses menggunakan teknik destructuring.
4. Elemen pertama pada array adalah nilai statenya, dan elemen kedua merupakan function untuk mengubah nilainya
5. Nama function boleh apa saja, tapi biasanya diawali dengan set lalu nama nilai statenya.
contoh => const[likes, setLikes] = React.useState();
6. Kita juga bisa memberi nilai awal pada nilai statenya, dengan mengisi argumen pada useState()
contoh => const[likes, setLikes] = React.useState(0);

State Updater Function
1. Untuk menjalankan function yang mengubah statenya, kita bisa panggil di dalam sebuah function lain di dalam komponen kita
2. Misalnya kita mau mengubah nilai likes agar bertambah satu setiap tombol diklik, dan akan kita lakukan dalam function handleClick()
function handleClick() {
    setLikes(likes + 1);
}

Event Handler
1. Terakhir, tinggal kita membuat tombol untuk menangani event-nya.
2. Jangan lupa, menulis nama event harus menggunakan camelCase.
3. Tampilkan data likes sebagai text di dalam tombolnya
<button onClick={handleClick}>Like ({likes})</button>