document.addEventListener("DOMContentLoaded", () => {
  // Daftar nama, kata sandi, dan tautan Google Form
  const validCredentials = {
    Apinus: { password: "Jakarta", link: "https://docs.google.com/forms/d/e/1FAIpQLSdW8NgKMf7csunJiFzbaUoY5g1R-DSQt5BhnpFwC4OHVaQ7BA/viewform" },
    Arison: { password: "Bogor", link: "https://docs.google.com/forms/d/e/1FAIpQLSeN2cFfUdLcqKYje_GhRkV6-1etDCUl44ZncsD8MO6jLheXlA/viewform" },
    Imom: { password: "Bandung", link: "https://docs.google.com/forms/d/e/1FAIpQLSedgT5L7DvibyKUhFEf2Hqzsaz4Eqn31EBa0qLslsjncv9R7A/viewform" },
    Lukas: { password: "Semarang", link: "https://docs.google.com/forms/d/e/1FAIpQLSeUI2jgGzj-YkDhYuLFP7X1KlAI6ko074A0axGhGQslC9_Xfw/viewform" },
    Simon: { password: "Salatiga", link: "https://docs.google.com/forms/d/e/1FAIpQLSfaqgrwji6nPIMP4hDatIAot0F-l160lTJJBdajvYYMP25h8Q/viewform" },    
    Petranus: { password: "Yogyakarta", link: "https://docs.google.com/forms/d/e/1FAIpQLSfZ7cUxcBnGGVyedODBmhMgqU8uyL3jsTSoAjqFkeqEOhXpTg/viewform" },
    Gumanggub: { password: "Surabaya", link: "https://docs.google.com/forms/d/e/1FAIpQLSepNTAqxHOv3yL-RgbOlaYzPS3FaGgcwvhciIu4C0dl2dVbXQ/viewform" },
    Andreas: { password: "Malang", link: "https://docs.google.com/forms/d/e/1FAIpQLSfwiquYlDRIfZJPqxte9bPF2SDQ2BmuxfBJ5U14zZGxDo_lqw/viewform" },
    Fredi: { password: "Bali", link: "https://docs.google.com/forms/d/e/1FAIpQLSe89IIMqqio0ED4MptC8mKyAocK0MYpz138R_nnFzU-EeyhhQ/viewform" },
  };

  // Ambil semua tombol RSVP
  const rsvpButtons = document.querySelectorAll(".rsvp-btn");

  rsvpButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Temukan form terkait tombol RSVP yang diklik
      const formContainer = button.nextElementSibling;

      // Toggle form visibility
      if (formContainer.classList.contains("hidden")) {
        formContainer.classList.remove("hidden");
        formContainer.style.display = "flex"; // Tampilkan form
      } else {
        formContainer.classList.add("hidden");
        formContainer.style.display = "none"; // Sembunyikan form
      }
    });
  });

  // Tambahkan event listener untuk tombol Submit
  document.querySelectorAll(".submit-btn").forEach((submitButton) => {
    submitButton.addEventListener("click", (e) => {
      const formContainer = e.target.parentElement;
      const nameInput = formContainer.querySelector(".name-input").value.trim();
      const passwordInput = formContainer.querySelector(".password-input").value.trim();

      // Validasi input
      if (!nameInput || !passwordInput) {
        alert("Nama dan kata sandi tidak boleh kosong!");
      } else if (
        validCredentials[nameInput] &&
        validCredentials[nameInput].password === passwordInput
      ) {
        // Jika nama dan kata sandi cocok, arahkan ke tautan Google Form
        alert(`Anda Berhasil ${nameInput}.Login...`);
        window.location.href = validCredentials[nameInput].link;
      } else {
        alert("Nama atau kata sandi salah!");
      }
    });
  });
});


