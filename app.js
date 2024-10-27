// 2. Configure the JavaScript for Drawing Context

const canvas = document.getElementById('drawingCanvas');// Get canvas and 2D context
const ctx = canvas.getContext('2d');// Variables to track drawing 
let isDrawing = false;
let startX, startY;
function startDrawing(event) {// Function to start drawing
    isDrawing = true; // Set drawing state to true
    startX = event.offsetX; // starting X position
    startY = event.offsetY}; // starting Y position
