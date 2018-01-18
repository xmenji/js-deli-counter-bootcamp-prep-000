function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  return "Welcome, " + name + ". You are number " + katzDeliLine.length + " in line.";
}

function nowServing(katzDeliLine){
  var customer = '';
  
  if(katzDeliLine.length > 0){
    customer = katzDeliLine.shift();  
    return "Currently serving " + customer + ".";
  }
  return "There is nobody waiting to be served!";
    
}