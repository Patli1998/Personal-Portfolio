const heading = document.querySelector('.larger-font');
const subheading = document.querySelector('p');

const text = 'Pratik Purohit';
let idx = 0;
let delay = 200;

function type() {
  if (idx < text.length) {
    heading.textContent = text.substring(0, idx+1);
    idx++;
    delay -= 10; // decrease the delay time by 10ms
    setTimeout(type, delay);
  }
}

function startTyping() {
  idx = 0;
  delay = 200;
  type();
  setTimeout(startTyping, 7000); // call startTyping() again after 7 seconds
}

startTyping();