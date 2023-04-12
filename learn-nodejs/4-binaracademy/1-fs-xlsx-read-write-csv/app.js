// 1. Import module - module yang dibutuhkan
const fs = require('fs');
const xlsx = require(`xlsx`);

// 2. Baca data csv lalu konversi ke tipe data object
const rawData = xlsx.readFile('./data/data.csv');
const sheetName = rawData.SheetNames[0];
const objData = xlsx.utils.sheet_to_json(rawData.Sheets[sheetName]);

// 3. Hitung luas dan keliling untuk masing - masing data
const result = objData.map((value) => {
    const luas = value.panjang * value.lebar;
    const keliling = 2 * (value.panjang + value.lebar);

    const finalData = {
        panjang: value.panjang,
        lebar: value.lebar,
        luas: luas,
        keliling: keliling
    }

    return finalData;
});

console.log(result);
        
// 4. Convert kembali menjadi csv
const convertToSheet = xlsx.utils.json_to_sheet(result);
const convertToCsv = xlsx.utils.sheet_to_csv(convertToSheet);
fs.writeFileSync('./data/result.csv', convertToCsv);