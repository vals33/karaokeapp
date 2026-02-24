const lyricsDiv = document.getElementById('lyrics');
const words = document.querySelectorAll('.word');

// durata in ms per ogni parola
const timings = [
  400,400,400,400,400,400,400,400,400,400,
  400,400,400,400,400,
  400,400,400,400,400,
  400,400,400,400,400,400,400,400,400,
  400,400,400,400,400,400,400,400,400,400
];

let currentWord = 0;

function highlightWord() {
  words.forEach(w => w.classList.remove('highlight'));
  
  if(currentWord < words.length) {
    words[currentWord].classList.add('highlight');

    // scroll fluido centrato sulla parola
    const wordTop = words[currentWord].offsetTop;
    const containerHeight = document.querySelector('.lyrics-container').offsetHeight;
    const offset = wordTop - containerHeight / 2 + words[currentWord].offsetHeight / 2;
    lyricsDiv.style.transform = `translateY(${-offset}px)`;

    setTimeout(() => {
      currentWord++;
      highlightWord();
    }, timings[currentWord]);
  }
}

highlightWord();