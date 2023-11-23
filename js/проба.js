// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// const x1 = 10;
// const x2 = 30;
// const number = 50;
// console.log(`Число ${number} попадає у відрізок до ${x1}?`, number < x1);
// console.log(`Число ${number} попадає у відрізок після ${x2}?`, number > x2);
// const res1 = number > x1 && number < x2;
// console.log(`Число ${number} попадає у відрізок від ${x1}до ${x2}?`,res1);
// const res2 = number > x1 || number < x2;
// console.log(`Число ${number} попадає у відрізок до ${x1} або після ${x2}?`,res2);

// =======================================================================================
// Change code below this line
// const pricePerDroid=800;
// const orderedQuantity=6;
// const deliveryFee=50;
// const totalPrice=`${pricePerDroid*orderedQuantity+deliveryFee}`;
// const message=`You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`;


// console.log(message);




// let power = prompt(`Дай ступінь`);
// power = Number(power);
// console.log(power);




// let a = ["5"];
// // Оскільки a - це масив, в b записується посилання на вже існуючий
// // масив в пам'яті. Тепер a і b вказують на той самий масив.
// const b = a;
// a = [10];
// console.log(a); // ["Mango"]
// console.log(b); // ["Mango"]

// // Змінимо масив, додавши ще один елемент, використовуючи вказівник з a
// a.push("Poly");
// console.log(a); // ["Mango", "Poly"]

// // b також змінилось, тому що b, як і a,
// // просто містить посилання на те ж саме місце в пам'яті
// console.log(b); // ["Mango", "Poly"]

// // Результат повторюється
// b.push("Ajax");
// console.log(a); // ["Mango", "Poly", "Ajax"]
// console.log(b); // ["Mango", "Poly", "Ajax"]




// Генерує кольори сторінки
// const colors = ['tomato', 'red', 'blue','green'];
// const max = colors.length - 1;
// const min = 0;
// const index = Math.round( Math.random() * (max - min)+min);
// const color = colors[index];
// console.log(color);
// document.body.style.backgroundColor = color;
// ///////////////////////////////////////

// let cost;
// const subscription = 'premium';
// if (subscription === 'free') {
//     cost = 0;
// }
// else if (subscription === 'pro') {
//     cost = 100;
// }
// else if (subscription === 'premiu__') {
//     cost = 500;
// } else {
//     console.log('invalid');
// }
// console.log(cost);
// /////////////////////////////////////

// let clientCounter = 18;
// const maxClients = 25;
// while (clientCounter < maxClients) {
//     console.log (clientCounter);
//     clientCounter += 1;
    
// }

// /////////Обробка кіпівлі в магазині///////////
// let balance = 10000;
// const payment = 2000;
// console.log(`Загальна вартість замовлення ${payment} ,грн`);
// if (payment <= balance) {
//     console.log(`Операція дозволена!`)
//     balance -= payment;
//     console.log(`Залишок на рахунку ${balance},грн`)
// }
// else {
//     console.log(`На рахунку не достатньо коштів`)
// }
// console.log(`Операція завершена`)

// /////////////////////////////////////////
// function makeMessage (name, price) {

//    const message = "You picked <product name>, price per item is <product price> credits";

//   return message;
// };
// console.log(makeMessage('Radar', 6150));
// console.log(makeMessage('Scanner', 3500));
// console.log(makeMessage('Reactor', 8000));
// console.log(makeMessage('Engine', 4070));
// ///////////////////////////////
// ////// Приклад зони видимості//////////
// let a = 10;
// if (true) {
//     let a = 5;
//     console.log('це локальна', a);
// }
// console.log('це глобальна', a)
//     /////////////////////////////
// const numbers = [1, 2, 3, 4, 5, 6, 7];
// let total = 0;
// for (const number of numbers) {
//     let total = 0;
//     total += number;
//     console.log(total);
// }
// console.log(total);
// ////////////////////////////////////////////////////////////
// ///Приклад, добавляє назву якої нема в списку, якшо є -то пише шо вже є//////////
// const courses = ['html', 'css', 'java', 'react', 'node'];
// function addCourse(name) {
//   if (!courses.includes(name)) {
//     courses.push(name)
//   } else {
//     console.log('Ви вже маєте данний курс');
//       }
// }
// addCourse('express');
// console.log(courses);//['html', 'css', 'java', 'react', 'node']
// addCourse('css');// Ви вже маєте данний курс
// ///////////////////////////////////////////
// ////////те саме з return|||||||||
// const courses = ['html', 'css', 'java', 'react', 'node'];
// function addCourse(name) {
//   if (!courses.includes(name)) {
//     courses.push(name)
//     return;
//   }
//       return ('Ви вже маєте данний курс');
//       }

