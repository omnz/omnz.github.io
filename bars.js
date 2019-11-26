const barElements = document.querySelectorAll('.bar');
const bars = [{ width: '', maxWidth: '' }];
let ran = false;

function start() {
  if (ran == false) {
    for (i = 0; i < barElements.length; i++) {
      bars[i] = barElements[i];
      bars[i].width = 0;

      // Get max width
      const maxWidth = barElements[i].getAttribute('data-value');
      bars[i].maxWidth = maxWidth;

      animate(bars[i]);
    }
  }
  ran = true;
}

// animate the progress bars
function animate(currentBar) {
  const id = setInterval(frame, 20);
  function frame() {
    if (currentBar.width >= currentBar.maxWidth) {
      clearInterval(id);
      x = 0;
    }
    else {
      currentBar.width++;
      currentBar.style.width = currentBar.width + "%";
    }
  }
}

// Call 'start()' on scroll
window.onscroll = () => {
  if (document.documentElement.scrollTop >= 200) {
    start();
  }
}