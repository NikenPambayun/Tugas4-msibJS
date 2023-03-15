// fungsi penjumlahan
function tambah() {
    var frm = document.getElementById('kalkulator');
    var a1 = parseFloat(frm.angka.value);
    var a2 = parseFloat(frm.angka2.value);

    // menampilkan alert jika field kosong
    if (isNaN(a1) || isNaN(a2)) {
        alert("Field Harus Diisi");
    }

    var total = a1 + a2;
    frm.hasil.value = total;
}

// fungsi pengurangan
function kurang() {
    var frm = document.getElementById('kalkulator');
    var a1 = parseFloat(frm.angka.value);
    var a2 = parseFloat(frm.angka2.value);

    // menampilkan alert jika field kosong
    if (isNaN(a1) || isNaN(a2)) {
        alert("Field Harus Diisi");
    }

    var total = a1 - a2;
    frm.hasil.value = total;
}

// fungsi perkalian
function kali() {
    var frm = document.getElementById('kalkulator');
    var a1 = parseFloat(frm.angka.value);
    var a2 = parseFloat(frm.angka2.value);

    // menampilkan alert jika field kosong
    if (isNaN(a1) || isNaN(a2)) {
        alert("Field Harus Diisi");
    }

    var total = a1 * a2;
    frm.hasil.value = total;
}

// fungsi pembagian
function bagi() {
    var frm = document.getElementById('kalkulator');
    var a1 = parseFloat(frm.angka.value);
    var a2 = parseFloat(frm.angka2.value);

    // menampilkan alert jika field kosong
    if (isNaN(a1) || isNaN(a2)) {
        alert("Field Harus Diisi");
    }

    var total = a1 / a2;
    frm.hasil.value = total;
}

// fungsi pangkat
function pangkat() {
    var frm = document.getElementById('kalkulator');
    var a1 = parseFloat(frm.angka.value);
    var a2 = parseFloat(frm.angka2.value);

    // menampilkan alert jika field kosong
    if (isNaN(a1) || isNaN(a2)) {
        alert("Field Harus Diisi");
    }
    var total = a1 ** a2;
    frm.hasil.value = total;
}