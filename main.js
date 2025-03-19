document.addEventListener("DOMContentLoaded", function () {
  const tipsSection = document.querySelector(".tips");
  const toggleButton = document.querySelector(".tips__toggle");

  if (!tipsSection || !toggleButton) return;

  toggleButton.addEventListener("click", function () {
    const isExpanded = tipsSection.classList.toggle("tips--expanded");
    toggleButton.textContent = isExpanded ? "Свернуть" : "Развернуть";
  });
});
