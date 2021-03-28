const utils = require('./utils');
const response = utils.serviceResponse;

const memory = {};

function generateToVerify() {
  let type = utils.getType();
  let index = utils.getIndex(0, 9);
  if(index >= 9){
    index  = 8;
  }
  return { type, index };
}

function getPlace(type, coordinate, index) {
  let nextPlace = null;
  if(type === 'col'){
    nextPlace =  index * 9 + coordinate ;
  } else if( type === 'row'){
    nextPlace =  coordinate * 9 + index;
  } else if(type === 'grid'){
    let secIndex = index % 3;

    if (index >= 3 && index <= 5){
      secIndex += 9;
    } else if(index >= 6 && index <= 8){
      secIndex += 18
    };

    if (coordinate >= 0 && coordinate <= 2){
      nextPlace = coordinate * 3 + secIndex;
    } else if(coordinate >= 3 && coordinate <= 5){
      nextPlace = coordinate * 3 + 18 + secIndex;
    } else if(coordinate >= 6 && coordinate <= 8){
      nextPlace =coordinate * 3 + 36 + secIndex;
    }
  }
  return nextPlace

}

function addToBoard(board, array, type, coordinate) {
  let  length = array.length;
  for (let i = 0; i < length; ++i) {
      let nextPlace = getPlace(type, coordinate, i);
      board[nextPlace] = array[i];
  }
  return board;
}

function validateArray(array) {
  console.log((new Set(array)).size, array.length)
  return (new Set(array)).size === array.length;
}


exports.start = (data) => {
  memory['board'] = utils.getEmptyBoard()
  memory['trust'] = 0
  let { type, index } = generateToVerify();
  let resp = {
    ...memory,
    type ,
    index,
    toEnd: false,
  };
  return response(200, resp);
};  

module.exports.nextRound = (data) => {
  let { array, type, index } = data;
  let mem = memory;

  addToBoard(mem.board, array, type, index);
  let isValid = validateArray(array);
  console.log(isValid)
  if(!isValid){
    return response(400, 'Failed. Wrong solution.');
  }
  mem.trust += 1 / 27;
  if (mem.trust > 1) mem.trust = 1;
  let isTrustful = false;
  if (mem.trust > 0.9) {
      isTrustful = true;
  }
  let toVerify = generateToVerify();
  let res = {
      ...memory,
      type:  toVerify.type,
      index: toVerify.index,
      toEnd :isTrustful,
  };
  return response(200, res);
}