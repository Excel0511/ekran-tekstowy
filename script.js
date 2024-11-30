const fileInput = document.getElementById('fileInput');
const textDisplay = document.getElementById('textDisplay');

let lines = [];
let currentIndex = 0;
const MAX_VISIBLE_LINES = 8;

fileInput.addEventListener('change', (event) => {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            lines = e.target.result.split('\n');
            console.log(lines)
            currentIndex = 0;
            displayLines();
            fileInput.classList.add('hidden');  // Ukrycie przycisku po wyborze pliku
        };
        reader.readAsText(file);
    }
});

function displayLines() {
    textDisplay.innerHTML = '';
    for (let i = 0; i < MAX_VISIBLE_LINES; i++) {
        const line = document.createElement('div');
        line.innerText = lines[currentIndex + i] || '';
        textDisplay.appendChild(line);
    }
}

// Wykrywanie naciśnięć klawiszy
window.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowUp') {
        console.log(e.key);
        currentIndex = Math.max(0, currentIndex - 1);
    } else if (e.key === 'ArrowDown') {
        console.log(e.key);
        currentIndex = Math.min(lines.length - MAX_VISIBLE_LINES, currentIndex + 1);
    } else if (e.key === 'ArrowRight') {
        console.log(e.key);
        currentIndex = Math.min(lines.length - MAX_VISIBLE_LINES, currentIndex + 8);
    } else if (e.key === 'ArrowLeft') {
        console.log(e.key);
        currentIndex = Math.max(0, currentIndex - 8);
    } else if (e.key === 'Escape') {
        console.log(e.key);
        location.reload();
    }
    displayLines();
});

// Wykrywanie dotknięć ekranu
document.addEventListener('click', function(event) {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
  
    const clickX = event.clientX;
    const clickY = event.clientY;
    
    console.log("Click: " + clickX + " " + clickY + " " + screenHeight + " " + screenWidth);
  
    if (clickY > screenHeight * 0.8) { // Dolna część ekranu
        currentIndex = Math.min(lines.length - MAX_VISIBLE_LINES, currentIndex + 1);
    } else if (clickY < screenHeight * 0.2) { // Górna część ekranu
        currentIndex = Math.max(0, currentIndex - 1);
    } else if (clickX < screenWidth * 0.2) { // Lewa część ekranu
        currentIndex = Math.max(0, currentIndex - 8);
    } else if (clickX > screenWidth * 0.8) { // Prawa część ekranu
        currentIndex = Math.min(lines.length - MAX_VISIBLE_LINES, currentIndex + 8);
    }
    displayLines();
});
