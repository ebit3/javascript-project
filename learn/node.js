// Inisialisasi keranjang belanja sebagai array kosong
var keranjangBelanja = [];

// Fungsi untuk menambahkan item ke keranjang belanja
function tambahItem(nama, harga, jumlah) {
    var item = {
        nama: nama,
        harga: harga,
        jumlah: jumlah,
    };

    keranjangBelanja.push(item);
    console.log(nama + ' ditambahkan ke keranjang belanja.');
}

// Fungsi untuk menampilkan isi keranjang belanja
function tampilkanKeranjang() {
    if (keranjangBelanja.length === 0) {
        console.log('Keranjang belanja kosong.');
    } else {
        console.log('Isi keranjang belanja:');
        for (var i = 0; i < keranjangBelanja.length; i++) {
            var item = keranjangBelanja[i];
            console.log(
                'Nama: ' + item.nama + ', Harga: ' + item.harga + ', Jumlah: ' + item.jumlah
            );
        }
    }
}

// Fungsi untuk menghitung total belanja
function hitungTotalBelanja() {
    var total = 0;
    for (var i = 0; i < keranjangBelanja.length; i++) {
        var item = keranjangBelanja[i];
        total += item.harga * item.jumlah;
    }
    return total;
}

// Contoh penggunaan fungsi untuk menambahkan item ke keranjang belanja
tambahItem('Buku', 20, 2);
tambahItem('Pensil', 5, 5);
tambahItem('Gunting', 10, 1);

// Menampilkan isi keranjang belanja
tampilkanKeranjang();

// Menampilkan total belanja
var totalBelanja = hitungTotalBelanja();
console.log('Total belanja: ' + totalBelanja);
