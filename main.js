'use strict';
// Предыдущее исправление урока №4 (теперь можно проверить на )
const maxLength = 30;

const stringCheck = function(str) {
  if (isNaN(+str)) {
    const string = str.trim();
    if (string.length < maxLength) {
      return string;
    } else {
      return string.substr(0, maxLength) + '...'; 
    }
  }
  return 'Не является строкой';
};

console.log('stringCheck(   Привет ):' + stringCheck('   Привет '));
console.log(stringCheck('   Привет здесь ооочень много символов'));
console.log('stringCheck(100): ', stringCheck('293476'));


// задание №5 

let arr = [];

for (let i = 0; i < 7; i++) {
  arr[i] = String(Math.floor(Math.random() * (1000 - 1)) + 1);
}

for (let i = 0; i < arr.length; i++) {
  if (arr[i].startsWith('2') || arr[i].startsWith('4')) {
      console.log(arr[i]);
  }
}

console.log(arr);

// ничего лучше не придумал и не нашел...
nextPrime:
for (let i = 2; i <= 100; i++) { 

  for (let j = 2; j < i; j++) { 
    if (i % j == 0) {
      continue nextPrime;
    } 
  }

  console.log(i + ': Делитель этого числа: 1 и', i) ;
}
