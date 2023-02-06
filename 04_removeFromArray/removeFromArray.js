const removeFromArray = function(array, ...items) {
    for (item of items){
        for (i=0;i<array.length;i++){
            if (array[i]===item){
                array.splice(i,1);
            }
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