// const res=addCourse('express');
// console.log(courses);//['html', 'css', 'java', 'react', 'node''express']
// const result = addCourse('css');// Ви вже маєте данний курс
// console.log('result', result);

// ///////////////////////////// ///////////
// function makeMessage (name, price) {
//   // Change code below this line
//  const message = `You picked ${ name}, price per item is ${price} credits`;
  
//   // Change code above this line
//   return message;
// };
// console.log(makeMessage('Radar', 6150));
// console.log(makeMessage('Scanner', 3500));
// console.log(makeMessage('Reactor', 8000));
// console.log(makeMessage('Engine', 4070));
// /////////////////////////////////

// function calculateTotalPrice (orderedQuantity, pricePerItem) {
//   // Change code below this line
//   const totalPrice = orderedQuantity*pricePerItem;

//   // Change code above this line
//   return totalPrice;
// };
// console.log(calculateTotalPrice(5, 100));
// console.log(calculateTotalPrice(8, 60));
// console.log(calculateTotalPrice(3, 400));
// console.log(calculateTotalPrice(1, 3500));
// console.log(calculateTotalPrice(12, 70));
// ////////////////////////////////



// const productName='Droid';
// const pricePerItem=2000;

// let productName = "Droid";
// let pricePerItem = 2000;
// // Change code below this line
//  productName = "Repair droid";
//  pricePerItem = 3500;

// const pricePerItem = 3500;
// const orderedQuantity = 4;
// // Change code below this line
// const totalPrice = pricePerItem*orderedQuantity;
// console.log(totalPrice) ;

// const productName = "Droid";
// const pricePerItem = 3500;
// // Change code below this line
// const message = `You picked ${productName}, price per item is ${pricePerItem} credits`;
// console.log(message);

// // Change code below this line
// const pricePerDroid=800;
// const orderedQuantity=6;
// const deliveryFee=50;
// const totalPrice=pricePerDroid * orderedQuantity +deliveryFee;
// const message=`You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`;
// console.log(message);

// // Change code below this line
// function sayHi() {
//   console.log("Hello, this is my first function!");
// }
// sayHi();


// function add(a, b, c) {
//   console.log(`Addition result equals ${a+b+c}`);
//   // Change code above this line
// }
// add(15, 27, 10);
// add(10, 20, 30);
// add(5, 10, 15);

// function add(a, b, c) {
// return a+b+c
// }
// add(2, 5, 8); // 15
// console.log(add(15, 27, 10));
// console.log(add(10, 20, 30));
// console.log(add(5, 10, 15));

// function makeMessage (name, price) {
//   // Change code below this line
//  const message = `You picked ${ name}, price per item is ${price} credits`;
  
//   // Change code above this line
//   return message;
// };
// console.log(makeMessage('Radar', 6150));
// console.log(makeMessage('Scanner', 3500));
// console.log(makeMessage('Reactor', 8000));
// console.log(makeMessage('Engine', 4070));


// function calculateTotalPrice (orderedQuantity, pricePerItem) {
//   const totalPrice = orderedQuantity*pricePerItem;
//   return totalPrice;
// };
// console.log(calculateTotalPrice(5, 100));
// console.log(calculateTotalPrice(8, 60));
// console.log(calculateTotalPrice(3, 400));
// console.log(calculateTotalPrice(1, 3500));
// console.log(calculateTotalPrice(12, 70));

