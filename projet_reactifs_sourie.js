let projectCards = document.querySelectorAll(".project-card");
projectCards.forEach(card => {
  card.addEventListener("mouseover", () => {
    card.style.transform = "scale(1.10)";
    card.style.transition = "transform 0.4s";
  });
  card.addEventListener("mouseout", () => {
    card.style.transform = "scale(1)";
  });
});

