// Mendapatkan elemen audio dan tombol
var audio = document.getElementById("backgroundAudio");
var audioButton = document.getElementById("audioToggle");

// Fungsi untuk menyalakan/mematikan audio
function toggleAudio() {
    if (audio.paused) {
        audio.play();
        audioButton.textContent = "Turn Audio Off";  // Mengubah teks tombol
    } else {
        audio.pause();
        audioButton.textContent = "Turn Audio On";  // Mengubah teks tombol
    }
}

// Memulai audio saat halaman dimuat
audio.play();
audioButton.textContent = "Turn Audio Off"; // Memulai dengan audio aktif
