const reverseString = function(str) {
var strr = "";
for (let i = str.length-1 ; i>=0 ; i--)
    strr+=str[i];
return strr;
};

// Do not edit below this line
module.exports = reverseString;
