setInterval(setDate, 1000);

const hour = document.querySelector("[data-hour-hand]");
const min = document.querySelector("[data-minute-hand]");
const sec = document.querySelector("[data-second-hand]");

const digital_hour = document.querySelector("[data-hour-digits]");
const digital_minute = document.querySelector("[data-minute-digits]");
const digital_second = document.querySelector("[data-second-digits]");

function setDate() {
    const currentDate = new Date();
    const seconds = currentDate.getSeconds() / 60;
    const minutes = (seconds + currentDate.getMinutes()) / 60;
    const hours = (minutes + currentDate.getHours()) / 12;
    setRotation(sec, seconds);
    setRotation(min, minutes);
    setRotation(hour, hours);

    if (currentDate.getSeconds() < 10) {
        digital_second.innerHTML = "0" + currentDate.getSeconds().toString();
    } else {
        digital_second.innerHTML = currentDate.getSeconds();
    }

    if (Math.floor(seconds + currentDate.getMinutes()) < 10) {
        digital_minute.innerHTML = "0" + Math.floor(seconds + currentDate.getMinutes()).toString();
    } else {
        digital_minute.innerHTML = Math.floor(seconds + currentDate.getMinutes());
    }

    if (Math.floor(minutes + currentDate.getHours()) < 10) {
        digital_hour.innerHTML = "0" + Math.floor(minutes + currentDate.getHours()).toString();
    } else {
        digital_hour.innerHTML = Math.floor(minutes + currentDate.getHours());
    }
}

function setRotation(element, rotationRatio) {
    element.style.setProperty("--rotation", rotationRatio * 360);
}

setDate();

const btn = document.getElementById("btn");
const btn_toggle = document.getElementById("btn-toggle");

btn.addEventListener("change", (e) => {
    document.body.classList.toggle("dark", e.target.checked);
})

btn_toggle.addEventListener("change", (e) => {
    document.body.classList.toggle("isDigital", e.target.checked);
})