const mercurius = document.getElementById("mercurius");
const venus = document.getElementById("venus");
const earth = document.getElementById("earth");
const mars = document.getElementById("mars");
const jupiter = document.getElementById("jupiter");
const saturnus = document.getElementById("saturnus");
const uranus = document.getElementById("uranus");
const neptune = document.getElementById("neptune");
const planetPopup = document.getElementById("planetPopup");
const sunPop = document.getElementById("sun-popup");

const circumference = document.getElementById("circumference-text");
const distance = document.getElementById("distance-text");
const maxTemp = document.getElementById("max-temp");
const minTemp = document.getElementById("min-temp");
const planetNameone = document.getElementsByClassName("header_infobox")[0];
const planetNameLatin =
  document.getElementsByClassName("header_infobox-sub")[0];
const planetDesctiption = document.getElementsByClassName(
  "infobox_desctiption-text"
)[0];
const moonInfo = document.getElementsByClassName("moon_info")[0];

let planetData;

const url = "https://n5n3eiyjb0.execute-api.eu-north-1.amazonaws.com/keys";

const datakey = {
  key1: "value1",
};

fetch(url, {
  method: "POST",
  headers: {
    "x-zocom": "application/json",
  },
  body: JSON.stringify(datakey),
})
  .then((response) => response.json())
  .then((apiKeyData) => {
    console.log("Success:", apiKeyData);
    return fetch(
      "https://n5n3eiyjb0.execute-api.eu-north-1.amazonaws.com/bodies",
      {
        method: "GET",
        headers: {
          "x-zocom": apiKeyData.key,
        },
      }
    );
  })
  .then((response) => response.json())
  .then((data) => {
    console.log("Second request success:", data);
    planetData = data;
  })
  .catch((error) => console.error("Error:", error));

function openPopup(planetName) {
  planetPopup.style.display = "block";
  updateInfobox(planetName);
  generateStars(); // Generate stars when the planet is clicked
  toggleStarVisibility(true); // Show stars
}

function updateInfobox(planetName) {
  const currentPlanet = planetData.bodies.find(
    (body) => body.name === planetName
  );

  if (currentPlanet) {
    circumference.innerHTML = `${currentPlanet.circumference} KM`;
    planetNameone.innerHTML = `${currentPlanet.name}`;
    planetNameLatin.innerHTML = `${currentPlanet.latinName}`;
    planetDesctiption.innerHTML = `${currentPlanet.desc}`;
    distance.innerHTML = `${currentPlanet.distance} KM`;
    maxTemp.innerHTML = `${currentPlanet.temp.day}°C`;
    minTemp.innerHTML = `${currentPlanet.temp.night}°C`;

    const uniqueMoons = [...new Set(currentPlanet.moons)];
    const moonInfoString = uniqueMoons.join(", ");

    moonInfo.innerHTML = moonInfoString;
  }
}

mercurius.addEventListener("click", function () {
  openPopup("Merkurius");
  sunPop.style.backgroundColor = "#888888"
});

venus.addEventListener("click", function () {
  openPopup("Venus");
  sunPop.style.backgroundColor = "#e7cdcd"
});

earth.addEventListener("click", function () {
  openPopup("Jorden");
  sunPop.style.backgroundColor = "#428ed4"
});

mars.addEventListener("click", function () {
  openPopup("Mars");
  sunPop.style.backgroundColor = "#ef5f5f"
});

jupiter.addEventListener("click", function () {
  openPopup("Jupiter");
  sunPop.style.backgroundColor = "#e29468"
});

saturnus.addEventListener("click", function () {
  openPopup("Saturnus");
  sunPop.style.backgroundColor = "#c7aa72"
});

uranus.addEventListener("click", function () {
  openPopup("Uranus");
  sunPop.style.backgroundColor = "#c9d4f1"
});

neptune.addEventListener("click", function () {
  openPopup("Neptunus");
  sunPop.style.backgroundColor = "#7a91a7"
});

function closePopup() {
  planetPopup.style.display = "none";
  toggleStarVisibility(false);
}

const numStars = 100;
const body = document.body;
let stars = [];

function generateStars() {
  for (let i = 0; i < numStars; i++) {
    const star = document.createElement("div");
    star.className = "star";
    const size = Math.random() * 3;
    const positionX = Math.random() * window.innerWidth;
    const positionY = Math.random() * window.innerHeight;
    const zIndex = 1;

    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    star.style.left = `${positionX}px`;
    star.style.top = `${positionY}px`;
    star.style.zIndex = zIndex;

    body.appendChild(star);
    stars.push(star);
  }
}

function toggleStarVisibility(isVisible) {
  const displayValue = isVisible ? "block" : "none";
  stars.forEach((star) => {
    star.style.display = displayValue;
  });
}
