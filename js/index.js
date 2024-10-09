// Fungsi untuk mengonversi Celsius ke Fahrenheit
function convert() {
    // Ambil nilai Celsius dari input textarea
    let celsius = parseFloat(document.getElementById("celsius").value);
    if (!isNaN(celsius)) {
        // Konversi Celsius ke Fahrenheit
        let fahrenheit = (celsius * 9 / 5) + 32;
        // Tampilkan hasil konversi di textarea Fahrenheit
        document.getElementById("fahrenheit").value = fahrenheit.toFixed(2);
        // Tampilkan rumus perhitungan di textarea Calculation
        document.getElementById("calculation").value = `${celsius}°C * 9/5 + 32 = ${fahrenheit.toFixed(2)}°F`;
    }
}

// Fungsi untuk membalikkan konversi (dari Fahrenheit ke Celsius)
function reverse() {
    // Ambil nilai Fahrenheit dari input textarea
    let fahrenheit = parseFloat(document.getElementById("fahrenheit").value);
    if (!isNaN(fahrenheit)) {
        // Konversi Fahrenheit ke Celsius
        let celsius = (fahrenheit - 32) * 5 / 9;
        // Tampilkan hasil konversi di textarea Celsius
        document.getElementById("celsius").value = celsius.toFixed(2);
        // Tampilkan rumus perhitungan di textarea Calculation
        document.getElementById("calculation").value = `(${fahrenheit}°F - 32) * 5/9 = ${celsius.toFixed(2)}°C`;
    }
}

// Fungsi untuk mereset semua input dan textarea
function reset() {
    // Kosongkan semua textarea: Celsius, Fahrenheit, dan Calculation
    document.getElementById("celsius").value = "";
    document.getElementById("fahrenheit").value = "";
    document.getElementById("calculation").value = "";
}

// Mencegah input manual di textarea Fahrenheit dan Calculation (hanya baca)
document.getElementById("fahrenheit").readOnly = true;
document.getElementById("calculation").readOnly = true;

// Fungsi untuk mengganti instruksi konversi antara Celsius ke Fahrenheit dan Fahrenheit ke Celsius
function toggleConversion() {
    // Ambil elemen untuk title, text, dan formula
    let title = document.getElementById("conversionTitle");
    let text = document.getElementById("conversionText");
    let formula = document.getElementById("conversionFormula");

    // Cek apakah title saat ini menunjukkan konversi Celsius ke Fahrenheit
    if (title.textContent.includes("Celcius")) {
        // Ubah title dan formula menjadi konversi Fahrenheit ke Celsius
        title.textContent = "Cara Konversi Fahrenheit (°F) ke Celsius (°C)";
        text.innerHTML = `Suhu <span class="suhu-style">S</span> dalam derajat Celsius (&deg;C) sama dengan suhu <span class="suhu-style">S</span> dalam derajat Fahrenteit (&deg;F) dikurangi <span class="italic">32</span> kali <sup>5</sup>/<sub>9</sub>.`;
        formula.innerHTML = `<p class="italic">S<sub>(°C)</sub> = (S<sub>(°F)</sub> - 32) * 5/9</p>`;
    } else {
        // Ubah title dan formula kembali ke konversi Celsius ke Fahrenheit
        title.textContent = "Cara Konversi Celcius (°C) ke Farenheit (°F)";
        text.innerHTML = `Suhu <span class="suhu-style">S</span> dalam derajat Fahrenteit (&deg;F) sama dengan suhu <span class="suhu-style">S</span> dalam derajat Celsius (&deg;C) kali <sup>9</sup>/<sub>5</sub> tambah <span class="italic">32</span>.`;
        formula.innerHTML = `<p class="italic">S<sub>(°F)</sub> = (S<sub>(°C)</sub> * 9/5) + 32</p><p class="mt-4">atau</p><p class="italic">S<sub>(°F)</sub> = (S<sub>(°C)</sub> * 1.8) + 32</p>`;
    }
}
