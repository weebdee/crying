//task one 
let star = '*';
while (star.length <= 7) {
    console.log(star);
    star += '*';
}; 

//task two 
let index = 0;
while (index <= 100) {
    if (index % 2 === 0) {
        console.log(index);
    };
    index += 1; 
};

//task 3
const people = [
    {
      user: 'Adilet',
      salary: 23000,
    },
    {
      user: 'Syimyk',
      salary: 59000,
    }, 
    {  
      user: 'Meerim',
      salary: 38000,
    },
    {
      user: 'Nurdin',
      salary: 15000,
    },
];

let j = 0

while (people.length > j) {
    people[j].salary = people[j].salary + 1000;
    if (people[j].user === 'Nurdin') {
      people[j].salary = people[j].salary + 1000;
    }
    
    j = j + 1;
};

// task four

let i = 0

while (people.length > i) {
  if (people[i].salary <= 20000 ) {
  people[i].level = 'junior';
  } else if (people[i].salary <= 50000) {
  people[i].level = 'middle'; 
  } else {
  people[i].level = 'senior';
  };
  
  i++;
}

console.log(people)


