const gallery = document.querySelector(".gallery");
const overlay = document.querySelector(".overlay");
const overlayImage = overlay.querySelector("img");
const overlayClose = overlay.querySelector(".close");

function generateHTML([h, v]) {
    return `
        <div class="item h${h} v${v}">
            <img src="images/${randomNumber(12)}.jpg">
            
        </div>
    `
}

function randomNumber(limit) {
    return Math.floor(Math.random() * limit) + 1;
}

const digits = Array.from({ length: 50 }, () => [randomNumber(4), randomNumber(4)]);


const html= digits.map(generateHTML).join('');


gallery.innerHTML= html;
