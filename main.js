// Get the current year
function getYear() {
  const date = new Date();
  let year = date.getFullYear();
  document.getElementById('year').innerHTML = year;
}

getYear();

// Change active link
function changeActive(clicked, spot = 0) {
  if (clicked != 'All') {
    const currentActive = document.querySelectorAll('.active');
    currentActive[spot].classList.remove('active');
    clicked.classList.add('active');
  }
}

// Filter shown projects
function filter(clicked, subject) {
  changeActive(clicked, 1);
  const cards = document.querySelectorAll('.project');
  for (i = 0; i < cards.length; i++) {
    const card = cards[i].getAttribute('data-value');
    // Filter All
    if (subject == 'All') {
      cards[i].classList.add('show');
    }

    // Filter Websites
    else if (subject == 'Websites') {
      if (card == 'Website') {
        cards[i].classList.add('show');
      }
      else {
        cards[i].classList.remove('show');
      }
    }

    // Filter Javascript
    else if (subject == 'JavaScript') {
      if (card == 'JavaScript') {
        cards[i].classList.add('show');
      }
      else {
        cards[i].classList.remove('show');
      }
    }
  }
}

filter('All', 'All');