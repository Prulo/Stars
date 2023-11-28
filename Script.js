const mercurius = document.getElementById("mercurius");
const venus = document.getElementById("venus");
const earth = document.getElementById("earth");
const mars = document.getElementById("mars");
const jupiter = document.getElementById("jupiter");
const saturnus = document.getElementById("saturnus");
const uranus = document.getElementById("uranus");
const neptune = document.getElementById("neptune");
const planetPopup = document.getElementById("planetPopup");




// URL to which you want to send the POST request
const url = 'https://n5n3eiyjb0.execute-api.eu-north-1.amazonaws.com/keys';

// Data to be sent in the request body (can be a JSON object, FormData, etc.)
const data = {
  key1: 'value1'
};

// Perform the POST request using the Fetch API
fetch(url, {
  method: 'POST',
  headers: {
    'x-zocom': 'application/json', // specify the content type if sending JSON data
    // add any other headers as needed
  },
  body: JSON.stringify(data) // convert data to JSON string
})
  .then(response => response.json()) // assuming the server returns JSON, parse the response
  .then(data => console.log('Success:', data))
  .catch(error => console.error('Error:', error));



console.log(data)


mercurius.addEventListener('click', async function() {
    openPopup("Mercurius")
})
  venus.addEventListener('click', async function() {
    openPopup("venus")
}) 
  earth.addEventListener('click', function() {
    openPopup("earth")
  });
  mars.addEventListener('click', function() {
    openPopup("mars")
  });
  jupiter.addEventListener('click', function() {
    openPopup("jupiter")
  });
  saturnus.addEventListener('click', function() {
    openPopup("saturnus")
  });
  uranus.addEventListener('click', function() {
    openPopup("uranus")
  });
  neptune.addEventListener('click', function() {
    openPopup("neptune")
  });

  function closePopup() {
    planetPopup.style.display = "none";
  }

function openPopup(planetName) {
  planetPopup.style.display = "block";
  console.log(planetName)
}