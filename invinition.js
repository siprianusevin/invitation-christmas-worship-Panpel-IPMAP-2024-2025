     document.addEventListener("DOMContentLoaded", () => {
        // Show notification popup on page load
        alert("Klik di mana saja pada halaman untuk memulai musik!");

        // Reference the audio element
        const audioElement = document.getElementById("backgroundMusic");

        if (audioElement) {
          // Function to start audio
          const playAudio = () => {
            audioElement.play();
            document.body.removeEventListener("click", playAudio);
          };

          // Add Event Listener to play audio on first click
          document.body.addEventListener("click", playAudio);
        } else {
          console.error("Audio element not found.");
        }
      });