// function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
// const message= `You ordered droids worth ${orderedQuantity*pricePerDroid+deliveryFee} credits. Delivery (${deliveryFee} credits) is included in total price.`
//   return message;
// }
// console.log(makeOrderMessage(2, 100, 50));
// console.log(makeOrderMessage(4, 300, 100));
// console.log(makeOrderMessage(10, 70, 200));

// function isAdult(age) {
//   const passed = age >= 18;
//   return passed;
// }
// console.log(isAdult(20));
// console.log(isAdult(14));
// console.log(isAdult(8));
// console.log(isAdult(37));

// function isValidPassword(password) {
//   const SAVED_PASSWORD = 'jqueryismyjam';
//   const isMatch = password===SAVED_PASSWORD;
//   return isMatch;
// }
// console.log(isValidPassword("mangodab3st"));
// console.log(isValidPassword("kiwirul3z"));
// console.log(isValidPassword("jqueryismyjam"));

// function checkAge(age) {
//   let message;
//   if (age>=18) { // Change this line
//     message = 'You are an adult';
//   } else {
//     message = 'You are a minor';
//   }
//   return message;
// }
// console.log(checkAge(20));
// console.log(checkAge(8));
// console.log(checkAge(14));
// console.log(checkAge(38));

// function checkStorage(available, ordered) {
//   let message;
//   if (available<=ordered) {
//     message="Not enough goods in stock!"
//   }else{
//     message="Order is processed, our manager will contact you."
//   }
//   return message;
// }
// console.log(checkStorage(100, 50));
// console.log(checkStorage(100, 130));
// console.log(checkStorage(200, 20));
// console.log(checkStorage(200, 150));
// console.log(checkStorage(150, 180));


// function checkStorage(available, ordered) {

  
//   if (ordered === 0) {
//     console.log( "Your order is empty!");
//     return;
//   } if (ordered > available) {
//    console.log( "Your order is too large, not enough goods in stock!");
//     return;
//   }
//    console.log( "The order is accepted, our manager will contact you");

// }
// checkStorage(100, 50);
// checkStorage(100, 130);
// checkStorage(70, 0);
// checkStorage(200, 20);
// checkStorage(200, 250);
// checkStorage(150, 0);

// function getShippingCost(country) {
//   let message;

// switch (country) {
//   case China:
   
//     message=`Shipping to China will cost 100 кредитів credits`;
//     break;

//   case Chile:
//     message=`Shipping to ${country }will cost ${price} credits`;
//     break;
//   case Australia:
//      message=`Shipping to ${country }will cost ${price} credits`;
//     break;
//   case Jamaica:
//      message=`Shipping to ${country }will cost ${price} credits`;
//     break;
// }
//   // Change code above this line
//   return message;
// }
// console.log(getShippingCost("Australia"));
// console.log(getShippingCost("Germany"));
// console.log(getShippingCost("China"));
// console.log(getShippingCost("Chile"));
// console.log(getShippingCost("Jamaica"));
// console.log(getShippingCost("Sweden"));

// ///////
// const courseTopic = "JavaScript essentials";
// // Change code below this line

// const courseTopicLength = courseTopic.length;
// const firstElement = courseTopic[0];
// const lastElement = courseTopic[20];

// // Change code above this line
// console.log(courseTopicLength);
// console.log(firstElement);
// console.log(lastElement);
// /////////////////////////////////////////////
// function calculateEngravingPrice(message, pricePerWord) {
//    // Change code below this line
//     let calculate;
//     let spl;
//     spl = message.split(" ");
// calculate=spl.length*pricePerWord
// return calculate;
//    // Change code above this line
// }
// calculateEngravingPrice("JavaScript is in my blood", 10);
// calculateEngravingPrice("JavaScript is in my blood", 20);
// calculateEngravingPrice("Web-development is creative work", 40);
// calculateEngravingPrice("Web-development is creative work", 20);
// /////////////////////////////
// function makeStringFromArray(array, delimiter) {
//   let string;
//   // Change code below this line

