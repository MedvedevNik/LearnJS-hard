'use strict';

// const str = prompt('Введите предложение', '  Hi  '),
//       maxLength = 30;
// let string = str.trim();

// const stringCheck = function(string, callback) {
//   if (typeof string.charAt(0) === 'number') {
//     alert('Введенный аргумент не строка');
//   } else {
//     callback();
//   }
// }

// stringCheck(string, function(){
//   if (string.length < maxLength) {
//     console.log(string);
//   } else {
//     console.log(string.substr(0, maxLength) + '...');
//   }
// });


// попытка сделать через callback

const maxLength = 30;

const stringCheck = function(str) {
  if (typeof str === 'string') {
    const string = str.trim();
    if (string.length < maxLength) {
      return string;
    } else {
      return string.substr(0, maxLength) + '...'; 
    }
  }
  return 'Не является строкой';
}

console.log('stringCheck(   Привет ):' + stringCheck('   Привет '));
console.log(stringCheck('   Привет здесь ооочень много символов'));
console.log('stringCheck(100): ', stringCheck(100));