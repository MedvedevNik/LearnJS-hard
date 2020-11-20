let num = 266219,
    arrNum,
    result;
const reducer = (accumulator, currentValue) => accumulator * currentValue;


arrNum = num.toString().split('');
result = arrNum.reduce(reducer);
result **= 3;

alert(result.toString().substr(0,2));
