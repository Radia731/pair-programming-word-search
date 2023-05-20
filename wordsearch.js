const wordSearch = (letters, word) => {
    const horizontalJoin = letters.map(ls => ls.join(''))
    const verticalTranspose = transpose(letters); /
    const verticalJoin = verticalTranspose.map(ls => ls.join(''))

  
    for (l of horizontalJoin) {
      

        if (word.length === verticalJoin.length) {
           
            if (l.includes(word)){
                // If found return true
                return true;
            } 
        }
    }
   
    for (l of verticalJoin) {
  

        if (word.length === horizontalJoin.length) {
 
            if (l.includes(word)){
                // If found return true
                return true;
            }  
        }
    }

  
    return false;
}

const transpose = function(matrix) {
    
    const vertical = matrix.length;
    const horizontal = matrix[0].length;
    const verticalArray = [];

    for (let h = 0; h < horizontal; h++) {
        verticalArray[h] = [];
        for (let v = 0; v < vertical; v++) {
           
            verticalArray[h][v] = matrix[v][h];
        }
    }
    return verticalArray;
}

module.exports = wordSearch

