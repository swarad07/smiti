const year = new Date().getFullYear();
const eighteenMarch = new Date(year, 2, 18).getTime();
const eighteenMarchNextYear = new Date(year + 1, 2, 18).getTime();
const month = new Date().getMonth();

// countdown

// display
let timer = setInterval(function() {

  // get today's date
  const today = new Date().getTime();

  // get the difference
  let diff;
  if (month > 6) {
    diff = eighteenMarchNextYear - today;
  } else {
    diff = eighteenMarch - today;
  }

  // math
  let days = Math.floor(diff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((diff % (1000 * 60)) / 1000);

  // display
  document.getElementById("timer").innerHTML =
    "<div class=\" card days\"> \
  <div class=\"numbers\">" + days + "</div>days</div> \
<div class=\" card hours\"> \
  <div class=\"numbers\">" + hours + "</div>hours</div> \
<div class=\" card minutes\"> \
  <div class=\"numbers\">" + minutes + "</div>minutes</div> \
<div class=\" card seconds\"> \
  <div class=\"numbers\">" + seconds + "</div>seconds</div> \
</div>";

}, 1000);

const target = window.document.getElementsByClassName('hero')[0];
console.log(target);

const flickerLetter = letter => `<span style="animation: text-flicker-in-glow ${Math.random()*4}s linear both ">${letter}</span>`
const colorLetter = letter => `<span style="color: hsla(${Math.random()*360}, 100%, 30%, 1);">${letter}</span>`;
const flickerAndColorText = text => 
  text
    .split('')
    .map(flickerLetter)
    .map(colorLetter)
    .join('');
const neonGlory = target => target.innerHTML = flickerAndColorText(target.textContent);


neonGlory(target);
target.onclick = ({ target }) =>  neonGlory(target);