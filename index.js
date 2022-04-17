let count = 0;
const countEl = document.getElementById("count-el");

function increment() {
    count++;
    countEl.innerHTML = count;
}

function reset() {
    count = 0;
}

function save() {
    return;
}
