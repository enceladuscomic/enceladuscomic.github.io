let isOpen = false;

function ani() {
    console.log("clicked");
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