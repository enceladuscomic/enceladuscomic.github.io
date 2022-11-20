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
        // Opening eye
        el.style.animation = "1.5s ease-in eye-open-animation";
        el.style.height = "0%";
        isOpen = true;
        setTimeout(function () {
            window.location.href = "/main.html";
        }, 2000);
    }
    else if (isOpen) {
        // Closing eye
        el.style.animation = "1s ease-in eye-close-animation";
        el.style.height = "100%";
        isOpen = false;
    }
};