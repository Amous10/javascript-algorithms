
function transpose(A) {
    // create a matrix of a fixed length
    var x, x_length = A.length
        , y, y_length = A[0].length
        , arr = []


    for (var x = 0; x < x_length; x++) {
        for (var y = 0; y < y_length; y++) {

            if (!arr[y]) arr[y] = [];
            arr[y][x] = A[x][y];
        }
    }

    return arr;
}

module.exports = transpose;
