module.exports.serviceResponse = (status, data) => ({ status, data });


module.exports.getType = () => {
    let types = ['row', 'col', 'grid'];
    let randIndex = 0 + Math.floor((Math.random() * 3));
    return types[randIndex];
}

module.exports.getIndex = (min, max) => {
    return min + Math.floor((Math.random() * max));
}

module.exports.getEmptyBoard = () => {
    let sudoku = [
        0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0,
    ];
    return sudoku;
}

// function getPlace(type, coordinate, index) {
//   switch (type) {
//       case 'row': return coordinate * 9 + index;
//       case 'col': return coordinate + index * 9;
//       case 'grid':
//           let secIndex = index % 3;
//           if (index >= 3 && index <= 5) secIndex += 9;
//           else if (index >= 6 && index <= 8) secIndex += 18;
//           if (coordinate >= 0 && coordinate <= 2)
//               return coordinate * 3 + secIndex;
//           else if (coordinate >= 3 && coordinate <= 5)
//               return coordinate * 3 + 18 + secIndex;
//           else if (coordinate >= 6 && coordinate <= 8)
//               return coordinate * 3 + 36 + secIndex;
//   }
// }