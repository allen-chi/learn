console.log("Hello world");


// This function finds the current time
function setDate() {
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();
    console.log("The time is currently " + hours + ":" + minutes + ":" + seconds)
    
    // Set up for seconds
    const secDeg = (360/60);
    const secTick = ((seconds * secDeg) + 90);
    const secondHand = document.querySelector(".second-hand");
    secondHand.style.transform = `rotate(${secTick}deg)`;

    // Set up for minutes
    const minDeg = (360/60);
    const minTick = ((minutes * minDeg) + 90);
    const minHand = document.querySelector(".min-hand");
    minHand.style.transform = `rotate(${minTick}deg)`;


    // Set up for hours
    const hrDeg = (360/12);
    const hrTick = ((hours * hrDeg) + 90);
    const hrHand = document.querySelector(".hour-hand");
    hrHand.style.transform = `rotate(${hrTick}deg)`;
    
    // console.log(secTick);
}
// How many degrees each second tick requires


setInterval(setDate, 1000);