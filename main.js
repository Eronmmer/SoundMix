function removeTransition(e) {
  if (e.propertyName !== 'transform') return;
  e.target.classList.remove('play-mode');
}

function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
  if (!audio) return;

  key.classList.add('play-mode');
  audio.currentTime = 0;
  audio.play();
}

function playFirstSoundOnClick(e) {
  const audio = document.getElementById('first-sound');
  const key = document.getElementById('first');
  if (!audio) return;

  key.classList.add('play-mode');
  audio.currentTime = 0;
  audio.play();
}

function playSecondSoundOnClick(e) {
  const audio = document.getElementById('second-sound');
  const key = document.getElementById('second');
  if (!audio) return;

  key.classList.add('play-mode');
  audio.currentTime = 0;
  audio.play();
}

function playThirdSoundOnClick(e) {
  const audio = document.getElementById('third-sound');
  const key = document.getElementById('third');
  if (!audio) return;

  key.classList.add('play-mode');
  audio.currentTime = 0;
  audio.play();
}

function playFourthSoundOnClick(e) {
  const audio = document.getElementById('fourth-sound');
  const key = document.getElementById('fourth');
  if (!audio) return;

  key.classList.add('play-mode');
  audio.currentTime = 0;
  audio.play();
}

function playFifthSoundOnClick(e) {
  const audio = document.getElementById('fifth-sound');
  const key = document.getElementById('fifth');
  if (!audio) return;

  key.classList.add('play-mode');
  audio.currentTime = 0;
  audio.play();
}

function playSixthSoundOnClick(e) {
  const audio = document.getElementById('sixth-sound');
  const key = document.getElementById('sixth');
  if (!audio) return;

  key.classList.add('play-mode');
  audio.currentTime = 0;
  audio.play();
}

function playSeventhSoundOnClick(e) {
  const audio = document.getElementById('seventh-sound');
  const key = document.getElementById('seventh');
  if (!audio) return;

  key.classList.add('play-mode');
  audio.currentTime = 0;
  audio.play();
}

function playEighthSoundOnClick(e) {
  const audio = document.getElementById('eighth-sound');
  const key = document.getElementById('eighth');
  if (!audio) return;

  key.classList.add('play-mode');
  audio.currentTime = 0;
  audio.play();
}

function playNinthSoundOnClick(e) {
  const audio = document.getElementById('ninth-sound');
  const key = document.getElementById('ninth');
  if (!audio) return;

  key.classList.add('play-mode');
  audio.currentTime = 0;
  audio.play();
}

const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);

const firstKey = document.getElementById('first');
const secondKey = document.getElementById('second');
const thirdKey = document.getElementById('third');
const fourthKey = document.getElementById('fourth');
const fifthKey = document.getElementById('fifth');
const sixthKey = document.getElementById('sixth');
const seventhKey = document.getElementById('seventh');
const eighthKey = document.getElementById('eighth');
const ninthKey = document.getElementById('ninth');

firstKey.addEventListener('click', playFirstSoundOnClick);
secondKey.addEventListener('click', playSecondSoundOnClick);
thirdKey.addEventListener('click', playThirdSoundOnClick);
fourthKey.addEventListener('click', playFourthSoundOnClick);
fifthKey.addEventListener('click', playFifthSoundOnClick);
sixthKey.addEventListener('click', playSixthSoundOnClick);
seventhKey.addEventListener('click', playSeventhSoundOnClick);
eighthKey.addEventListener('click', playEighthSoundOnClick);
ninthKey.addEventListener('click', playNinthSoundOnClick);
