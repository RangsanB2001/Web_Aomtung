document.onmousemove = (event) => {
    let circle = document.createElement('div');
    circle.classList.add('circle');
    document.body.appendChild(circle);

    circle.style.left = event.clientX + 'px';
    circle.style.top = event.clientY + 'px';

    setTimeout(() => {
        document.body.removeChild(circle);
    }, 1500);
};