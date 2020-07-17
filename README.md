# JavaScript Clock Intervals

Create a webpage that displays a clock where the
second, minute, and hour hands tick.

#1: Write CSS to have the clock face, second, minute, hour
hands all display correctly on top of the face.

#2: Write CSS to have the second, minute, hour
hands all display in the correct order. Make
sure the red second hand displays on top of the minute
and hour hand.

#3: Write a function that converts the seconds to degrees of rotation and returns the degrees.

Use CSS transform rotation to rotate the hands of the
clock.

```js
function secondRotation(seconds) {
  //code
  return degRotation
}
```

#4: Write `minuteRotation` and `hourRotation` functions. As a bonus, account for the “in between” degrees; ie don’t just have the minute hand jump between minutes, but have it rotate each SECOND, and have the hour hand rotate each MINUTE.

<details><summary>HINT: minuteRotation</summary>
<p>

```js
function minuteRotation(minutes, seconds) {
  // first, find the total seconds by converting the minutes to seconds then adding that value to the seconds argument
  //  code here

  // there are 60sec*60min=3600 seconds in a hour
  // that means, each second needs to rotate the
  // minutehand by 360/3600=.1 degrees

  // code here to find the degrees of rotation
  // don’t forget to return the final value!

}
```
</p>
</details>

<details><summary>HINT: hourRotation</summary>
<p>

```js
function hourRotation(hours, minutes) {
  // first, find the total minutes converting the hours to minutes, then adding that value to the minutes argument
  // code here

  // there are 60min*12hr=720 minutes in a hour
  // that means, each minute needs to rotate the
  // minutehand by 360/720=.5 degrees

  // code here to find the degrees of rotation
  // don’t forget to return the final value!
}
```
</p>
</details>

#5: Write a `tick` function that logs “tick” to the console.  How would you get the tick function to run every minute? Don’t forget to set up a  DOMContentLoaded event listener.

#6: Initialize three variables to zero: `seconds`, `minutes` and `hours`. Modify the `tick` function to update and print values of ``seconds`, `minutes` and `hours`.

#7. Grab the three DOM elements you need to manipulate and store them so you can refer to them later. Rotate them accordingly inside the tick function.

## Bonus: Show Actual Time
Use JavaScripts `Date` objects to display the actual
time.

```
var now = new Date();
```

Get `now` by declaring a new Date object. You can google for "MDN date methods" to see what
helpful methods are attached to Date objects. There's helpful things like `.getMonth()`, `.getSeconds()`
and who knows what else!

See the full list of methods in the left sidebar on this site:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date

## Licensing
All content is licensed under a CC­BY­NC­SA 4.0 license.
All software code is licensed under GNU GPLv3. For commercial use or alternative licensing, please contact legal@ga.co.

