// Add this to your existing JavaScript or index.js
const nextPageLink = document.getElementById('nextPageLink');
const arrowIcon = document.getElementById('arrowIcon');

nextPageLink.addEventListener('click', () => {
  nextPageLink.classList.add('slide-animation');
  arrowIcon.classList.add('slide-animation');

  // Remove the animation classes after the animation is complete
  setTimeout(() => {
    nextPageLink.classList.remove('slide-animation');
    arrowIcon.classList.remove('slide-animation');
  }, 500); // Adjust the timeout to match your animation duration
});
