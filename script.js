//mengecheck data kiriman
// Mengambil query string dari URL
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

// Mengecek dan mengupdate data yang diterima dari query string
if (urlParams.has('nama')) {
    document.getElementById('namaUser').innerText = urlParams.get('nama');
}

if (urlParams.has('role')) {
    document.getElementById('roleUser').innerText = urlParams.get('role');
}

// Mengupdate data di tabel berdasarkan query string
const rows = document.querySelectorAll('.table tr');
rows.forEach(row => {
    const key = row.cells[0].innerText; // Mengambil nilai dari kolom pertama
    const value = urlParams.get(key); // Mengambil nilai dari query string
    if (value) {
        row.cells[1].innerText = value; // Mengupdate nilai di kolom kedua
    }
});

//mengambil data yang akan dikirim
document.getElementById('editButton').addEventListener('click', function() {
    const user = document.getElementById('namaUser').innerText;
    const role = document.getElementById('roleUser').innerText;

     // Mengambil semua baris dari tabel
     const rows = document.querySelectorAll('.table tr');
     const data = {
         nama: user,
         role: role,
     };

     // Mengisi data dari tabel
    rows.forEach(row => {
        const key = row.cells[0].innerText; // Mengambil nilai dari kolom pertama
        const value = row.cells[1].innerText; // Mengambil nilai dari kolom kedua
        data[key] = value; // Menyimpan key-value ke dalam objek
    });

    // Mengonversi data menjadi query string
    const queryString = new URLSearchParams(data).toString();
    window.location.href = `form.html?${queryString}`; // Mengalihkan ke form.html



})