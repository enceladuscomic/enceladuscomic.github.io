const clamp = (num, min, max) => Math.min(Math.max(num, min), max);

const handleOnMouseMove = e => {
    const { currentTarget: target } = e;

    const rect = target.getBoundingClientRect(),
        // x = clamp(e.clientX - rect.left, 10, rect.right - 100),
        x = e.clientX - rect.left,
        y = e.clientY - rect.top;

    target.style.setProperty("--mouse-x", `${x}px`);
    target.style.setProperty("--mouse-y", `${y}px`);
}

for (const stage of document.querySelectorAll(".spotlight")) {
    stage.onmousemove = e => handleOnMouseMove(e);
}