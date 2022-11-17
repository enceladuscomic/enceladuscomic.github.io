function coverTurnAni(el) {
    // let el = document.querySelector(".cover.turn");
    el.style.animation = "bookCover 3s forwards";
}

function pageTurnAni(el) {
    // let el = document.querySelector(".page.turn");
    if (!el.classList.contains("isOpen")) {
        el.style.animation = "bookOpen 3s forwards";
        el.classList.add("isOpen");
    }
    else if (el.classList.contains("isOpen")) {
        el.style.animation = "bookClose 3s forwards";
        el.classList.remove("isOpen");
    }
}