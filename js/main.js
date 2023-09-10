const currentUTCTime = document.getElementById("currentUTCTime");
const currentDayOfTheWeek =document.getElementById("currentDayOfTheWeek");
const weekDays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]

currentUTCTime.innerHTML = Date.now();
currentDayOfTheWeek.innerHTML = weekDays[new Date().getDay()];