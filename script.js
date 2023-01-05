const hourEl = document.querySelector('.hour');
const minuteEl = document.querySelector('.minute');
const secondEl = document.querySelector('.second');



function updateClock() {
    const currentDate = new Date();
    
    const hour = currentDate.getHours();
    const minute = currentDate.getMinutes();
    const second = currentDate.getSeconds();
    
    hourEl.innerHTML = `${hour}`;
    minuteEl.innerHTML = `${minute}`;
    secondEl.innerHTML = `${second}`;

    
}


setInterval(updateClock, 1000);

updateClock();