const handleOnMouseMove = e => {
    const { currentTarget: target } = e;

    const rect = target.getBoundingClientRect(),
        x = e.clientX - rect.left,
        y = e.clientY - rect.top;

    target.style.setProperty("--mouse-x", `${x}px`);
    target.style.setProperty("--mouse-y", `${y}px`);
}

for (const stage of document.querySelectorAll(".spotlight")) {
    stage.onmousemove = e => handleOnMouseMove(e);
}

let isOpen = false;

function ani() {
    let el = document.getElementById("eyelid-span");
    if (!isOpen) {
        el.style.animation = "1s ease-in eye-open-animation";
        el.style.height = "0%";
        isOpen = true;
    }
    else if (isOpen) {
        el.style.animation = "1s ease-in eye-close-animation";
        el.style.height = "100%";
        isOpen = false;
    }
    // document.getElementById("eyelid-span").style.animation = "1s ease-in eye-open-animation";
    // document.getElementById("eyelid-span").style.height = "0%";
};