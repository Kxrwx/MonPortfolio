

const nextButton = document.querySelector(".next");
const prevButton = document.querySelector(".prev");
const slider = document.querySelector(".slider");

nextButton.addEventListener('click', () => {
    slider.append(slider.firstElementChild);  
});

prevButton.addEventListener('click', () => {
    slider.prepend(slider.lastElementChild); 
});


let images = document.querySelectorAll('.item img');
let maxHeight = 0;  


function setCarouselHeight() {
    document.querySelector(".carousel").style.height = `${maxHeight * 0.45}px`;  
}


let imagesLoaded = 0; 

images.forEach((img) => {
    img.onload = function () {
        if (img.naturalHeight > maxHeight) {
            maxHeight = img.naturalHeight;
        }

        imagesLoaded++;

        if (imagesLoaded === images.length) {
            setCarouselHeight();
        }
    };
    if (img.complete) {
        img.onload();
    }
});

document.onmousemove = e => {

    for (const card1 of document.getElementsByClassName('tech-border')) {
        const rect1 = card1.getBoundingClientRect(),
            x = e.clientX - rect1.left,
            y = e.clientY - rect1.top;

        card1.style.setProperty("--mouse-x", `${x}px`);
        card1.style.setProperty("--mouse-y", `${y}px`);
    }


    for (const card2 of document.getElementsByClassName('hobby-border')) {
        const rect2 = card2.getBoundingClientRect(),
            x = e.clientX - rect2.left,
            y = e.clientY - rect2.top;

        card2.style.setProperty("--mouse-x", `${x}px`);
        card2.style.setProperty("--mouse-y", `${y}px`);
    }
};

