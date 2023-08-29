document.addEventListener('DOMContentLoaded', () => {
  const nextPageLinks = document.querySelectorAll('.pagination-next');

  nextPageLinks.forEach((nextPageLink) => {
    nextPageLink.addEventListener('click', function onNextPageLinkClick(event) {
      event.preventDefault();

      const arrowIcon = this.querySelector('.arrow-icon');

      arrowIcon.classList.add('slide-animation');

      setTimeout(() => {
        arrowIcon.classList.remove('slide-animation');
      }, 500);
    });
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const prevButton = document.querySelector('.prev-button');
  const nextButton = document.querySelector('.next-button');
  const carouselItems = document.querySelectorAll('.project-carousel-item');

  let currentIndex = 0;

  function showItem(index) {
    carouselItems.forEach((item) => item.classList.remove('active'));
    carouselItems[index].classList.add('active');
  }

  prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
    showItem(currentIndex);
  });

  nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % carouselItems.length;
    showItem(currentIndex);
  });

  // Show the initial item
  showItem(currentIndex);
});
