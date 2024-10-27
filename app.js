// 2. Configure the JavaScript for Drawing Context

const canvas = document.getElementById('drawingCanvas');// Get canvas and 2D context
const ctx = canvas.getContext('2d');// Variables to track drawing 
let isDrawing = false;
let startX, startY;
function startDrawing(event) {// Function to start drawing
    isDrawing = true; // Set drawing state to true
    startX = event.offsetX; // starting X position
    startY = event.offsetY}; // starting Y position

// 3. Implement Shape Drawing Logic

function draw(event) {//draw shapes based on tool
    if (!isDrawing) return; // Exit if not drawing
    ctx.clearRect(0, 0, canvas.width, canvas.height);// Clear previous shape
    const shape = document.querySelector('input[name="shape"]:checked').value; // Get selected shape
    const color = document.getElementById('colorPicker').value; // Get selected color
    ctx.fillStyle = color; // Set fill color
    ctx.strokeStyle = color; // Set stroke color
    const currentX = event.offsetX; // Get current X position
    const currentY = event.offsetY; // Get current Y position
    ctx.beginPath(); // Start new shape
    if (shape === 'line') {
        ctx.moveTo(startX, startY); // Move to starting position
        ctx.lineTo(currentX, currentY); // Draw line to current position
    } else if (shape === 'rectangle') {
        const width = currentX - startX; // Calculate width
        const height = currentY - startY; // Calculate height
        ctx.rect(startX, startY, width, height); // Draw rectangle
    } else if (shape === 'circle') {
        const radius = Math.sqrt((currentX - startX) * (currentX - startX) + (currentY - startY) * (currentY - startY)); // Calculate radius
        ctx.arc(startX, startY, radius, 0, Math.PI * 2)}; // Draw circle
    ctx.stroke()}; // Outline the shape
function stopDrawing() {// Function to stop 
    isDrawing = false; // Set drawing to false
    ctx.closePath()}; // Close  current path
// Add event listeners for mouse events
canvas.addEventListener('mousedown', startDrawing); // Start drawing on mouse down
canvas.addEventListener('mousemove', draw); // Draw on mouse move
canvas.addEventListener('mouseup', stopDrawing); // Stop drawing on mouse up