// string=array.join(delimiter);

//   // Change code above this line
//   return string;
// }
// makeStringFromArray(["Mango", "hurries", "to", "the", "train"], " ");
// makeStringFromArray(["M", "a", "n", "g", "o"], "");
// makeStringFromArray(["top", "picks", "for", "you"], "_")
// ////////////////
// function slugify(title) {
//   // Change code below this line
// let slug
//     let registr
//     let spl
//     registr = title.toLowerCase();
//     spl=registr.split(' ')
//  slug=spl.join('-');
// return slug;
//   // Change code above this line
// }
// slugify("Arrays for begginers");
// slugify("English for developer");
// slugify("Ten secrets of JavaScript");
// slugify("How to become a JUNIOR developer in TWO WEEKS");
// /////////////////////
// function getSubstring(string, length) {
//   const substring = string.slice(0, length); // Change this line

//   return substring;
// }
// getSubstring("Hello world", 3);
// getSubstring("Hello world", 6);
// getSubstring("Hello world", 8);
// getSubstring("Hello world", 11);
// getSubstring("Hello world", 0);
// /////////
// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];


// const firstTwoEls =fruits.slice(0, 2);
// const nonExtremeEls =fruits.slice(1,4);
// const lastThreeEls = fruits.slice(2);
// /////////
// function makeArray(firstArray, secondArray, maxLength) {
//     // Change code below this line
//     let sum
//    sum=firstArray.concat(secondArray);

// if(sum.length>maxLength){
//   return sum.slice(0,maxLength);
 
// }else{
//  return sum.slice();
// }
//     // Change code above this line
//   }
// makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3);
// makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4);
// makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3);
// makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2);
// makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4);
// makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0);
// makeArray();
// //////////
// function formatMessage(message, maxLength) {
//   let result;
//   let spl;
//   let splDel;
//  let addition;
//   // Change code below this line
// spl=message.split("");
  
// if (spl.length > maxLength) {
// splDel=spl.splice(maxLength);
//  addition= spl.splice(maxLength, 0, "...");
  
//  result= spl.join("");
// } else {
//   result=message
// }
//   /// Change code above this line
//   return result;
// }
// formatMessage("Curabitur ligula sapien", 16);
// formatMessage("Curabitur ligula sapien", 23);
// formatMessage("Vestibulum facilisis purus nec", 20);
// formatMessage("Vestibulum facilisis purus nec", 30);
// formatMessage("Nunc sed turpis a felis in nunc fringilla", 15);
// formatMessage("Nunc sed turpis a felis in nunc fringilla", 41);
// /////////////
// function checkForSpam(message) {
//   let result;

//   // Change code below this line
//  const normalize= message.toLowerCase()
//   const spl=normalize.split(" ");
// const hasresult=spl.includes("sale")||spl.includes("spam")||spl.includes("sale,")||spl.includes("[spam]");
//   if (hasresult) {
//      result = true;
    
//   }   else {
//     result= false;
//   }
//     return result;
// }
// checkForSpam("Latest technology news");
// checkForSpam("JavaScript weekly newsletter");
// checkForSpam("Get best sale offers now!");
// checkForSpam("Amazing SalE, only tonight!");
// checkForSpam("Trust me, this is not a spam message");
// checkForSpam("Get rid of sPaM emails. Our book in on sale!");
// checkForSpam("[SPAM] How to earn fast money?");
// ////////////
// function makeArray(firstArray, secondArray, maxLength) {
//     // Change code below this line
//    let sum;
// const cont= firstArray.concat(secondArray);
//   console.log(cont);

// if (cont.length>maxLength) {
// sum=cont.slice(0,maxLength);
// } else {
//   sum=cont
// }

