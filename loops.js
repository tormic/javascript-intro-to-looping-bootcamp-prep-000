
function forLoop(array) {
  for (let i = 0; i<25; i++) {
    if (i === 1) {
      array.push("I am 1 strange loop.")
    } else {
      array.push(`I am ${i} strange loops`)
    }//end else
  }// end for
  return array // returns undefined if we don't use return here
}//end function forLoop


function whileLoop(number) {
while (number > 0) {
  console.log(--number)
}//end while
var done = "done"
return done
}//end function

function maybeTrue() {
  return Math.random() >= 0.5
}

function doWhileLoop(array) {
  while (array.length > 0 && maybeTrue()) {
    array.pop()
  }
  return array
}
