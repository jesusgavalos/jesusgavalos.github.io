const clickSound = new Audio('sounds/button-click.wav');
var audio = document.getElementById("foxBackmusic");
const button = document.getElementById('foxAudiobutton');
const icon = document.getElementById('foxAudioicon');
const music = document.getElementById('foxBackmusic');

// Sonido para botones de redes sociales
function playClickSound() {
  clickSound.play();
}

// Volumen para la musica de fondo
function setVolume(newVolume) {
      if (newVolume >= 0 && newVolume <= 1) {
           audio.volume = newVolume;
      }
}

setVolume(0.05);

// Boton para activar y desactivar musica de fondo
button.addEventListener('click', function() {
  if (music.paused) {
    music.play();
    icon.classList.remove('bi-volume-mute-fill');
    icon.classList.add('bi-volume-up-fill');
  } else {
    music.pause();
    icon.classList.remove('bi-volume-up-fill');
    icon.classList.add('bi-volume-mute-fill');
  }
});