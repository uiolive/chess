const board = document.getElementById('chessboard');

const chessPieces = [
    '车', '马', '象', '士', '将', '士', '象', '马', '车',
    '兵', '兵', '兵', '兵', '兵', '', '', '',
    '', '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', '',
    '兵', '兵', '兵', '兵', '兵', '', '', '',
    '车', '马', '象', '士', '将', '士', '象', '马', '车'
];

function createBoard() {
    for (let i = 0; i < 64; i++) {
        const square = document.createElement('div');
        square.innerText = chessPieces[i] || '';
        if (Math.floor(i / 8) % 2 === 0) {
            square.classList.add(i % 2 === 0 ? 'black' : '');
        } else {
            square.classList.add(i % 2 === 0 ? '' : 'black');
        }
        board.appendChild(square);
    }
}

createBoard();
