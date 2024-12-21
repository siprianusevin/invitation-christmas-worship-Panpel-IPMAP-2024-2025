document.addEventListener("DOMContentLoaded", () => {
  // Notifikasi pop-up saat halaman dimuat
  alert("Klik di mana saja pada halaman untuk memulai musik!");

  // 1. Referensi Elemen Audio
  const audioElement = document.getElementById("backgroundAudio");

  if (audioElement) {
    // Fungsi untuk memulai audio
    const playAudio = () => {
      audioElement.play();
      document.body.removeEventListener("click", playAudio); // Hapus listener setelah klik pertama
    };

    // Tambahkan Event Listener untuk klik di body
    document.body.addEventListener("click", playAudio);
  } else {
    console.error("Elemen audio tidak ditemukan.");
  }
});
