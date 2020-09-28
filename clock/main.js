
setInterval(updateClock, 1000);

function updateClock() {
    const now = new Date();
    document.getElementById('second').style.transform = `rotate(${360 / 60 * now.getSeconds()}deg)`;
    document.getElementById('minute').style.transform = `rotate(${360 / 60 * now.getMinutes()}deg)`;
    document.getElementById('hour').style.transform = `rotate(${360 / 12 * now.getHours()}deg)`;
}



