const express = require('express');
const { Pool } = require('pg');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.set('view engine', 'ejs');

// Menggunakan body-parser untuk membaca data yang dikirim dalam format application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// Konfigurasi koneksi database
const pool = new Pool({
  user: 'postgres',
  password: 'admin',
  host: 'localhost',
  port: 5432,
  database: 'fswc6'
});

app.use(express.static('public'));
app.use(express.json());

app.get('/insertData', (req, res) => {
  res.render('insert');
});

app.get('/updateData', (req, res) => {
  res.render('update');
});

// Endpoint untuk menyisipkan data
app.post('/insertData', async (req, res) => {
  const { username, scores } = req.body;

  console.log(req.body);

  try {
    const query = `
      INSERT INTO user_history (created_on, username, scores)
      VALUES (NOW(), $1, $2)
      RETURNING *;`;

    const values = [username, scores];

    const result = await pool.query(query, values);

    res.json({
      success: true,
      message: 'Data berhasil disisipkan',
      data: result.rows[0]
    });
  } catch (error) {
    console.error('Terjadi kesalahan:', error);
    res.status(500).json({
      success: false,
      message: 'Terjadi kesalahan server'
    });
  }
});

// Endpoint untuk mengupdate data
app.post('/updateData', async (req, res) => {
  const { username, scores } = req.body;

  try {
    const query = `
      UPDATE user_history
      SET scores = $2
      WHERE username = $1
      RETURNING *;`;

    const values = [username, scores];

    const result = await pool.query(query, values);

    console.log(result);

    if (result.rows.length == 0) {
      // Jika tidak ada data dengan id yang diberikan
      res.status(404).json({
        success: false,
        message: 'Data tidak ditemukan'
      });
    } else {
      res.json({
        success: true,
        message: 'Data berhasil diperbarui',
        data: result.rows[0]
      });
    }
  } catch (error) {
    console.error('Terjadi kesalahan:', error);
    res.status(500).json({
      success: false,
      message: 'Terjadi kesalahan server'
    });
  }
});

app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});