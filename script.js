document.addEventListener('DOMContentLoaded', () => {
    const cells = document.querySelectorAll('.cell');
    const statusDiv = document.querySelector('.status');
    const resetButton = document.getElementById('resetButton');
    let currentPlayer = 'x';

    cells.forEach(cell => {
        cell.addEventListener('click', () => {
            if (cell.textContent === '' && statusDiv.textContent === '') {
                cell.textContent = currentPlayer;
                cell.classList.add(currentPlayer);
                if (checkWin(currentPlayer)) {
                    statusDiv.textContent = currentPlayer.toUpperCase() + ' wins!';
                } else if (Array.from(cells).every(cell => cell.textContent !== '')) {
                    statusDiv.textContent = 'Draw!';
                } else {
                    currentPlayer = currentPlayer === 'x' ? 'o' : 'x';
                }
            }
        });
    });

    resetButton.addEventListener('click', resetBoard);

    function checkWin(player) {
        const winPatterns = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];

        return winPatterns.some(pattern => {
            return pattern.every(index => {
                return cells[index].classList.contains(player);
            });
        });
    }

    function resetBoard() {
        cells.forEach(cell => {
            cell.textContent = '';
            cell.classList.remove('x', 'o');
        });
        currentPlayer = 'x';
        statusDiv.textContent = '';
    }
});
