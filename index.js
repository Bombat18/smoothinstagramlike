const container = document.querySelector("#contener");
const like = document.querySelector(".ri-heart-fill");
const element = document.getElementById("ri");
const right = document.querySelector("#right");
let i = 0;
let a=0;
container.addEventListener("dblclick", function () {
    like.style.transform = "scale(1)";
    like.style.opacity = "0.9";


    setTimeout(function () {
        like.style.transform = "scale(0)";
        like.style.opacity = "0";
    }, 1000);
    if (i == 0) {
        element.className = 'fa-solid fa-heart';
        element.style.color = "red";
        element.style.transition = "all ease 0.6s";
        i = 1;
    }

});



element.addEventListener("click", function () {

    if (i == 0) {
        element.className = 'fa-solid fa-heart';
        element.style.color = "red";
        element.style.transition = "all ease 0.6s";
        i = 1;
    }
    else {
        element.className = 'ri-heart-line';
        element.style.color = "black";
        element.style.transition = "all ease 0.6s";
        i = 0;

    }
});

right.addEventListener("click", function () {

    if (a == 0) {
        right.className = 'fa-solid fa-bookmark';
        right.style.transition = "all ease 0.6s";
        a = 1;
    }
    else {
        right.className = 'fa-regular fa-bookmark';

        right.style.transition = "all ease 0.6s";
        a = 0;

    }
});

