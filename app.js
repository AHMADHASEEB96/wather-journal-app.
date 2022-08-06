// Personal API Key for OpenWeatherMap API
const myApiKey = "&appid=e46857ba1c42bc9e4e4c4e75a9226b3d&units=metric";
// the IS is used for the temperature unit

// state varibles
const theDate = document.getElementById("date");
const temp = document.getElementById("temp");
const generate = document.getElementById("generate");
const errorMessage = document.getElementById(`error`);
// the api soutce
let baseURL = "https://api.openweathermap.org/data/2.5/weather?zip=";

// my customized api, getting the temp in C is conisdered .

// extraxtin the date inforamtion
let d = new Date();

let newDate = `${d.getMonth() + 1}-${d.getDate()}-${d.getFullYear()}`;

const fetchData = function () {
  const zipCode = document.getElementById("zip").value;
  const catchFeelings = document.getElementById("feelings").value;
  if (catchFeelings === "") {
    setTimeout(function () {
      errorMessage.innerText = `please share your feelings with us`;
    }, 500);
    errorMessage.style.color = `red`;
  } else {
    errorMessage.innerText = ``;
  }
  if (zipCode.length !== 5) {
    alert(`invalid zipCode, make sure its five digits length`);
  }
  getWeather(baseURL, zipCode, myApiKey).then(function (info) {
    postData("http://localhost:3030/postingPath", {
      date: newDate,
      temp: info.main.temp,
      content: catchFeelings,
    });
  });
};
// listenning to clicking to fetching the needed data from the api
generate.addEventListener("click", fetchData);

const getWeather = async (baseURL, zipCode, myApiKey) => {
  try {
    const apiResponse = await fetch(`${baseURL}${zipCode}${myApiKey}`); /*.then(
      (dat) => {
        issue(dat);
      }
    );*/

    const data = await apiResponse.json();
    console.log(data);
    if ((data.cod = 200)) {
      return data;
    } else {
      alert(data);
    }
  } catch (error) {
    console.log("error:", error);
  }
};

// Posting  data in the server
const postData = async (url = "", info = {}) => {
  const response = await fetch(url, {
    method: "POST",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(info),
  });
  try {
    updateUI();
    //if the priomise is really resolved , updata the data to the ui
    // if not fulfilled cath the error and display it
  } catch (error) {
    console.log("error:", error);
  }
};

// grttin the stored data to diplay
const updateUI = async () => {
  const request = await fetch("http://localhost:3030/allData");
  try {
    const requiredData = await request.json();
    const deg = Math.round(requiredData.temp);
    theDate.innerHTML = "Date : " + requiredData.date;
    temp.innerHTML = ` ITS : ${deg}º C today `;
    document.getElementById("content").innerHTML =
      "you feel: " + requiredData.content;
  } catch (error) {
    console.log("error:", error);
  }
};

const card = document.querySelector(`.card`);
const btnOpn = document.getElementById(`open`);
const btncls = document.getElementById(`close`);
const zipRange = document.getElementById(`zipRange`);

btnOpn.addEventListener(`click`, function () {
  zipRange.style.display = "block";
  btnOpn.style.display = "none";
  card.style.opacity = "0.6";
});

btncls.addEventListener(`click`, function () {
  zipRange.style.display = "none";
  btnOpn.style.display = "block";
  card.style.opacity = "1";
});

setTimeout(function () {
  alert(`#ATTENTION
   Only USA zipcodes are valid`);
}, 100);
