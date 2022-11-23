// Spotlight effect

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

// Eye opening/closing animation

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

// Hide navbar on scroll

window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    let header = document.getElementsByTagName("header")[0];
    // let headerNav = header.getElementsByClassName(".")
    if (currentScrollPos > 0) {
        header.style.paddingTop = "0.1vh";
        header.style.paddingBottom = "0.1vh";
    }
    else {
        header.style.paddingTop = "3vh";
        header.style.paddingBottom = "3vh";
    }
}

// Button to scroll read

// function scrollArrowFunction(target) {
//     const y = target.getBoundingClientRect().top + window.pageYOffset - 80;
//     window.scrollTo({
//         top: y, left: 100, behavior: "smooth"
//     });
// };