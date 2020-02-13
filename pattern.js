var read = require('readline-sync')
console.log("Enter the number of rows--> ");
var row = read.questionInt();
console.log("Enter middle number--> ")
var middle = read.questionInt();

var data = "";

for (var i = 0; i < row; i++) {
    for (var j = row; j >= i + 1; j--) {
        if (j == row) {
            data += j + "     "
        }
        else if (j == middle) {
            data += j + "     "
        }
        else if (j == 1) {
            data += j + "     "
        }
        else {
            data += "*" + "     ";
        }
    }
    console.log(data)
    data = "";
}