//mengambil data dari index.html
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

// Mengisi form dengan data dari query string
document.getElementById('nama').value = urlParams.get('nama');
document.getElementById('role').value = urlParams.get('role');
document.getElementById('availabillity').value = urlParams.get('Availabillity');
document.getElementById('usia').value = urlParams.get('Usia');
document.getElementById('lokasi').value = urlParams.get('Lokasi');
document.getElementById('pengalaman').value = urlParams.get('Pengalaman');
document.getElementById('email').value = urlParams.get('Email');

//mengambil data yang akan dimasukkan
document.getElementById('biodata-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah pengiriman form yang default

    // Mengambil data yang telah diedit dari form
    const editedData = {
        nama: document.getElementById('nama').value,
        role: document.getElementById('role').value,
        Availabillity: document.getElementById('availabillity').value,
        Usia: document.getElementById('usia').value,
        Lokasi: document.getElementById('lokasi').value,
        Pengalaman: document.getElementById('pengalaman').value,
        Email: document.getElementById('email').value,
    }

    const queryString = new URLSearchParams(editedData).toString();

    // Mengalihkan ke index.html dengan data yang telah diedit
    window.location.href = `index.html?${queryString}`; 
})