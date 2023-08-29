const nextPageLink = document.getElementById('nextPageLink');
const arrowIcon = document.getElementById('arrowIcon');

nextPageLink.addEventListener('click', () => {
  nextPageLink.classList.add('slide-animation');
  arrowIcon.classList.add('slide-animation');

  setTimeout(() => {
    nextPageLink.classList.remove('slide-animation');
    arrowIcon.classList.remove('slide-animation');
  }, 500);
});
