// SOLUTIONS TO MAP ANALYZER LEVELS


// Global Variables that store row and column of tile that mouse is on

let row, column;
let tile = document.getElementById('currentTile');

// Solution Functions...
// Write your code here inside these functions

function level1Solution() {
    if (column <= 4) {
        tile.innerHTML = `sand`
    } else {
        tile.innerHTML = `water`
    }
}

function level2Solution() {
 if (column <=2) {
    tile.innerHTML = `hills`
 } else if (column <= 7) {
    tile.innerHTML = `sand`
 } else {
    tile.innerHTML = `water`
 }
}

function level3Solution() {
  if (column <=2 || column >= 8) {
    tile.innerHTML = `hills`
  } else {
    tile.innerHTML = `sand`
  }
}

function level4Solution() {
    if (row <= 2) {
        tile.innerHTML =`hills`
    } else {
        tile.innerHTML = `sand`
    }
}

function level5Solution() {
    if (row <= 2) {
        tile.innerHTML =`hills`
    } else if (row <= 5) {
        tile.innerHTML = `sand`
    } else {
        tile.innerHTML = `water`
    }
}

function level6Solution() {
    if (row >=2 && row <=5) {
        tile.innerHTML = `sand`
    } else {
        tile.innerHTML = `water`
    }
}

function level7Solution() {
    if (row == 4 && column == 7) {
        tile.innerHTML = `water`
    } else {
        tile.innerHTML = `sand`
    }
}

function level8Solution() {
    if (row == 5 || column == 2) {
        tile.innerHTML = `tree`
    } else {
        tile.innerHTML = `sand`
    }
}

function level9Solution() {
    if (row <= 5 && column <= 5) {
        tile.innerHTML = `water`
    } else {
        tile.innerHTML = `sand`
    }
}

function level10Solution() {
    if (column <= 1) {
        tile.innerHTML = `hills`
    } else if (column <= 3) {
        tile.innerHTML = `tree`
    } else if (column <= 7) {
        tile.innerHTML = `sand`
    } else {
        tile.innerHTML = `water`
    }
}

function level11Solution() {
    if (row <= 3 && column <= 5) {
        tile.innerHTML = `water`
    } else if (row <= 3) {
        tile.innerHTML = `hills`
    } else if (column >= 6) {
        tile.innerHTML = `tree`
    } else {
        tile.innerHTML = `sand`
    }
}

function level12Solution() {
    if ((row <= 4 && column <= 5)|| (row >= 5 && column >= 6)) {
        tile.innerHTML = `water`
    } else {
        tile.innerHTML = `sand`
    }
}

function level13Solution() {
    if (row <= 5 && row >= 2 && column <= 9 && column >= 4) {
        tile.innerHTML = `sand`
    } else {
        tile.innerHTML = `tree`
    }
}

function level14Solution() {
    if (row <= 5 && row >= 1 && column <= 4 && column >= 2) {
        tile.innerHTML = `tree`
    } else if (row <= 5 && row >= 3 && column <= 10 && column >= 7) {
        tile.innerHTML = `water`
    } else {
        tile.innerHTML = `sand`
    }
}