//   return sum
//     // Change code above this line
//   }
// makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3);
// makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4);
// makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3);
// makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2);
// makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4);
// makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0);
// makeArray();
// /////////////////////////////////
// function calculateTotal(number) {
//  // Change code below this line
// let total=0;
//   for (let i = 1; i < number+1; i++) {
// //  const numbers=number[i]
//     total += i
//     console.log(total)
//   }

// return total
//   // Change code above this line
// }
// // calculateTotal(3);
// calculateTotal(18)
// ////////////////////////////////
// function findLongestWord(string) {
//   // Розділяємо рядок на слова, використовуючи пробіл як роздільник
//   const wordsArray = string.split(" ");
  
//   // Змінна для збереження найдовшого слова
//   let longestWord = "";

//   // Проходимо по кожному слову в масиві і знаходимо найдовше слово
//   for (let word of wordsArray) {
//     if (word.length > longestWord.length) {
//       longestWord = word;
//     }
//   }

//   return longestWord;
// }

// // Приклади викликів функції:
// console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); // повертає "jumped"
// console.log(findLongestWord("Google do a roll")); // повертає "Google"
// console.log(findLongestWord("May the force be with you")); // повертає "force"
// ////////////////////////
// function findLongestWord(string) {
//   // Розділяємо рядок на слова, використовуючи пробіл як роздільник
//   const wordsArray = string.split(" ");

//   // Знаходимо найдовше слово за допомогою метода reduce
//   const longestWord = wordsArray.reduce((longest, currentWord) => {
//     return currentWord.length > longest.length ? currentWord : longest;
//   }, "");

//   return longestWord;
// }

// // Приклади викликів функції:
// console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); // повертає "jumped"
// console.log(findLongestWord("Google do a roll")); // повертає "Google"
// console.log(findLongestWord("May the force be with you")); // повертає "force"
// //////////////////
// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   // Change code below this line
//   for (let i = min; i < max+1; i += 1){
//      numbers.push(i)
//      }
//   // Change code above this line
//   return numbers;
// }
// createArrayOfNumbers(14, 17)
// /////////////
// function filterArray(numbers, value) {
//    // Change code below this line
// let arr=[]
// for (let i = 0; i <= numbers.length; i++) {
//   // console.log(numbers.length)

//   if (numbers.length > value) {
//   arr.push[i];
// }


// }
// return arr
//   // Change code above this line
// }
// filterArray([1, 2, 3, 4, 5], 3)
// ////////
// const str = ['helloword', 1, 2];

// for (let i = 0; i<str.length; i += 1){
//   console.log(str[i]);
// }
// /////////
// function getCommonElements(array1, array2) {
//   // Change code below this line
//   let array3 = []
//     for (let i = 0; i < array1.length; i++){
//       let arr = array1[i];
//       if (array2.includes(arr)) {
//         array3.push(array1[i])
//       }
//   }
// return array3
//     // Change code above this line
//   }
// getCommonElements([1, 2, 3], [2, 1, 17, 19])
// ////////////
// function calculateTotalPrice(order) {
//   let total = 0;

// for (const ord of order){
//   // ord += order[i];
//   total += ord;
//   console.log(total)
//   console.log(ord)
// }

  
//   // for (let i = 0; i < order.length; i += 1) {
//   //   total += order[i];
//   // }


//   // return total;
// }
// calculateTotalPrice([12, 85, 37, 4])
// /////////////
// function getEvenNumbers(start, end) {
//     // Change code below this line
//     const evenNumber = [];
//     for (let i = start; i <= end; i += 1) {
//         console.log(i)
//         const even = (i)
//         if (even % 2 === 0) {
//             evenNumber.push(even)
//         }
//     }


//     return evenNumber;
//     // Change code above this line
// }
// getEvenNumbers(6, 12)
// ////////
// function includes(array, value) {
//   // Change code below this line
//     let result
//   for (let i = 0; i < array.length; i++) {
//     let arr = array[i]
//     if (arr === value) {
//       result = true
//         return result
//     } else {
//       result= false
//     }

// }

