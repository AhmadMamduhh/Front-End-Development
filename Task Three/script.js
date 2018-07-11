//------------------------function takes three parameters in the normal scenario and sums them and returns their sum---------------
function sumFunction(a, b, c) {
    //normal scenario
    if (b && c) {
        return a + b + c;
    }
    //if the user sends only two parameters to the main function
    else if (b && !c) {
        return function (x) {
            return a + b + x;
        }
    }
    //if the user sends only one parameter to the main function
    else {
        return function (x, y) {
            //First case: user sends two parameters to the callback function
            if (y) {
                return a + x + y;
            }
            //Second case: user sends one parameter to the callback function and then sends another parameter to another callback function
            else {
                return function (z) {
                    return a + x + z;
                }
            }
        }
    }

}


//----------------Test Cases for each condition of sumFunction-------------------------
console.log(sumFunction(1, 2, 3));
console.log(sumFunction(1, 2)(3));
console.log(sumFunction(1)(2, 3));
console.log(sumFunction(1)(2)(3));