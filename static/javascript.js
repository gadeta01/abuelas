function myFunction(current, next) {
    document.getElementById(next).removeAttribute("hidden");
    document.getElementById(current).setAttribute("hidden", true); 
}

function randFunc(current, next1, next2) {
  thenum = Math.floor((Math.random() * 10) + 1);
  if (thenum > 5) {
    document.getElementById(next1).removeAttribute("hidden");
  } else { 
    document.getElementById(next2).removeAttribute("hidden");
  }
  document.getElementById(current).setAttribute("hidden", true); 
}
