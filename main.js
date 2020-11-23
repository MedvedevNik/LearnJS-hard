let lang = prompt('Введите одно из двух значений ("ru" или "en")', 'ru');

if ( lang === 'ru' ) {
  console.log('Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье');
} else if ( lang === 'en' ) {
  console.log('Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday');
} else {
  console.log('Неверное значение');
}

// через switch

switch (lang) {
  case 'ru':
    console.log('Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье');
    break;
  case 'en':
    console.log('Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday');
    break;
  default: 
    console.log('Неверное значение');
}

//многомерный массив

const langArray = {
    ru: ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
    en: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
};
console.log(langArray[lang]); 

//Задание 2

let namePerson = prompt('Введите ваше имя', 'Николай');

namePerson === 'Артем' ? console.log('Директор') : namePerson === 'Максим' ? console.log('Преподаватель') : console.log('Студент');
