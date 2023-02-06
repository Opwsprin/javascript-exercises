const reverseString = function(string) {
    const stringArray = string.split('');
    let returnString = ''
    for (let i = stringArray.length-1; i>=0;i--){
        returnString +=stringArray[i];
    }
    return returnString;
};

// Do not edit below this line
module.exports = reverseString;
