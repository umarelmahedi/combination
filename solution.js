/********** solution  ************/
/* input ... user input*/
/* do    ... getIntegers(input) ... extract numbers from user input*/
/*       ... intToString(input) ... convert integer to string*/
/*       ... getAllPermutations(input) ... perform combination*/
/* return... combinations of integers from user input */
/*********************************/
function solution(input) {

    /********** getIntegers  ************/
    /* input ... user input*/
    /* do ... extract numbers from user input*/
    /* return ... numbers*/
    function getIntegers(input) {
        var intStr = input.replace(/[^0-9]/g, '');
        var final = parseInt(intStr);
        return final;
    }
    /*************************************/

    /********** intToString  ****************/
    /* input  ... ineteger in number format */
    /* do     ... convert integer to string */
    /* return ... string                    */
    function intToString(input_number) {
        result = input_number.toString();
        return result;
    }
    /****************************************/

    /********** getAllPermutations  ****************/
    /* input  ... number in string format          */
    /* do     ... get all permutations             */
    /* return ... list of permutations             */
    function getAllPermutations(input) {
        if (typeof (input) == "number") {
            console.log("Input is number and converted to string!!");
            input = intToString(input)
        }
        /****************************************/
        /* check input length  */
        var results = [];
        if (input.length === 1) {
            results.push(input);
            return results;
        }
        /****************************************/
        /* do  */
        for (var i = 0; i < input.length; i++) {
            var firstChar = input[i];
            var charsLeft = input.substring(0, i) + input.substring(i + 1);
            var innerPermutations = getAllPermutations(charsLeft);
            for (var j = 0; j < innerPermutations.length; j++) {
                results.push(firstChar + innerPermutations[j]);
            }
        }
        // return results.reverse();
        return results;

    }
    /*************************************/
    /* do check for integers in the input given */
    if (!/[^a-zA-Z]/.test(input)) {
        console.log("No integers have been detected!!");
    }
    else {
        var num = getIntegers(input);
        console.log("Integers Founded:" + " " + num);
        // console.log(typeof (num));
        const comb = getAllPermutations(num);
        console.log("Here is all the possible combination:" + " " + comb);
    }
    /*************************************/

}
/*************************************/

/* Usage example*/
// solution("236");
solution("A 3B2 C6D");
// solution("ABC");