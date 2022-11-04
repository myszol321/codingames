/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const w = parseInt(readline());
const h = parseInt(readline());

var area = new Array();
var coordinates = new Array();

//filling 2D array
for (let i = 0; i < h; i++) {
    const line = readline();
    area[i] = new Array(0);
    for (let j = 0; j < w; j++) {
        area[i][j] = line[j];
    }
    console.error(line);
    
}

//searching for mines
for (let i = 0; i < h; i++) {
    for (let j = 0; j < w; j++) {
        if(area[i][j] === "x") {
            coordinates.push([i, j])
        }
    }
    console.error(coordinates);
}

//defusing bombs
for (let i = 0; i < coordinates.length; i++) {
    const x = coordinates[i][0];
    const y = coordinates[i][1];
    console.error(x + ' ' + y);
    area[x][y] = '.';
    area[x][y-1] = '1';
    area[x][y+1] = '1';
    area[x-1][y] = '1';
    area[x+1][y] = '1';

    area[x+1][y+1] = '1';
    area[x+1][y-1] = '1';
    area[x-1][y+1] = '1';
    area[x-1][y-1] = '1';
}

//displaying
for (let i = 0; i < h; i++) {
    var text = '';
    for (let j = 0; j < w; j++) {
        text += area[i][j];
    }
    console.log(text);
}
// Write an answer using console.log()
// To debug: console.error('Debug messages...');
