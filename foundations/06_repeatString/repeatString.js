const repeatString = function(str,a) {
    sum ="";
    if (a<0){
        return "ERROR"
    }
    for (let i=0; i<a; i++){
        sum+=str;
    }
    return sum;
};

// Do not edit below this line
module.exports = repeatString;
