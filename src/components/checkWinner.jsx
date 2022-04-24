export function checkWinner(squares) {
  const possibleWinningChk = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 1; i < possibleWinningChk.length; i++) {
    const [a, b, c] = possibleWinningChk[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return true;
    }
  }
  console.log("Not Yet ");
  return false;
}
