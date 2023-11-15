var list_siswa = [];

// tambah siswa
function tambahSiswa(nama, nilaiUjian, kehadiran, tugas) {
    // Validasi input
    if (
        typeof nama !== 'string' ||
        typeof nilaiUjian !== 'number' ||
        typeof kehadiran !== 'string' ||
        typeof tugas !== 'number'
    ) {
        console.log('Format input tidak valid');
        return;
    }

    var siswa = {
        nama: nama,
        nilaiUjian: [nilaiUjian],
        kehadiran: [kehadiran],
        tugas: [tugas],
    };

    list_siswa.push(siswa);
    console.log(nama + ' telah ditambahkan');
}

// tambah nilai ujian, kehadiran, dan tugas untuk siswa tertentu
function tambahItemSiswa(nama, nilaiUjianBaru, kehadiranBaru, tugasBaru) {
    // Validasi input
    if (
        typeof nama !== 'string' ||
        typeof nilaiUjianBaru !== 'number' ||
        typeof kehadiranBaru !== 'string' ||
        typeof tugasBaru !== 'number'
    ) {
        console.log('Format input tidak valid');
        return;
    }

    for (let i = 0; i < list_siswa.length; i++) {
        if (list_siswa[i].nama === nama) {
            list_siswa[i].nilaiUjian.push(nilaiUjianBaru);
            list_siswa[i].kehadiran.push(kehadiranBaru);
            list_siswa[i].tugas.push(tugasBaru);
            return;
        }
    }

    console.log('Siswa dengan nama ' + nama + ' tidak ditemukan');
}

// hitung nilai akhir berdasarkan bobot
function hitungNilaiAkhir(siswa) {
    // Bobot nilai ujian, kehadiran, dan tugas (contoh: 40%, 30%, 30%)
    const bobotUjian = 0.4;
    const bobotKehadiran = 0.3;
    const bobotTugas = 0.3;

    // Menghitung nilai akhir
    const totalNilaiUjian = siswa.nilaiUjian.reduce((total, nilai) => total + nilai, 0);
    const rataRataNilaiUjian = totalNilaiUjian / siswa.nilaiUjian.length;

    const totalNilaiKehadiran = siswa.kehadiran.length;
    const persentaseKehadiran = totalNilaiKehadiran / siswa.kehadiran.length;

    const totalNilaiTugas = siswa.tugas.reduce((total, nilai) => total + nilai, 0);
    const rataRataNilaiTugas = totalNilaiTugas / siswa.tugas.length;

    const nilaiAkhir =
        rataRataNilaiUjian * bobotUjian +
        persentaseKehadiran * bobotKehadiran +
        rataRataNilaiTugas * bobotTugas;

    return { nilaiAkhir };
}

// tampil siswa beserta nilai akhir
function tampil_siswa() {
    if (list_siswa.length === 0) {
        console.log('Siswa masih kosong');
    } else {
        for (let i = 0; i < list_siswa.length; i++) {
            const element = list_siswa[i];
            console.log('Nama : ' + element.nama);
            console.log('Nilai Ujian : ' + element.nilaiUjian.join(', '));
            console.log('Kehadiran : ' + element.kehadiran.join(', '));
            console.log('Tugas : ' + element.tugas.join(', '));

            // Hitung nilai akhir
            const hasil = hitungNilaiAkhir(element);

            // Tampilkan nilai akhir dan akreditasi
            console.log('Nilai Akhir : ' + hasil.nilaiAkhir);

            // Pindahkan pesan log akreditasi ke sini
            if (hasil.nilaiAkhir <= 40) {
                console.log('Akreditasi Akhir : D - Anda gagal');
            } else if (hasil.nilaiAkhir <= 60) {
                console.log('Akreditasi Akhir : C - Belajar lagi');
            } else if (hasil.nilaiAkhir <= 80) {
                console.log('Akreditasi Akhir : B - Baik');
            } else {
                console.log('Akreditasi Akhir : A - Sangat baik');
            }

            console.log('---');
        }
    }
}

// contoh penggunaan
tambahSiswa('budi', 81, 'hadir', 20);
tambahItemSiswa('budi', 90, 'hadir', 89);
tambahItemSiswa('budi', 70, 'hadir', 79);
tambahItemSiswa('budi', 90, 'hadir', 89);
tambahItemSiswa('budi', 0, 'alpa', 0);

tampil_siswa();
