let hrHand = document.querySelector('.hr-hand');
let minHand = document.querySelector('.min-hand');
let secHand = document.querySelector('.sec-hand');
setInterval(updateTime, 1000);

function updateTime() {
  let date = new Date();
  secHand.style.transform = `rotate(${date.getSeconds()*6}deg)`;
  minHand.style.transform = `rotate(${date.getMinutes()*6}deg)`;
  hrHand.style.transform = `rotate(${date.getHours()*30 + date.getMinutes()*0.5}deg)`;
}

let chathams_blue = "#1A4B84";

function setTheme(theme) {
  document.documentElement.style.setProperty("--primary-color", theme);
  localStorage.setItem("movie-theme", theme);
}
setTheme(localStorage.getItem("movie-theme") || chathams_blue);

function updateDateTime() {
  var currentDate = new Date();
  var amAndPm = "PM";

  var year = currentDate.getFullYear();
  var month = currentDate.toLocaleString('default', { month: 'long' });
  var day = currentDate.getDate();
  var hours = currentDate.getHours();
  var minutes = currentDate.getMinutes();
  var seconds = currentDate.getSeconds();

  var formattedDate = month + ' ' + day + ', ' + year;
  var formattedTime = hours + ':' + (minutes < 10 ? '0' : '') + minutes + ':' + (seconds < 10 ? '0' : '') + seconds;

  if(hours < 12){
    result = "AM";
  }else {
    result = amAndPm;
  }

  document.getElementById('date').innerHTML = "Current Date: " + formattedDate;
  document.getElementById('time').innerHTML = "Current Time: " + formattedTime + " " + result;
}

setInterval(updateDateTime, 1000);

updateDateTime();