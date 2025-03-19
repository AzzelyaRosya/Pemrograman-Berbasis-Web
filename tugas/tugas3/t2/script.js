function hitung() {
    let x = Number(document.getElementById("angka1").value);
    let y = Number(document.getElementById("angka2").value);
    let operator = document.getElementById("operator").value;
    let hasil;

    if (x === "" || y === "") {
        hasil = "Masukkan angka!";
    } else {
        hasil = operator === '+' ? x + y :
                operator === '-' ? x - y :
                operator === '*' ? x * y :
                operator === '/' ? (y !== 0 ? x / y : "Tidak bisa bagi 0") :
                operator === '%' ? x % y :
                "Operator tidak valid";
    }

    document.getElementById("hasil").innerText = "Hasil: " + hasil;
}