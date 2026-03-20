const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");
const scoreDisplay = document.getElementById("score");
let score = 0;

// Zıplama Fonksiyonu
function jump() {
    if (dino.classList != "animate") {
        dino.classList.add("animate");
        setTimeout(function() {
            dino.classList.remove("animate");
        }, 500);
    }
}

// Tuş Kontrolü
document.addEventListener("keydown", function(event) {
    if (event.code === "Space") {
        jump();
    }
});

// Çarpışma ve Skor Kontrolü (Her 10ms'de bir kontrol eder)
let checkDead = setInterval(function() {
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));

    // Çarpışma mantığı
    if (cactusLeft < 90 && cactusLeft > 50 && dinoTop >= 150) {
        cactus.style.animation = "none";
        cactus.style.display = "none";
        alert("Oyun Bitti! Skorun: " + Math.floor(score));
        location.reload(); // Sayfayı yeniler
    } else {
        score += 0.01;
        scoreDisplay.innerHTML = "Skor: " + Math.floor(score);
    }
}, 10);
