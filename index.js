// Code your solutions in this file
//const names = ["Guadalupe", "Ollie", "Aki"]; 
function writeCards(names, event) {
  let newArray = [];
  for (let i = 0; i < names.length; i++) {
      newArray.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
      debugger;
    
  }
  return newArray;
}

function countDown () {
  let i=10;
  while (i > -1) {
      console.log(i--);
      
  }
  return i;
}