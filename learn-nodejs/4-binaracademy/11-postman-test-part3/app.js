const express = require('express');
let posts = require('./db/post.json')
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
    console.log(req.url);
    next();
});

// API read postingan
// test postman: http://localhost:3000/api/v1/posts
app.get('/api/v1/posts/:id', (req, res) => {
    console.log('Isi params:', req.params);
    const post = posts.find((value) => {
        console.log('Value sekarang: ', value);
        console.log('Apakah value ini sesuai dengan id params: ', value.id == req.params.id);
        return value.id == req.params.id;
    });
    if(post !== undefined) {
        res.status(200).json({ status: 'success', data: post });
    } else {
        res.status(404).json({ status: "failed", error: 'Data not found!' });
    }
});

// API create postingan
// test postman: http://localhost:3000/api/v1/posts/insert
app.post('/api/v1/posts/insert', (req, res) => {
    // 1. Ambil data client di request body
    const data = req.body;
    console.log(data);
    // 2. Buat id baru untuk data tsb
    const id = post.length;
    // 3. Masukan data baru ke "database"
    posts.push({ id, title: data.title, body });
    // 4. Kirim respon perubahan data
    res.json(posts);
});

// API update postingan
// test postman: http://localhost:3000/api/v1/posts/update
app.put('/api/v1/posts/update/:id', (req, res) => {
    // 1. Susun terlebih dahulu data baru yang akan diubah
    const data = req.body;
    const newData = {
        id: Number(req.params.id),
        title: data.title,
        body: data.body
    };

    // 2. Cari data yang mau diubah, jika id-nya sesuai dengan id params maka update datanya
    posts = posts.map((value) => {
        //newData = { ...value, ...data };
        return value.id == req.params.id ? newData : value; 
    });

    // 3. kirim respon
    res.status(200).json(posts);
});

// API delete postingan
// test postman: http://localhost:3000/api/v1/posts/delete
app.delete('/api/v1/posts/delete/:id', (req, res) => {
    posts = posts.filter((value) => {
        return req.params.id != value.id;
    });
    req.status(200).json(posts);
});

// error handling internal error server
app.use((error, req, res, next) => {
    console.log(error);
    res.status(500).json({ status: 'failed', error: 'internal server error!' });
});

app.listen(3000, () => {
    console.log(`Server started on port ${port}`);
});

// const express = require('express');
// let posts = require('./db/post.json');
// const app = express();

// app.use(express.urlencoded({ extended: false }))

// app.use(function(req, res, next) {
//   const date = new Date()
//   console.log(req.url);
//   console.log('Time:', date.toUTCString())
//   next();
// })

// // === API untuk read postingan
// app.get('/api/v1/posts/:id', function (req, res) {
//   console.log('isi params:', req.params)
//   const post = posts.find(function (value) {
//     console.log('value sekarang:', value);
//     console.log('apakah value ini sesuai dengan id params:', value.id == req.params.id)
//     return value.id == req.params.id
//   })
//   if(post !== undefined) {
//     res.status(200).json({ status: 'success', data: post });
//   } else {
//     res.status(404).json({ status: 'failed', error: 'Data not found !' })
//   }
// })

// // === API untuk create postingan
// app.post('/api/v1/posts/insert', function(req, res) {
//   // 1. Ambil data client di request body
//   const { title, body } = req.body;
//   // 2. Buat id baru untuk data tsb
//   const id = posts.length + 1;
//   // 3. masukan data baru ke "database"
//   posts.push({ id, title: title, body: body });
//   // 4. kirim response perubahan data
//   res.json(posts);
// })
// // === API untuk update postingan
// app.put('/api/v1/posts/update/:id', function (req, res) {
//   // 1. kita susun terlebih dahulu data baru yang mau kita ubah
//   const data = req.body;
//   // 2. Kita cari data yang mau diubah, jika id-nya sesuai dengan id params
//   //    Kita update datanya
//   posts = posts.map(function(value) {
//     if(value.id == req.params.id) {
//       console.log('object 1:', value);
//       console.log('object 2:', data);
//       console.log('Gabungan object variasi 1', { ...value, ...data });
//       console.log('Gabungan object variasi 2', { ...data, ...value });
//       // SELECT * FROM customer WHERE nama = 'Rudi'
//       // INSERT INTO customer (id, nama) VALUES (2, 'Rudi')
//       // UPDATE customer SET nama = 'Rudi WHERE id = 1
//     }
//     newData = { ...value, ...data }
//     return value.id == req.params.id ? newData : value
//   })
//   //3. Kasih response
//   res.status(200).json(posts)
// });
// // === API untuk delete
// app.delete('/api/v1/posts/delete/:id', function(req, res) {
//   posts = posts.filter(function (value) {
//     return req.params.id != value.id
//   });
//   res.status(200).json(posts);
// })

// app.use(function(error, req, res, next) {
//   console.log(error);
//   res.status(500).json({ status: 'failed', error: 'Internal server error !' })
// })

// const port = 3000
// app.listen(port, function() {
//   console.log(`Server berjalan di port ${port}!`)
// })