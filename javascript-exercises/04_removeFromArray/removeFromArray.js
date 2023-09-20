const removeFromArray = function(list , ...args)  {
    var arr = [];
            for (let j = 0 ; j < list.length ; j ++) {
                var f= 1 ;
                for (const arg of args)
                    if (arg === list[j]) {
                        f = 0;
                        break;
                    }
                if (f)
                    arr.push(list[j]);
            }

        return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
