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

function randFuncThirds(current, next1, next2) {
  thenum = Math.floor((Math.random() * 9) + 1);
  if (thenum < 4) {
    document.getElementById(next1).removeAttribute("hidden");
  } else { 
    document.getElementById(next2).removeAttribute("hidden");
  }
  document.getElementById(current).setAttribute("hidden", true); 
}

function nietoFinalRandom(current) {
  thenum = Math.floor((Math.random() * 64) + 1);
  if (thenum < 17) {
    document.getElementById('a18').removeAttribute("hidden");
  } else { 
    if (thenum < 32) {
      document.getElementById('b18').removeAttribute("hidden");
    } else {
      if (thenum < 48) {
        document.getElementById('c18').removeAttribute("hidden");
      } else {
        document.getElementById('d18').removeAttribute("hidden");
      }
    }
  }
  document.getElementById(current).setAttribute("hidden", true); 
}
