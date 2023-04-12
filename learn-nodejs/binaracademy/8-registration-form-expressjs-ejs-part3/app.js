const fs = require('fs');
const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();
const upload = multer({ dest: 'uploads/' });

// Define the destination directory
const publicDir = path.join(__dirname, 'public');

// Define the destination path
let destPath = path.join(publicDir, 'file.jpg');

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.render('index');
});

app.post('/profile', upload.single('image'), (req, res) => {
    const name = req.body.name;
    const job = req.body.job;
    const email = req.body.email;
    const phone = req.body.phone;

    // Get the current path of the file
    const currentPath = req.file.path;

    // Create a new path for the file
    const newPath = path.join(path.dirname(currentPath), 'newFileName.jpg');

    // Rename the file
    fs.rename(currentPath, newPath, (err) => {
        if (err) {
            console.error(err);
        } else {
            console.log('File renamed successfully');
            fs.copyFile(newPath, destPath, (err) => {
                if (err) {
                    console.error(err);
                } else {
                    console.log('File copied successfully');
                    const publicPath = destPath.substr(-8);
                    res.render('profile', { name, job, email, phone, publicPath });
                }
            });
        }
    });
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});