// task one
const person = prompt('Пожалуйста, введите Ваше имя');
alert('Приветствую, ' + person + '!');


// task two
const num_one = 1000;
const num_two = 9;

if (num_one > num_two) {
    console.log(num_one + ' is bigger than ' + num_two);
} else if (num_one < num_two) {
    console.log(num_two + ' is bigger than ' + num_one);
} else {
    console.log('numbers are equal');
}

// task three
const age = 10;

if (age < 16 & age > 6) {
    console.log('Ты школьник!');
} else if (age > 16 & age <= 18) {
    console.log('Ты либо школьник, либо студент!');
} else if (age > 18) {
    console.log('Ты либо школьник, либо работаешь!');
} else {
    console.log('Ты ребенок!');
}
