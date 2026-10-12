const btn = document.getElementById('myBtn');
const message = document.getElementById('message');

let count = 0;

btn.addEventListener('click', () => {
    count++;
    message.textContent = `ضغطت على الزر ${count} مرة 🎯`;
});