let seconds = 0;
let minutes = 0;
let hours = 0;

function secondRotation(seconds) {
  // there are 60 seconds in a minute
  // that means, each second needs to rotate the 
  // secondhand by 360/60 = 6degrees
  var degRotation = 6*seconds
  return degRotation
}

function minuteRotation(minutes, seconds) {
  // first, convert the minutes to seconds
  let totalSeconds = 60*minutes+seconds
  // there are 60sec*60min=3600 seconds in a hour
  // that means, each second needs to rotate the
  // minutehand by 360/3600=.1 degrees
  let degRotation = .1*totalSeconds
  return degRotation
}

function hourRotation(hours, minutes) {
  // first, convert the hours to minutes
  let totalMinutes = 60*hours + minutes
  // there are 60min*12hr=720 minutes in a hour
  // that means, each minute needs to rotate the
  // minutehand by 360/720=.5 degrees
  let degRotation = .5*totalMinutes
  return degRotation
}
    

function tick() {
    // increase the time by one second
    seconds++

    if(seconds==60) {
        minutes++
        seconds=0
    }
    
    if(minutes==60) {
        hours++
        minutes=0
    }

    if(hours==12) {
        hours=0
    }

    console.log(`${hours}:${minutes}:${seconds}`)

    secHand.style.transform = "rotate(" + secondRotation(seconds) + "deg)";
    minHand.style.transform = "rotate(" + minuteRotation(minutes, seconds) + "deg)";
    hourHand.style.transform = "rotate(" + hourRotation(hours, minutes) + "deg)";
}

document.addEventListener('DOMContentLoaded', function(){
    secHand = document.getElementById("second");
    minHand = document.getElementById("minute");
    hourHand = document.getElementById("hour");

    // second arg of setInterval is in miliseconds (1/1000 of a second)
    setInterval(tick, 1000)
})