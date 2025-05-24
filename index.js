let hr = document.querySelector("#hour");
let min= document.querySelector("#min");
let sec = document.querySelector("#sec");

setInterval(()=>{
    let currentTime = new Date();/*Time function*/

    let currentHr = currentTime.getHours();
    hr.textContent = currentHr;

    let curMin = currentTime.getMinutes();
    min.textContent = curMin;

    let curSec = currentTime.getSeconds();
    sec.textContent = curSec;

},1000)
