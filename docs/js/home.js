document.addEventListener('DOMContentLoaded', (event) => {
    const windowContainer = document.querySelector('.window-container');
    const windowHeader = document.querySelector('.window-header');

    let isDragging = false;
    let offsetX, offsetY;

    windowHeader.addEventListener('mousedown', (e) => {
        isDragging = true;
        // Calculate the offsets
        offsetX = e.clientX - windowContainer.offsetLeft;
        offsetY = e.clientY - windowContainer.offsetTop;
        // Change cursor style
    });

    document.addEventListener('mousemove', (e) => {
        if (isDragging) {
            // Calculate the new position
            const posX = e.clientX - offsetX;
            const posY = e.clientY - offsetY;
            // Update the position of the window container
            windowContainer.style.left = `${posX}px`;
            windowContainer.style.top = `${posY}px`;
        }
    });

    document.addEventListener('mouseup', () => {
        isDragging = false;
    });
});
