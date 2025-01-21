const audio = document.getElementById("audio");
const playPauseBtn = document.getElementById("play-pause-btn");
const progressBar = document.getElementById("progress-bar");
const progressContainer = document.querySelector(".progress-container");
const currentTime = document.getElementById("current-time");
const duration = document.getElementById("duration");

// formata o tempo (minutos:segundos)
const formatTime = (time) => {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
};

// Atualiza o botão Play/Pause
playPauseBtn.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
    playPauseBtn.textContent = "❚❚"; // Botão de pausa
  } else {
    audio.pause();
    playPauseBtn.textContent = "▶"; // Botão de play
  }
});

// Atualiza a barra de progresso e o tempo decorrido
audio.addEventListener("timeupdate", () => {
  const progressoPorcentagem = (audio.currentTime / audio.duration) * 100;
  progressBar.style.width = `${progressoPorcentagem}%`;

  currentTime.textContent = formatTime(audio.currentTime);
});

// Permite clicar na barra de progresso para ajustar o áudio
progressContainer.addEventListener("click", (e) => {
  const clickX = e.offsetX;
  const width = progressContainer.clientWidth;
  const novoTempo = (clickX / width) * audio.duration;
  audio.currentTime = novoTempo;
});

// Carrega os dados de duração ao iniciar
audio.addEventListener("loadedmetadata", () => {
  duration.textContent = formatTime(audio.duration);
});


document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.getElementById("menu-button");
  const closeSidebar = document.getElementById("close-sidebar");
  const sidebar = document.getElementById("sidebar");

  // Abrir o sidebar
  menuButton.addEventListener("click", () => {
    sidebar.style.right = "0";
  });

  // Fechar o sidebar
  closeSidebar.addEventListener("click", () => {
    sidebar.style.right = "-100%";
  });

  // Fechar o sidebar ao clicar fora dele (opcional)
  sidebar.addEventListener("click", (e) => {
    if (e.target === sidebar) {
      sidebar.style.right = "-100%";
    }
  });
});