const player = document.querySelector('.player');
const video = document.querySelector('.viewer');
const progress = document.querySelector('.progress');
const progressBar = document.querySelector('.progress__filled');
const toggle = document.querySelector('.toggle');
const skipButtons = document.querySelectorAll('[data-skip]');
const ranges = document.querySelectorAll('.player__slider');

function togglePlay() {
  const method = video.paused ? 'play' : 'pause';
  video[method]();

}

function updateButton() {
  const icon = this.paused ? '▶️' : '⏸️';
  toggle.textContent = icon;
  console.log('Update the button')
}

function skip() {
  let skipTime = this.dataset.skip;
  console.log(skipTime);
  video.currentTime += parseFloat(skipTime);
}

function handleRangeUpdate() {
  video[this.name] = this.value;
  console.log(this.name);
  console.log(this.value);
}

video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);

toggle.addEventListener('click', togglePlay);

skipButtons.forEach((skipButton) => {
  skipButton.addEventListener("click", skip);
})

ranges.forEach((range) => {
  range.addEventListener('change', handleRangeUpdate);
})

ranges.forEach((range) => {
  range.addEventListener('mousemove', handleRangeUpdate);
})
