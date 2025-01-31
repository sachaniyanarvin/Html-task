document.addEventListener('DOMContentLoaded', function() {
    const text = "Welcome  to  Future Time  WebSite!";
    const container = document.getElementById('animated-text');
    
    text.split('').forEach((char, index) => {
        const span = document.createElement('span');
        span.textContent = char;
        span.classList.add('char');
        span.style.animationDelay = `${index * 0.1}s`; 
        container.appendChild(span);
    });
});
function setTime() {
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours() % 12;

    const secondDegrees = (seconds / 60) * 360;
    const minuteDegrees = ((minutes + seconds / 60) / 60) * 360;
    const hourDegrees = ((hours + minutes / 60) / 12) * 360;

    document.querySelector('.second-hand').style.transform = `translateX(-50%) rotate(${secondDegrees}deg)`;
    document.querySelector('.minute-hand').style.transform = `translateX(-50%) rotate(${minuteDegrees}deg)`;
    document.querySelector('.hour-hand').style.transform = `translateX(-50%) rotate(${hourDegrees}deg)`;
}

setInterval(setTime, 1000);
setTime();
document.addEventListener('DOMContentLoaded', (event) => {
});