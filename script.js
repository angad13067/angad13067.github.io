function randomNumber(min, max) {
  return Math.random() * (max - min) + min;
}

function randomInteger(min, max) {
  return Math.floor(randomNumber(min, max + 1));
}
/*200*/
function createStars(starsContainer, starCount = 20) {
  if (!starsContainer) return;

  for (let i = 0; i < starCount; i++) {
    const star = document.createElement("div");

    star.className = "star";
    star.style.left = Math.random() * 100 + "%";
    star.style.top = Math.random() * 100 + "%";
    star.style.animationDelay = Math.random() * 4 + "s";
    star.style.animationDuration = Math.random() * 3 + 2 + "s";

    starsContainer.appendChild(star);
  }
}

/*defauot count 18*/
function createBottomFireflies(fireflyContainer, fireflyCount = 8) {
  if (!fireflyContainer) return;

  for (let i = 0; i < fireflyCount; i++) {
    const firefly = document.createElement("span");

    firefly.classList.add("firefly");

    firefly.style.setProperty("--x", `${randomNumber(0, 100)}vw`);
    firefly.style.setProperty("--y", `${randomNumber(5, 90)}%`);

    firefly.style.setProperty("--move-x", `${randomInteger(-40, 40)}px`);
    firefly.style.setProperty("--move-y", `${randomInteger(-50, 25)}px`);

    firefly.style.setProperty("--scale", randomNumber(0.6, 1.3).toFixed(2));

    firefly.style.setProperty(
      "--drift-duration",
      `${randomNumber(4, 9).toFixed(2)}s`,
    );

    firefly.style.setProperty(
      "--flash-duration",
      `${randomNumber(3, 7).toFixed(2)}s`,
    );

    firefly.style.setProperty("--delay", `${randomNumber(0, 5).toFixed(2)}s`);

    fireflyContainer.appendChild(firefly);
  }
}

function initLofiBackgrounds() {
  const backgrounds = document.querySelectorAll(".lofi-bg");

  backgrounds.forEach((background) => {
    const starsContainer = background.querySelector(".stars");
    const fireflyContainer = background.querySelector(".fireflies");

    createStars(starsContainer);
    createBottomFireflies(fireflyContainer);
  });
}

initLofiBackgrounds();
