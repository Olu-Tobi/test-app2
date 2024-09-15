const heading = document.querySelector("h1");
const button = document.querySelector("button");

const brightColors = ["#FF5733", "#33FF57", "#3357FF", "#FF33A1", "#F4FF33"];

button.addEventListener("click", () => {
  const randomColor =
    brightColors[Math.floor(Math.random() * brightColors.length)];

  heading.style.color = randomColor;
});
