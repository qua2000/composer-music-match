const CORRECT_ID = "nachtmusik";

const AUDIO_FILES = {
  "nachtmusik": "audio/mozart/nachtmusik-60s.mp3",
  turkish: "audio/mozart/turkish-march-60s.mp3",
  concerto: "audio/mozart/piano-concerto-21-60s.mp3",
  symphony: "audio/mozart/symphony-40-60s.mp3"
};


const audio = document.getElementById("audioPlayer");
const cards = [...document.querySelectorAll(".music-card")];
const feedback = document.getElementById("feedback");
const hint = document.getElementById("composerHint");
const facts = document.getElementById("composerFacts");
const resultPanel = document.getElementById("resultPanel");

let activeCard = null;
let stopTimer = null;
let answered = false;

function stopAudio() {
  audio.pause();
  audio.currentTime = 0;
  audio.removeAttribute("src");
  audio.load();

  cards.forEach(card => {
    card.classList.remove("is-playing");
    card.querySelector(".playing-label").textContent = "";
    card.querySelector(".play-overlay").textContent = "▶";
  });

  activeCard = null;
  clearTimeout(stopTimer);
}

function playCard(card) {
  if (answered) return;
  if (activeCard === card) {
    stopAudio();
    return;
  }

  stopAudio();
  const path = AUDIO_FILES[card.dataset.id];
  if (!path) return;

  audio.src = path;
  activeCard = card;
  card.querySelector(".play-overlay").textContent = "Ⅱ";
  card.querySelector(".playing-label").textContent = "LOADING…";

  audio.play().then(() => {
    if (activeCard !== card) return;
    card.querySelector(".playing-label").textContent = "NOW PLAYING";
    stopTimer = setTimeout(stopAudio, 60000);
  }).catch(() => {
    if (activeCard === card) {
      card.querySelector(".playing-label").textContent = "ADD MP3 FILE";
      feedback.textContent = "Audio recording not added yet.";
      feedback.className = "feedback error";
      setTimeout(() => {
        if (activeCard === card) stopAudio();
      }, 2200);
    }
  });
}

function chooseAnswer(card) {
  if (answered) return;
  stopAudio();

  if (card.dataset.id !== CORRECT_ID) {
    card.classList.remove("shake");
    void card.offsetWidth;
    card.classList.add("shake");
    hint.textContent = "Hint: Wolfgang Amadeus Mozart";
    feedback.textContent = "Not quite. Try another picture!";
    feedback.className = "feedback error";
    if (navigator.vibrate) navigator.vibrate([90, 45, 90]);
    return;
  }

  answered = true;
  cards.forEach(item => {
    item.querySelector(".piece-info").hidden = false;
    if (item.dataset.id === CORRECT_ID) item.classList.add("correct");
  });

  hint.textContent = "";
  facts.hidden = false;
  feedback.textContent = "Correct!";
  feedback.className = "feedback success";
  resultPanel.hidden = false;
}

cards.forEach(card => {
  card.querySelector(".art-button").addEventListener("click", () => playCard(card));
  card.querySelector(".answer-button").addEventListener("click", () => chooseAnswer(card));
});

document.getElementById("restartButton").addEventListener("click", () => {
  stopAudio();
  answered = false;
  cards.forEach(card => {
    card.classList.remove("correct", "shake");
    card.querySelector(".piece-info").hidden = true;
  });
  facts.hidden = true;
  resultPanel.hidden = true;
  hint.textContent = "";
  feedback.textContent = "";
  feedback.className = "feedback";
});

const helpDialog = document.getElementById("helpDialog");
document.getElementById("helpButton").addEventListener("click", () => helpDialog.showModal());
document.getElementById("closeHelp").addEventListener("click", () => helpDialog.close());
audio.addEventListener("ended", stopAudio);
