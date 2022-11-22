function scuberGreetingForFeet(rideLength){
  let greeting ;
if (rideLength <= 400){
  greeting = 'This one is on me!'
  return greeting
} else if (rideLength <= 2000){
  greeting = 'That will be twenty bucks.'
  return greeting
} else if (rideLength <= 2500) {
  greeting = 'I will gladly take your thirty bucks.'
  return greeting
} else if (rideLength > 2500){
  greeting = 'No can do.'
  return greeting
}
}

function ternaryCheckCity(city){
let answer  ;
city === "NYC"?(answer = "Ok, sounds good."):(answer = "No go.")
return answer
}

function switchOnCharmFromTip(tipAmount){
 let answer;
switch(tipAmount){
  case 'generous':
    answer = "Thank you so much."
    return answer
    break;
  case 'not as generous' :
      answer = "Thank you."
      return answer
      break;
  default :
    answer = "Bye."
    return answer
    break;
}
}