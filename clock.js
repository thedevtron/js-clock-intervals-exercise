var today = new Date()
let currentSeconds = today.getSeconds();
let currentMinutes = today.getMinutes();
let currentHours = today.getHours();

const secondRotation = (seconds) => {
    let degRotation = 6 * seconds
    secondHand.style.transform = `rotate(${degRotation}deg)`;
}

const minuteRotation = (minutes, seconds) => {
    let degRotation = ((minutes * 6) + (seconds * 0.1))
    minuteHand.style.transform = `rotate(${degRotation}deg)`;
}

const hourRotation = (hours, minutes) => {
    let degRotation = ((hours * 30) + (minutes * 0.5))
    hourHand.style.transform = `rotate(${degRotation}deg)`;
}

const tick = () => {
    currentSeconds++
    secondRotation(currentSeconds)
    minuteRotation(currentMinutes, currentSeconds)

    if (currentSeconds === 60) {
        currentSeconds = 0
        currentMinutes++
        
    }

    if (currentMinutes === 60) {
        currentMinutes = 0
        currentHours++
        hourRotation(currentHours, currentMinutes)
    }             
}

document.addEventListener("DOMContentLoaded", () => {
    secondHand = document.querySelector("#second")
    minuteHand = document.querySelector("#minute")
    hourHand = document.querySelector("#hour")

    secondRotation(currentSeconds)
    minuteRotation(currentMinutes, currentSeconds)
    hourRotation(currentHours, currentMinutes)

    //Seconds Interval
    setInterval(() => {
        tick()
    }, 1000)

})