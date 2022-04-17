let count = 0;
const countEl = document.getElementById("count-el");
const entries = document.querySelector("#entries");
let initialEntry = true;

function increment() {
    count++;
    updateCount();
}

function updateCount() {
    countEl.innerHTML = count;
}

function reset() {
    count = 0;
}

function save() {
    // take count,
    // append to entries
    if (initialEntry) {
        entries.textContent += ` ${count}`;
        initialEntry = false;
    } else {
        entries.textContent += ` - ${count}`;
    }

    reset();
    updateCount();
}
