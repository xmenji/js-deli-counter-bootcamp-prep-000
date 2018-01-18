function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  return "Welcome, " + name + ". You are number " + katzDeliLine.length + " in line.";
}

function nowServing(katzDeliLine){
  katzDeliLine.length > 0 ? 
    "Currently serving " + katzDeliLine[0] :
    return "There is nobody waiting to be served!";
    
}