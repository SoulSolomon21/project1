let welcomeEl = document.getElementById("welcome-el")
let Name = "Soul"
let greeting = "Welcome back, "
let welcomeGreeting = greeting + Name
// to render text onto the html page, ther is no need to use a function. we just use the textContent command
welcomeEl.textContent = welcomeGreeting 
welcomeEl.textContent += " \'wink\' \'wink\'"

//the line below is asking the html document to get the element with the id of count-el and store it in the variable called countEl
let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count +=  1
    //the line below is telling the html document that we want the inner text of the element we selected to return the value of count
    //OR we are setting the countEl's innerText to the count
    countEl.textContent = count
}

//this function does the saving function. this function saves the previous entries
let saveEl = document.getElementById("save-el")
function save() {
    // let countDash = " " + count + " - "
    // saveEl.innerText += countDash
    //this does the same thing as the lines above, but it saves you from having to keep putting in spaces before the strings
    //it is advisable to use .textContent instead of .innerText
    let countDash = count + " - "
    saveEl.textContent += countDash
    //the lines below reinitialise the count to zero whenever the save button is pressed
    count = 0
    countEl.textContent = count
}


















