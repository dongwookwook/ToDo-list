const clock = document.querySelector("#clock");

function getClock() {
  const date = new Date();
  clock.innerText = new Date().toLocaleTimeString("en-US", { hour12: false });
}

getClock();
setInterval(getClock, 1000);
