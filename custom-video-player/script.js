const video = document.querySelector('#video');
const playBtn = document.querySelector('#play');
const stopBtn = document.querySelector('#stop');
const progress = document.querySelector('#progress');
const timestamp = document.querySelector('#timestamp');

// Play & pause video
function toggleVideoStatus() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

// Update play/pause icon
function updatePlayIcon() {
  if (video.paused) {
    toggleButtons(playBtn.firstElementChild, ['fa-play', 'fa-pause']);
  } else {
    toggleButtons(playBtn.firstElementChild, ['fa-play', 'fa-pause']);
  }
}

// Toggle play & pause button
function toggleButtons(el, cssClasses) {
  cssClasses.map(cssClass => el.classList.toggle(cssClass));
}

// Update progress & timestamp
function updateProgress() {
  progress.value = (video.currentTime / video.duration) * 100;

  // Get minutes
  let minutes = Math.floor(video.currentTime / 60);
  if (minutes < 10) {
    minutes = '0' + String(minutes);
  }

  // Get seconds
  let seconds = Math.floor(video.currentTime % 60);
  if (seconds < 10) {
    seconds = '0' + String(seconds);
  }

  timestamp.innerHTML = `${minutes}:${seconds}`;
}

// Set video time to progress
function setVideoProgress() {
  video.currentTime = (parseInt(progress.value) * video.duration) / 100;
}

// Stop video
function stopVideo() {
  video.currentTime = 0;
  video.pause();
}

// Event Listeners
video.addEventListener('click', toggleVideoStatus);
video.addEventListener('pause', updatePlayIcon);
video.addEventListener('play', updatePlayIcon);
video.addEventListener('timeupdate', updateProgress);

playBtn.addEventListener('click', toggleVideoStatus);

stopBtn.addEventListener('click', stopVideo);

progress.addEventListener('change', setVideoProgress);
