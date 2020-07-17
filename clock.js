function secondRotation(seconds) {
  // there are 60 seconds in a minute
  // that means, each second needs to rotate the 
  // secondhand by 360/60 = 6degrees
  var degRotation = 6*seconds
  return degRotation
}