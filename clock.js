function secondRotation(seconds) {
  // there are 60 seconds in a minute
  // that means, each second needs to rotate the 
  // secondhand by 360/60 = 6degrees
  var degRotation = 6*seconds
  return degRotation
}

function minuteRotation(minutes) {
  // first, convert the minutes to seconds
  let seconds = 60*minutes
  // there are 60sec*60min=3600 seconds in a hour
  // that means, each second needs to rotate the
  // minutehand by 360/3600=.1 degrees
  let degRotation = .1*seconds
  return degRotation
}

function hourRotation(hours) {
  // first, convert the hours to minutes
  let minutes = 60*hours
  // there are 60min*12hr=720 minutes in a hour
  // that means, each minute needs to rotate the
  // minutehand by 360/720=.5 degrees
  let degRotation = .5*minutes
  return degRotation
}