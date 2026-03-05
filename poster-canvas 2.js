<!DOCTYPE html>
<html>
<head>
    <title>Macam-Macam Bangun Datar</title>

    <style>
        @font-face {
            font-family: "AstonScript";
            src: url("AstonScript.ttf") format("truetype");
        }

        body {
            margin: 0;
        }
    </style>
</head>
<body>

<canvas id="posterCanvas" width="800" height="500"></canvas>

<script>
const canvas = document.getElementById("posterCanvas");
const ctx = canvas.getContext("2d");

// ======================
// BACKGROUND (PINK → PUTIH)
// ======================
const gradient = ctx.createLinearGradient(0, 0, 0, 500);
gradient.addColorStop(0, "#B34568");
gradient.addColorStop(1, "#FFFFFF");

ctx.fillStyle = gradient;
ctx.fillRect(0, 0, 800, 500);

// Tunggu font benar-benar load
document.fonts.ready.then(() => {

    ctx.textAlign = "center";

    // ======================
    // JUDUL - MALINTON
    // ======================
   ctx.font = "52px AstonScript"; // samakan dengan teks bawah
ctx.fillStyle = "#6A7334"; 
ctx.fillText("Macam-Macam Bangun Datar", 400, 90);

ctx.lineWidth = 2;
ctx.strokeStyle = "#F8C8DC"; // pink muda
ctx.strokeText("Macam-Macam Bangun Datar", 400, 90);

    const centerY = 260;

    // ======================
    // PERSEGI PANJANG (HIJAU)
    // ======================
    ctx.fillStyle = "#6A7334";
    ctx.fillRect(100, centerY - 50, 150, 100);

    ctx.font = "22px AstonScript";
    ctx.fillStyle = "#6A7334";
    ctx.fillText("Persegi Panjang", 175, 350);

    // ======================
    // LINGKARAN (KUNING)
    // ======================
    ctx.beginPath();
    ctx.arc(400, centerY, 60, 0, Math.PI * 2);
    ctx.fillStyle = "#FFE288";
    ctx.fill();
    ctx.closePath();

    ctx.fillStyle = "#6A7334";
    ctx.fillText("Lingkaran", 400, 350);

    // ======================
    // SEGITIGA (BIRU)
    // ======================
    ctx.beginPath();
    ctx.moveTo(650, centerY + 50);
    ctx.lineTo(600, centerY - 60);
    ctx.lineTo(550, centerY + 50);
    ctx.closePath();
    ctx.fillStyle = "#A0BBEB";
    ctx.fill();

    ctx.fillStyle = "#6A7334";
    ctx.fillText("Segitiga", 600, 350);

});
</script>

</body>
</html>