//   // Change code above this line
// }
// includes([1, 2, 3, 4, 5], 3);
// includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Jupiter");
// //////
// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };

// for (const key in book) {
//   // Ключ
//   console.log(key);
//   // Значення властивості з таким ключем
//   console.log(book[key]);
// }
// /////////

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4.7,
//   price: 5000,
//   tags: ["premium", "promoted", "top", "trusted"],
//   owner: {
//     name: "Henry Sibola",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// //   location(country) {
    
// //   },
// //   location(city) {
// // city="Jamaica"
// //   },
  
// };
// apartment.area=60;
// apartment.rooms = 3;


// apartment.location.country="Kingston"
// // apartment.location.city="Jamaica"
// console.log(apartment)
// // Change code below this line
// ////////////////


// function countProps(object) {
//   let propCount = 0;
//   // Change code below this line
// const keys=Object.keys(object)
// for(let key of keys){
// propCount=keys.length;
// }
//   // Change code above this line
//   return propCount;
// }
// countProps({ name: "Mango", age: 2 });
// countProps({ mail: "poly@mail.com", isOnline: true, score: 500 });
// ///////
// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// // Change code below this line
// // const keys = apartment;
//  const keys =Object.keys(apartment)
// for (let key of keys) {
//   // console.log(key)
//   // console.log(apartment[key])
//   values.push(apartment[key]);
// }
// //////////
// function countProps(object) {
//   // Change code below this line
//   let propCount = 0;

//   const keys=Object.keys(object);
//   for (const key of keys) {
// propCount=keys.length

    
//   }

//   return propCount;
//   // Change code above this line
// }
// countProps({ name: "Mango", age: 2 });
// countProps({ mail: "poly@mail.com", isOnline: true, score: 500 });
// /////////
// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// // Change code below this line
// // const keys = apartment;
// // const values = apartment;
// const keys =Object.keys(apartment);


// const values = Object.values(apartment);

// //////////////
// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   // Change code below this line
// const value=Object.values(salaries)
//   for (let i = 0; i < value.length; i += 1){
//      totalSalary += value[i];
//   }
 
//   // Change code above this line
//   return totalSalary;
// }
// countTotalSalary({ mango: 100, poly: 150, alfred: 80 })
// /////////////
// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line
// for (let color of colors) {
//   hexColors.push(color.hex);
//   rgbColors.push(color.rgb);
// }
// ///////////
// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {

//   for (const product of products) {
// console.log(product)
//     if (product.name === productName) {
//       return (product.price)
    
//     }
//       return null;
    
// }
//   // Change code above this line
// }
// getProductPrice("Radar");
// getProductPrice("Grip");
// getProductPrice("Engine");
// getProductPrice("Droid")
// getProductPrice("Scanner");
// //////////////


// ////////////////////

// function add(...args) {//Збираємо в один []масив, а потім працюємо з мвсивом.
//   let total = 0;
//   for (let i = 0; i < args.length; i += 1) {
//   //  total += args[i]
//   }
//   return total
// }
// ///*******Або так*******///////////
// function add(...args) {
//   let total = 0;

//   for (const arg of args) {
//     total += arg;
//   }

//   return total;
// }
// add(15, 27);
// add(12, 4, 11, 48);
// add(32, 6, 13, 19, 8);
// add(74, 11, 62, 46, 12, 36);
// ///////////
// Change code below this line
// function addOverNum(...args) {
//   let total = 0;

//   for (let i = 0; i < args.length; i += 1) {
//     if (args[0] < args[i]) {
//       total += args[i]
//     }
//   }
//     return total
// };
// addOverNum(50, 15, 27);
// addOverNum(10, 12, 4, 11, 48, 10, 8);
// addOverNum(15, 32, 6, 13, 19, 8);
// addOverNum(20, 74, 11, 62, 46, 12, 36);
// //////////

