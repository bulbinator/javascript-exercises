const removeFromArray = function(arr, ...rest) {
    arr = arr.filter(ele => !rest.includes(ele))
    return arr
};

// Do not edit below this line
module.exports = removeFromArray;
