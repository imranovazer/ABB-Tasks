const button = document.querySelector(".api-button");

button.addEventListener("click", loadData);

function makeRequest(url) {
  return new Promise(function (resolve, reject) {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState === 4) {
        if (this.status === 200) {
          resolve(JSON.parse(this.responseText));
        } else {
          reject(new Error("Request failed"));
        }
      }
    };

    xhttp.open("GET", url, true);
    xhttp.send();
  });
}

async function loadData() {
  try {
    const container = document.querySelector(".my-ip");
    const res = await makeRequest("https://api.ipify.org/?format=json");
    const ip = res.ip;

    const data = await fetch(
      `http://ip-api.com/json/${ip}?fields=continent,country,region,city,district`
    );

    const geoData = await data.json();

    const template = `<li>Continent : ${geoData.continent}</li>
    <li>Country : ${geoData.country}</li>
    <li>Region: ${geoData.region} </li>
    <li>City : ${geoData.city}</li>
    <li>District : ${geoData.district} </li>
    `;

    container.innerHTML = template;

    console.log(geoData);
  } catch (error) {
    console.log(error);
  }
}
