const modeBtn = document.querySelector("modeBtn");

let mode = "dark";

const setMode = () => {
    if (mode === "dark") {
        modeBtn.innerText = "light";
        document.body.className = mode;
    } else {
        document.body.className = mode;
        modeBtn.innerText = "dark";
    }
};
setMode();



modeBtn.addEventListener("click", () => {
    if (mode === 'dark') {
        mode = 'light'
    } else {
        mode = 'dark';
    }
    setMode();
})