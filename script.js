const gameContainer = document.getElementById("game");

const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "blue",
  "green",
  "orange",
  "purple"
];

// here is a helper function to shuffle an array
// it returns the same array with values shuffled
// it is based on an algorithm called Fisher Yates if you want ot research more
function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

let shuffledColors = shuffle(COLORS);

// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card
function createDivsForColors(colorArray) {
  for (let color of colorArray) {
    // create a new div
    
    const newDiv = document.createElement("div");

    // give it a class attribute for the value we are looping over
    newDiv.classList.add(color);
    // call a function handleCardClick when a div is clicked on
    newDiv.addEventListener("click", handleCardClick);

    // append the div to the element with an id of game
    gameContainer.append(newDiv);
   
  }
}
let clickedDiv = [];
let matchedDiv = [];
// TODO: Implement this function!
function handleCardClick(event) {
  const box = event.target;
  if(clickedDiv.length<1){
    
    box.setAttribute.innerText = 1;
    box.style.color = `${box.getAttribute('class')}`
    box.style.backgroundColor = `${box.getAttribute('class')}`
    clickedDiv.push(box)
    for(let div of matchedDiv){
      if(div === clickedDiv[0]){
        clickedDiv = []
      }
    }
    return
  } else if(clickedDiv.length === 1){
    box.style.backgroundColor = `${box.getAttribute('class')}`
    clickedDiv.push(box)
    if(clickedDiv[0] === clickedDiv[1]){
      clickedDiv.pop();
    }
    for(let div of matchedDiv){
      if(div === clickedDiv[1]){
        clickedDiv.pop();
        return;
      }
    }
  } else{
    return;
  }
   if(clickedDiv[0].className===clickedDiv[1].className){
        for(let div of clickedDiv){
          matchedDiv.push(div)
        }
        clickedDiv = [];
        return;
    }else{
          setTimeout(function(){
            for(let div of clickedDiv){
              div.style.backgroundColor = []
              div.innerText= ''
            }
              clickedDiv = [];
          },1000);
          
        }
      

  // you can use event.target to see which element was clicked
  console.log(event.target.getAttribute('class'));
}

// when the DOM loads
createDivsForColors(shuffledColors);
