const grid = document.getElementById('grid');
const startBtn = document.getElementById('startBtn');
const statusDiv = document.getElementById('status');

let gridSize = 4; // Initial grid size (4x4)
let highlightedTiles = [];
let userSelections = [];
let currentRound = 1;

// Function to create the grid dynamically
function createGrid(size) {
    grid.innerHTML = ''; // Clear previous grid
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (let i = 0; i < size * size; i++) {
        const tile = document.createElement('div');
        tile.classList.add('tile');
        tile.dataset.index = i;
        tile.addEventListener('click', handleTileClick);
        grid.appendChild(tile);
    }
}

// Function to highlight random tiles
function highlightTiles(count) {
    highlightedTiles = [];
    const tiles = document.querySelectorAll('.tile');
    while (highlightedTiles.length < count) {
        const randomIndex = Math.floor(Math.random() * tiles.length);
        if (!highlightedTiles.includes(randomIndex)) {
            highlightedTiles.push(randomIndex);
        }
    }

    // Highlight tiles briefly
    highlightedTiles.forEach(index => {
        tiles[index].classList.add('highlight');
    });

    setTimeout(() => {
        tiles.forEach(tile => tile.classList.remove('highlight'));
    }, 1000);
}

// Function to handle tile clicks
function handleTileClick(event) {
    const index = parseInt(event.target.dataset.index);
    if (!userSelections.includes(index)) {
        userSelections.push(index);
        event.target.classList.add('highlight');
    }

    // Check if user has selected the correct tiles
    if (userSelections.length === highlightedTiles.length) {
        checkSelections();
    }
}

// Function to check user selections
function checkSelections() {
    const isCorrect = userSelections.every(index => highlightedTiles.includes(index));
    if (isCorrect) {
        statusDiv.textContent = `Correct! Moving to round ${++currentRound}`;
        gridSize++;
        startGame();
    } else {
        statusDiv.textContent = 'Game Over! You selected the wrong tiles.';
        startBtn.style.display = 'block';
    }
}

// Function to start the game
function startGame() {
    userSelections = [];
    createGrid(gridSize);
    setTimeout(() => highlightTiles(currentRound), 500);
    statusDiv.textContent = `Round ${currentRound}: Memorize the tiles!`;
    startBtn.style.display = 'none';
}

// Event listener for the start button
startBtn.addEventListener('click', startGame);
