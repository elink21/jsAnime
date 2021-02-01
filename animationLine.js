let grids = document.querySelectorAll("div");
let num = 0;
let staggerTime = 20;

let timeline = anime.timeline({
    easing: "easeOutExpo",
});

timeline.add({
    targets: "section div",
    width: "100%",
    backgroundColor: "rgb(0,137,123)",
    delay: anime.stagger(staggerTime),
});

timeline.add({
    targets: "section div",
    backgroundColor: "rgba(0,137,123,0.9)",
    width: "90%",
    direction: "reverse",
    delay: anime.stagger(staggerTime),
});

timeline.add({
    targets: "section #right",
    rotateZ: "45",
    width: "100%",

    translateX: "-50%",
    translateY: "-20vh",
    borderRadius: "10% 10%",
    zIndex: -1,
    backgroundColor: "rgba(0,137,123,0.2)",
    delay: anime.stagger(staggerTime),
});

timeline.add(
    {
        width: "100%",

        targets: "section #left",
        rotateZ: "-45",
        translateX: "50%",
        translateY: "-20vh",
        borderRadius: "10% 10%",
        zIndex: -1,
        backgroundColor: "rgba(0,137,123,0.2)",
        delay: anime.stagger(staggerTime),
    },
    "-=1000"
);

timeline.add({
    targets: "#svgName path",
    opacity: [0, 1],
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: "easeInOutSine",
    duration: 1000,
    delay: function (el, i) {
        return i * 150;
    },
    direction: "alternate",
});

timeline.add(
    {
        targets: ".textNameContainer h1",
        opacity: [0, 1],
        easing: "easeInOutSine",
        duration: 200,
    },
    "-=1000"
);

timeline.add({
    targets: "#roleTag",
    opacity: [0, 1],
    easing: "easeInOutSine",
});

timeline.add({
    targets: "#handcraftedSign",
    opacity: [0, 1],
    easing: "easeInOutSine",
});

var circle = anime({
    targets: "#handCraftedIcon",
    rotateZ: [-30, 30],
    loop: true,
    direction: "alternate",
    easing: "easeInOutSine",
    duration: 1500,
});

