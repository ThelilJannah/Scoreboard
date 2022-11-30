let homeCount = document.getElementById("home-count")
let guestCount = document.getElementById("guest-count")
let hcount = 0
let gcount = 0
let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")
let period = document.getElementById("period")
let periodCount = 0
// let hscore = []
// let gscore = []

 

function hincrementByOne() {
  hcount ++
  homeCount.textContent = hcount
   
}

function hincrementByTwo() {
  hcount += 2
  homeCount.textContent = hcount
 
}

function hincrementByThree() {
  hcount += 3
  homeCount.textContent = hcount
 
}

function gincrementByOne() {
  gcount ++
  guestCount.textContent = gcount
}

function gincrementByTwo() {
  gcount ++
  guestCount.textContent = gcount
}

function gincrementByThree() {
  gcount ++
  guestCount.textContent = gcount
}

if(gcount > hcount ) {
  guestCount.style.color = "green"
  homeCount.style.color = "red"
}else if(hcount > gcount) {
  homeCount.style.color = "green"
  guestCount.style.color = "red"
}else{
  guestCount.style.color = "#FFF"
  homeCount.style.color = "#FFF"
}

function newGame () {
  hcount = 0
  gcount = 0
  homeCount.textContent = "0"
  guestCount.textContent = "0"
  periodCount ++
  period.textContent = "Period: " + periodCount
}

function saveGame() {
  //  hscore.push(hcount)
  //  gscore.push(gcount)
   homeScore.textContent += hcount + " | "
   guestScore.textContent += gcount + " | "
}


 