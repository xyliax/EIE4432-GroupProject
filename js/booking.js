const seatMapSvg = document.getElementById('seat-map-svg');
// Create seats
const rows = 8;
const cols = 15;
const seatSize = 40;
const seatGap = 5;
const offsetX = (800 - cols * (seatSize + seatGap) + seatGap) / 2;
const offsetY = (400 - rows * (seatSize + seatGap) + seatGap) / 2;
for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
        const seat = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
        seat.setAttribute('x', offsetX + j * (seatSize + seatGap));
        seat.setAttribute('y', offsetY + i * (seatSize + seatGap));
        seat.setAttribute('width', seatSize);
        seat.setAttribute('height', seatSize);
        seat.setAttribute('fill', 'green');
        seat.setAttribute('class', 'seat');
        seatMapSvg.appendChild(seat);
    }
}

// Get all seats
const seats = document.querySelectorAll('.seat');
// Seat click event
seats.forEach(seat => {
    seat.addEventListener('click', () => {
        // Check if the seat is available
        if (seat.getAttribute('fill') === 'green') {
            // Select seat
            seat.setAttribute('fill', 'blue');
            updatePrice(100);
        } else if (seat.getAttribute('fill') === 'blue') {
            // Deselect seat
            seat.setAttribute('fill', 'green');
            updatePrice(-100);
        }
    });
});

function updatePrice(change) {
    const priceText = document.getElementById('price-text');
    let currentPrice = parseInt(priceText.textContent);

    if (isNaN(currentPrice)) {
        currentPrice = 0;
    }

    const newPrice = currentPrice + change;
    priceText.textContent = newPrice;
}
