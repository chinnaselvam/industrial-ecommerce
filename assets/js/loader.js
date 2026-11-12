document.addEventListener('DOMContentLoaded', () => {
  const progressBar = document.getElementById('loadingProgress');
  const text = document.getElementById('loadingText');
  let progress = 0;

  const timer = setInterval(() => {
    progress += Math.random() * 22 + 12;
    if (progress >= 100) {
      progress = 100;
      clearInterval(timer);
      if (text) text.textContent = 'READY';
      setTimeout(() => {
        window.location.href = 'index.html';
      }, 550);
    }

    if (progressBar) {
      progressBar.style.width = `${progress}%`;
    }

    if (text && progress < 100) {
      text.textContent = `${Math.round(progress)}%`;
    }
  }, 180);
});
