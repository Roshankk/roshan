



// Pattern 1
// 1
// 22
// 333
// 4444
// 55555



n = 5;
num = "";
// for external loop;
for (i = 1; i <= n; i++) {
    // for an internal loops
    for (j = 1; j <= i; j++) {
        num += i;
    }
    // "\n" usaaaaaaaed for ptint character in next line
    num += "\n";
}
console.log(num);





// Pattern 2
//    #
//   ##
//  ###
// ####
//#####


var n = 5;
space = "";
for (var i = 1; i <= n; i++) {
    for (j = 1; j <= n - i; j++) {
        space += " ";
    }
    for (k = 1; k <= i; k++) {
        space += "#"
    }
    space +="\n"
}
console.log(space); 