// function findMatches(array1,...otherArgs) {
//   const matches = [];
// console.log(otherArgs)
//     for (let i = 0; i < array1.length; i++){
//     console.log(array1[i])
//       let arr = array1[i];
//       if (otherArgs.includes(arr)) {
//         matches.push(array1[i])
//       }
//   }
//   return matches;
// }
// findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7);
// findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2);
// findMatches([10, 24, 41, 6, 9, 19], 24, 11, 9, 23, 41);
// findMatches([63, 11, 8, 29], 4, 7, 16);
// ////////
// const bookShelf = {
//   // Change code below this line
//   books: ["The last kingdom", "The guardian of dreams"],
//   getBooks() {
//     return "Returning all books";
//   },
//   addBook(bookName) {
//     return `Adding book ${bookName}`;
//   },
//   removeBook(bookName){
//     return `Deleting book ${bookName}`;
//   },
//   updateBook(bookName,bookName2){
//     return `Updating book ${bookName} to ${bookName2}`;
//   },
//   // Change code above this line
// };
// bookShelf.getBooks();
// bookShelf.addBook("Haze");
// bookShelf.removeBook("Red sunset");
// bookShelf.updateBook("Sands of dune", "Dune");
// ////////////
// const bookShelf = {
//   books: ["The last kingdom", "Haze", "The guardian of dreams"],
//   updateBook(oldName, newName) {
//     // Change code below this line

//       const bookIndex = this.books.indexOf(oldName);
// // console.log(bookIndex)

//     this.books.splice(bookIndex, 1, newName);

//   },
// };

// bookShelf.updateBook("Haze", "Dungeon chronicles");
// bookShelf.updateBook("The last kingdom","Dune");
// ///////////////
// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   addPotion(potionName) {
//     // Change code below this line
// potions.push(ddPotion);


//     // Change code above this line
//   },
// };
// ////////////////



