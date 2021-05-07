'use strict';

let kdoJeNaTahu = 'circle';
let btnElements = document.querySelectorAll('.btn');
const iconElm = document.querySelector('.icon-left');

const hra = (event) => {
    if (kdoJeNaTahu === 'circle') {
    event.target.classList.add('board__field--circle');
    event.target.disabled = true;
    kdoJeNaTahu = 'cross';
    iconElm.src = 'images/cross.svg';
    } else if (kdoJeNaTahu === 'cross') {
    event.target.classList.add('board__field--cross');
    event.target.disabled = true;
    kdoJeNaTahu = 'circle';
    iconElm.src = 'images/circle.svg';
    } else {
    event.target.style.display ='none';
  } 

  const win = isWinningMove(event.target);
  if (win === true) {
    if (kdoJeNaTahu === 'cross') {
      confirm('Vyhrává kolečko. Spustit novou hru?');
			location.reload();
    } else {
      confirm('Vyhrává křížek. Spustit novou hru?');
			location.reload();
    }
  }

  // console.log(getSymbol(btnElements[1]));
  // console.log(getPosition(btnElements[2]));
}

for (let i = 0; i < btnElements.length; i++) {
  // const btnElm = btnElements[i];
  btnElements[i].addEventListener('click', hra);
}

const getSymbol = (field) => {
	
	if (field.classList.contains('board__field--cross')) {
		return 'cross'
	} else if (field.classList.contains('board__field--circle')) {
		return 'circle'
	}
}

const boardSize = 10 

const getField = (row, column) => {
  return btnElements[row * boardSize + column];
}

console.log(getField(0,1));

const getPosition = (field) => {
	let fieldIndex = 0
	while (fieldIndex < btnElements.length && field !== btnElements[fieldIndex]) {
		fieldIndex++
	}

	return {
		row: Math.floor(fieldIndex / boardSize),
		column: fieldIndex % boardSize,
	}
}


const symbolsToWin = 5
const isWinningMove = (field) => {
	const origin = getPosition(field)
	const symbol = getSymbol(field)

	let i

	let inRow = 1 
	i = origin.column 
	while (i > 0 && symbol === getSymbol(getField(origin.row, i - 1))) {
		inRow++
		i--
	}

	i = origin.column
	while (
		i < boardSize - 1 &&
		symbol === getSymbol(getField(origin.row, i + 1))
	) {
		inRow++
		i++
	}

	if (inRow >= symbolsToWin) {
		return true
	}

	let inColumn = 1

	i = origin.row
	while (i > 0 && symbol === getSymbol(getField(i - 1, origin.column))) {
		inColumn++
		i--
	}

	
	i = origin.row
	while (
		i < boardSize - 1 &&
		symbol === getSymbol(getField(i + 1, origin.column))
	) {
		inColumn++
		i++
	}

	if (inColumn >= symbolsToWin) {
		return true
	}

	return false
}