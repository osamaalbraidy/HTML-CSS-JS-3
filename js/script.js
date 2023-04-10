const slider = document.querySelector('.slider');
const figure = document.querySelector('.figure');
const projects = document.querySelectorAll('.project');

const firstClone = projects[0].cloneNode(true);
const lastClone = projects[projects.length - 1].cloneNode(true);

let counter = 1;
const size = projects[0].clientWidth + 30;

figure.style.transform = 'translateX(' + (-size * counter) + 'px)';
figure.appendChild(firstClone);
figure.prepend(lastClone);

function nextSlide() {
    if (counter >= projects.length) {
        figure.style.transition = "none";
        counter = 0;
        figure.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
    counter++;
    figure.style.transition = "transform 0.5s ease-in-out";
    figure.style.transform = 'translateX(' + (-size * counter) + 'px)';
    if(counter>=2)
        counter=0;
}

function prevSlide() {
    if (counter <= 0) {
        figure.style.transition = "none";
        counter = projects.length;
        figure.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
    counter--;
    figure.style.transition = "transform 0.5s ease-in-out";
    figure.style.transform = 'translateX(' + (-size * counter) + 'px)';
}

figure.addEventListener('transitionend', () => {
    if (projects[counter] === firstClone) {
        figure.style.transition = "none";
        counter = 1;
        figure.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }

    if (projects[counter] === lastClone) {
        figure.style.transition = "none";
        counter = projects.length - 2;
        figure.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
});

slider.addEventListener('mouseenter', () => {
    clearInterval(interval);
});

slider.addEventListener('mouseleave', startSlide);

function startSlide() {
    interval = setInterval(() => {
    nextSlide();
    }, 4000);
}

startSlide();
