const canalWii = document.querySelectorAll(".canal-Wii");
const hoverSound = new Audio('../media/sonido_hover.wav');

canalWii.forEach(canal => {
    canal.addEventListener('mouseenter', ()=> {
        hoverSound.currentTime = 0; 
        hoverSound.play();
    });
});