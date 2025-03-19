const fibonacci = (n) => {
    let a = 0, b = 1;
    let hasil = [];
    for (let i = 0; i < n; i++) {
        hasil.push(a);
        [a, b] = [b, a + b];
    }
    return hasil.join(", ");
};

document.getElementById("hasil").innerText = "Hasil: " + fibonacci(10);