const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-showcase');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filter = btn.dataset.filter;

    projectCards.forEach(card => {
      const category = card.dataset.category;
      const show = filter === 'all' || category === filter;
      card.style.display = show ? 'grid' : 'none';
    });
  });
});

const videos = document.querySelectorAll(".hover-video");

  videos.forEach(video => {
    const card = video.closest(".project-showcase");

    card.addEventListener("mouseenter", () => {
      video.play();
    });

    card.addEventListener("mouseleave", () => {
      video.pause();
    });
  });