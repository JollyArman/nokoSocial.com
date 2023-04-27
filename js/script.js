
document.querySelector("#left-btn").addEventListener("click", show);

function show() {

    document.querySelector(".left-section").classList.toggle("show");

}

document.querySelector("#left-btn").addEventListener("click", rotate);

function rotate() {
    document.querySelector(".logo i").classList.toggle("p");
}


document.querySelector("#right-btn").addEventListener("click", rightShow);

function rightShow() {

    let rightShow = document.querySelector("#right-menu");

    rightShow.classList.toggle("right-show");
}


// -------------menu-section-complete---------------------
// -------------------------------------------------------
