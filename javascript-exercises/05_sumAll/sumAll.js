const sumAll = function(num1 , num2) {
var sum = 0 ;
if(num1 != (num1 +1)-1 || num2 != (num2 +1)-1|| num1 <0 || num2 <0)
    return "ERROR";
    let mn , mx ;
if(num1>num2) {
    mx = num1;
    mn = num2;
}
else
{
    mn=num1;
    mx=num2;
}
for (let i = mn ; i<= mx ; i++){
    sum += i;
}
return sum;
};

// Do not edit below this line
module.exports = sumAll;
