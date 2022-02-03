/*
    1
    21
    321
    4321
    54321
*/
n = 5;
var space = "";
for (var i = 1; i <= n; i++) {
    for (var j = i; j >= 1; j--) {
        space += j;
    }
    space += "\n"

} console.log(space);










// Assignment 3
/*
    54321
    5432
    543
    54
    5
*/

n = 5;
num = "";
for (var i = 1; i <= 5; i++) {
    for (var j = 5; j >= i; j--) {
        num += j;
    }
    num += '\n'
}
console.log(num);