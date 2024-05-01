var audio = document.getElementById("dailyBackmusic");
const button = document.getElementById('dailyAudiobutton');
const icon = document.getElementById('dailyAudioicon');
const music = document.getElementById('dailyBackmusic');

// Volumen para la musica de fondo
function setVolume(newVolume) {
      if (newVolume >= 0 && newVolume <= 1) {
           audio.volume = newVolume;
      }
}

setVolume(0.35);

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

// Boton para actualizar la imagen
document.getElementById('dailyRefresh').addEventListener('click', function() {
    var randomImageUrl = 'https://picsum.photos/2000/2000?random=' + Math.random();
    document.getElementById('dailyImage').src = randomImageUrl;
});