// /**
//  * JS Doc  Що виконує функція
//  * @param який передаєму у функції
//  * @return Що отримуємо
//  */
// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],
//   // Change code below this line
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     for(const potion of this.potions){
//     if (potion.name===newPotion.name) {
//       return `Error! Potion ${newPotion.name} is already in your inventory!`;
//     }
//     }

//     this.potions.push(newPotion);

//   },
//    removePotion(potionName) {
//     const potionIndex = this.potions.indexOf(potionName);

//     if (potionIndex === -1) {
//       return `Potion ${potionName} is not in inventory!`;
//     }

//     this.potions.splice(potionIndex, 1);
//   },
//   updatePotionName(oldName, newName) {
//     const potionIndex = this.potions.indexOf(oldName);

//     if (potionIndex === -1) {
//       return `Potion ${oldName} is not in inventory!`;
//     }

//     this.potions.splice(potionIndex, 1, newName);
//   },
//   // Change code above this line
// };


// atTheOldToad.getPotions();
// atTheOldToad.addPotion({
//     name: "Invisibility",
//     price: 620
// });
// atTheOldToad.addPotion({
//     name: "Power potion",
//     price: 270
// });
// atTheOldToad.addPotion({
//     name: "Dragon breath",
//     price: 700
// });
// atTheOldToad.addPotion({
//     name: "Stone skin",
//     price: 240
// });
// atTheOldToad.removePotion("Dragon breath");
// atTheOldToad.removePotion("Speed potion");
// atTheOldToad.updatePotionName("Dragon breath", "Polymorth");
// atTheOldToad.updatePotionName("Stone skin", "Invulnerability potion");


/////////
// const login=['mango', 'poly',  'mambo','atThe',"premium", "promoted", 'ajax',"top", "trusted"];
// const loginToFined = 'ajax';
// let message = '';
// for (let i = 0; i < login.length; i += 1){

//   // console.log(login[i]);
//   if (login[i] === loginToFined) {
//     message=`логін ${loginToFined} знайдено`;
//     break
    
//   }  message=`логін не знайдено`
// }
// console.log(message);
//////////////
// function numbers(add) {
//   let minNumber = add[0];
//   for (const number of add){
//     if (number < add[0]) {
//       minNumber = number;
//    }
//   }
//   return minNumber;
// }
// console.log(numbers([4, 5, 25, 17, 65, 45, 47, 99],));
// console.log(numbers([4, 6, 15, 17, 64, 45, 87, 909]));
/////////////////////////////////
// const friends = [
//   { name: "Mango", online: true, pc: "amd" },
//   { name: 'Poli', online: false, pc: "amd" },
//   { name: "Kiwi", online: true, pc: "intel" },
//   { name: "Ajax", online: true, pc: "amd" },

  
// ]
// console.table(friends);
// // for (let i = 0; i < friends.length; i++) {

  

// for (const friend of friends) {
//   friends[2].onename = "Kyiv";
//   friends.country = "Lviv";
//   friends.age = 35;

// console.table(friend);

// }
// console.table(friends);

// const getFriendsByOnlineStatus = function (allFriends) {
//   const friendsByStatys = {
//     online: [],
//     offline: [],
//   };
//   for (const friend of allFriends) {
//     if (friend.online) {
//       friendsByStatys.online.push(friend);
//       continue
//     }
//     // } else {
//       friendsByStatys.offline.push(friend);
//     }
//   // }
//   return friendsByStatys
// }
// console.log(getFriendsByOnlineStatus(friends));
////////////////////////////////
//
///////
//Це називається js doc:
// /**
//  * 
//  * @param {*} a 
//  * @param {*} b 
//  * @returns 
//  */
// function add(a, b) {
//   return a+b
// }
// console.log(add(1, 2));
// console.log(add);

// const arr = [3, 10];
// //Це називається js doc:
// /**
//  * 
//  * @param {*} arr array with same value
//  * @param {*} callback function add
//  */
// function foo(arr,callback) {
//   const first = arr[0];
//   const second = arr[1];
//   const result = callback(first, second);
//   console.log(result);
// }
// foo(arr, add);
/////////////Два способи вирішення умови!!///////////////////////////
const pizzaPalace = {
  pizzas: ["Ultracheese", "Smoked", "Four meats"],
  order(pizzaName,onSuccess,onError) {
    for (const pizza of this.pizzas) {
      // console.log(pizza)
    if (this.pizzas.includes(pizzaName)) {
      return onSuccess(pizzaName);
    } else {
      return onError(`There is no pizza with a name ${pizzaName} in the assortment.`);
    };}
// return this.pizzas.includes(pizzaName) ? onSuccess(pizzaName) : onError(`There is no pizza with a name ${pizzaName} in the assortment.`)
  },
};

// Callback for onSuccess
function makePizza(pizzaName) {
  return `Your order is accepted. Cooking pizza ${pizzaName}.`;
}

// Callback for onError
function onOrderError(error) {
  return `Error! ${error}`;
}
// Method calls with callbacks
pizzaPalace.order("Smoked", makePizza, onOrderError);
pizzaPalace.order("Four meats", makePizza, onOrderError);
pizzaPalace.order("Big Mike", makePizza, onOrderError);
pizzaPalace.order("Vienna", makePizza, onOrderError);

/////////////////////////////////////////////////////////
// const pizzaPalace = {
//   pizzas: ["Ultracheese", "Smoked", "Four meats"],
//   order(pizzaName,onSuccess,onError) {
//     for (const pizza of this.pizzas) {
//       // console.log(pizza)
   
// return this.pizzas.includes(pizzaName) ? onSuccess(pizzaName) : onError(`There is no pizza with a name ${pizzaName} in the assortment.`)
//      }
//   },
// };

// // Callback for onSuccess
// function makePizza(pizzaName) {
//   return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }

// // Callback for onError
// function onOrderError(error) {
//   return `Error! ${error}`;
// }

// // Method calls with callbacks
// pizzaPalace.order("Smoked", makePizza, onOrderError);
// pizzaPalace.order("Four meats", makePizza, onOrderError);
// pizzaPalace.order("Big Mike", makePizza, onOrderError);
// pizzaPalace.order("Vienna", makePizza, onOrderError);
// ///////////////////////////////////////////////
