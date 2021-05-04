// const greet = name => console.log(`hello ${name}`);


// greet("nayana");
// greet('batman');
// greet('superman');
// greet('spiderman');


import {styleBody,addTitle, contact} from './dom';
import users,{getPremUsers} from './data';

console.log('index file');
addTitle('test from index');
console.log(contact);


styleBody();


console.log(users);
console.log(getPremUsers(users));
console.log("test");