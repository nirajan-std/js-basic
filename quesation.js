// // /*- const प्रयोग गरेर विद्यार्थीको नाम राख।
// // - let प्रयोग गरेर तीनवटा subject का marks राख।
// // - Arithmetic operator प्रयोग गरेर total र percentage निकाल।
// // - if/else प्रयोग गरेर result देखाऊ:
// //   - Percentage 80 वा बढी → "Distinction"
// //   - Percentage 60 वा बढी → "First Division"
// //   - Percentage 40 वा बढी → "Pass"
// //   - अन्यथा → "Fail" */

// // const total_Marks = 300;
// // const studentName = "Nir";
// // let mathMarks = 85;
// // let scienceMarks = 85;
// // let computerMarks = 95;
// // obtainMarks = mathMarks + scienceMarks + computerMarks;
// // total_Percentage = (obtainMarks / total_Marks) * 100;
// // console.log("Total Marks =",total_Marks);
// // console.log("Obtained Marks =",obtainMarks);
// // console.log("Total Percentage =", total_Percentage, "%");
// // if (total_Percentage >= 80) {
// //     console.log("you Obtained Distinction");
// // } else if (total_Percentage >= 60) {
// //     console.log("You Obtained First Division");
// // } else if (total_Percentage >= 40) {
// //     console.log("Pass");
// // }
// // else {
// //     console.log("Fail");
// // }


// // const voter_Name = "Ram Khadka";
// // let age = -5;
// // if (age >= 18) {
// //     console.log("You can vote ")
// // } else if (age > 0) {
// //     console.log("you can't Vote");
// // } else {
// //     console.log("Invaild Age");
// // }


// // num1 र num2 variables बनाऊ।
// // operator नामको variable मा "+", "-", "*" वा "/" राख।
// // if/else if/else प्रयोग गरेर सही calculation गर।
// // Zero ले divide गर्न खोजेमा "Cannot divide by zero" देखाऊ।
// // गलत operator भए "Invalid operator" देखाऊ।

// // let num1 = 12;
// // let num2 = -3;
// // let operator = "/";

// // if (num1 >= 1 && num2 >= 1) {
// //     console.log(`num1 * num2 =${num1 * num2}`);
// // } else if (num1 === 0 || num2 === 0) {
// //     console.log("0 can't be divided by any digit");
// // } else {
// //     console.log("Invaild Input");
// // }

// // एउटा program बनाऊ जसले कुनै number positive, negative वा zero हो भनेर जाँच गर्छ।
// // Requirements:
// // - number नामको variable बनाऊ।
// // - Number positive वा negative हो कि zero हो भनेर जाँच गर।
// // - Positive number भए त्यो even हो कि odd पनि जाँच गर।
// // - % (modulus) operator प्रयोग गर।

// // let number = 7;
// // if (number > 0) {
// //     console.log("Positive");
// //     if (number % 2 === 0) {
// //         console.log("Even");
// //     } else {
// //         console.log("Odd");
// //     }
// // } else if (number === 0) {
// //     console.log("Zero");
// // } else {
// //     console.log("Negative");
// // }

// // एउटा shopping website को basic login र discount system बनाऊ।
// // Requirements:
// // - username, password, totalAmount र isLoggedIn variables बनाऊ।
// // - username र password सही छन् कि छैनन् जाँच गर।
// // - User logged in छ र total amount रु. 5000 वा बढी छ भने 10% discount देऊ।
// // - User logged in छ तर amount रु. 5000 भन्दा कम छ भने discount नदेऊ।
// // - Login गलत भए "Please login first" देखाऊ।
// // Hint: && (AND) logical operator प्रयोग गर।

// const eCart = {
//     userName: "Nir",
//     userPass: "1234567",
//     isLogin: true,
//     total_amount: 6000,
//     discount: null,
// }
// console.log(eCart["userName"]);
// console.log(eCart["userPass"]);
// if (eCart["isLogin"] === true) {
//     if (eCart["total_amount"] >= 5000) {
//         console.log("Total Pay amount =", [eCart["total_amount"] - (eCart["total_amount"] * 10) / 100])
//     } else {
//         console.log("Total Pay Amount", eCart[total_amount]);
//     }
// } else {
//     console.log("Please Login First");
// }


// एउटा घरले प्रयोग गरेको electricity units का आधारमा bill निकाल्ने program बनाऊ।
// नियमहरू:
// - const बाट ग्राहकको नाम राख।
// - let बाट प्रयोग भएको units राख।
// - पहिलो 20 units को प्रति unit रु. 5।
// - अर्को 30 units को प्रति unit रु. 7।
// - 50 units भन्दा माथिको प्रत्येक अतिरिक्त unit को रु. 10।
// - Units 0 भन्दा कम भए "Invalid Units" देखाऊ।
// - अन्त्यमा ग्राहकको नाम र total bill देखाऊ।
//   Example: 60 units भए bill = (20 × 5) + (30 × 7) + (10 × 10) = रु. 410।
//   Starter code copy गर

// const e_User = "Nir Singh";
// let unit_Consumed = 21;
 
// if (unit_Consumed <= 0) {
//     console.log("Invaild Bill Input");
// } else if (unit_Consumed <= 20) {
//         bill = unit_Consumed * 5;
// } else if (unit_Consumed <= 30) {
//     bill = (20 * 5) + (unit_Consumed - 20) * 7;
// } else {
//     bill = (20 * 5) + (30 * 7) + (unit_Consumed - 50) * 10;
// }

// if (unit_Consumed > 0) {
//     console.log("Customer Name:", e_User);
//     console.log("Consumed Units:", unit_Consumed);
//     console.log("Pay Price", bill);
// }

// let user_Name = "MERN";
// console.log("Total character", +user_Name.length);
// for (let i = 0; i <= user_Name.length; i++){
//     console.log(user_Name[i]);
// }

// const user = "Hello";
// for (let i = user.length-1; i >= 0; i--){
//     console.log(user[i]);
// }

// let num = 100;
// let count = 0;
// for (let i = 0; i <= 100; i++){
//     count = count + i;
// }
// console.log(count);

// let num = 5;
// for (let i = 1; i <= 10; i++){
//     console.log(`5 x ${i} = ${5 * i}`);
// }

// for (let i = 0; i <= 50; i++){
//     if (i % 2 !== 0) {
//         console.log(i);
//     }
// }

// const password = "Nir123456";
// for (let i = 0; i <= password.length-1; i++){
//     if (password.length >= 8) {
//         console.log(password[i]);
//     }
// }
//    if (password.length <= 7){
//         console.log("Please input 8 character");
// }
    
// const prices = [500, 1200, 800, 2000, 300];
// let total = 0;
// let largest = prices[0];
// for (let i = 0; i <= prices.length-1; i++){
//     total += prices[i];
//     if (prices[i] >= 500) {
//     console.log("greater thean 500",prices[i]);
//     }
//     if (prices[i] > largest) {
//         largest = prices[i];
//     }
// }
// console.log("total price of goods", total);
// console.log("Largest is = ", largest);


// const user = [
//     { name: "Nir", age: 20, role: "Owner" },
//     { name: "Ram", age: 22, role: "tenant" },
//     { name: "Sita", age: 19, role: "tenant" },
// ];
// let tenant_Count = 0;
// for (i = 0; i <= user.length-1; i++){
//     console.log(user[i].name);

//     if (user[i].age >= 18) {
//         console.log(`Age is more than 18: ${user[i].name}`)
//     }
//     if (user[i].role === "tenant") {
//         tenant_Count++;
//     }
// }
// console.log(`No of Tenant is: ${tenant_Count}`);

// const student = {
//     name: "Nir Singh",
//     math: 90,
//     science: 85,
//     computer: 92,
// }

// function calculate_Function(student) {
//     total_Marks = (student.math + student.science + student.computer);
//     total_Percentage = (total_Marks / 300) * 100;
//     console.log("Your name is :",student.name)
//     console.log("Total Marks :",total_Marks);
//     console.log("Your Obtained",total_Percentage, "%");
//     if (total_Percentage >= 80) {
//         console.log("Result: Distinction");
//     } else if (total_Percentage >= 60) {
//         console.log("Result: First Division");
//     } else if (total_Percentage >= 40) {
//         console.log("Result: Pass");
//     } else {
//         console.log("Result: Fail");
//     }
// }
// calculate_Function(student);

// let cal = ["+", "-", "*", "/"];
// function calculate_Function(num1, num2, operator) {
//     let cal;
//      if (operator === "+" || operator === "-" || operator === "*" || operator === "/") {
//         if (operator === "+") {
//             cal = num1 + num2;
            
//          } else if (operator === "-") {
//             cal = num1 - num2;
            
//          } else if (operator === "*") {
//             cal = num1 * num2;
            
//         } else if (operator === "/") {
//             if (num2 === 0) {
//                 console.log("Number can't be divided by 0");
//             } else {
//                 cal = num1 / num2;
//             }

//         }
//             console.log(cal);
//     } else {
//        console.log("Invaild Operator");
//     }

   
        
    
// }
// calculate_Function(90,0,"/");

// const cart = [
//     { name: "Mouse", price: 800, quantity: 2 },
//     { name: "Keyboard", price: 500, quantity: 1 },
//     { name: "Headphone", price: 2000, quantity: 1 }
// ];


// function calculate_Cart_Total(shopping) {
//     let total = 0;
//     let discount = 0;
//     for (let i = 0; i < shopping.length; i++){
//         let product = shopping[i];
//         total += product.price * product.quantity;
//     }
//     // console.log(total);

//     if (total >= 5000) {
//         discount = (total * 10) / 100;
//     }
//     const final_Amount = total - discount;

//     return final_Amount;
   
// }
// const result = calculate_Cart_Total(cart);
// console.log(result);

// const rooms = [
//     { title: "Room A", rent: 8000, available: true },
//     { title: "Room B", rent: 12000, available: false },
//     { title: "Room C", rent: 6000, available: true },
//     { title: "Room D", rent: 15000, available: true }
// ];

// function getAffordableRooms(rooms, budget) {
//         let count = 0;
//     for (let i = 0; i < rooms.length; i++){
//         const room = rooms[i];
//         if (room.available === true && room.rent <= budget) {
//             console.log("Rooms :", room.title, "Price", room.rent);
//             count = count+1;
//         }
//     }
//     console.log("Total room Available ",count);

// }
// getAffordableRooms(rooms, 10000);

// const user = {
//     username: "nir",
//     password: "nir123",
//     isActive: true,
//     role: "owner"
// };

// function login(user_Name, password) {

//     let p = user;
//         if (p.isActive === true) {
//             if (p.username === user_Name && p.password === password) {
//                 if (p.role === "owner") {
//                     console.log("Welcome to Owner Dashboard");
//                 } else if (p.role === "tenant") {
//                     console.log("Welcome to Finder Dashboard");
//                  }
//             } else {
//                 console.log("Invaild Credentials");
//             }
//         } else {
//             console.log("User is InActive");
//         }
//     }


// login("nir", "nir123");     // Welcome to Owner Dashboard
// login("nir", "wrong123");  // Invalid Credentials
// login("ram", "ram123");    // Invalid Credentials

// const students = [
//     { name: "Nir", math: 85, science: 90, computer: 95 },
//     { name: "Ram", math: 45, science: 55, computer: 60 },
//     { name: "Sita", math: 30, science: 35, computer: 40 },
//     { name: "Hari", math: 70, science: 75, computer: 80 }
// ];

// const numbers = [10, 20, 30, 40, 50];

// num = numbers.forEach((num)=>{
// console.log(num);
// })

// const numbers = [10, 20, 30, 40, 50];
// const num = numbers.map( (num) =>{
//     return num * 2;
// });
// console.log(num);
// const numbers = [10, 20, 30, 40, 50];
// total = numbers.reduce(function (initial, final) {
//     return initial + final;
// },0);
// console.log(total);
// const students = ["Nir", "Ram", "Sita", "Hari", "Gita"];
// students.forEach(student => console.log("Hello,",student,"!"));

// const prices = [100, 250, 500, 750, 1000];

// vat = prices.map(price => price + price * 13 / 100);
// console.log(vat);

// const marks = [25, 45, 78, 32, 90, 55, 18, 65];
// pass_Result = marks.filter(mark => mark >= 40);
// console.log(pass_Result);

// const products = [
//     { id: 1, name: "Mouse", price: 800 },
//     { id: 2, name: "Keyboard", price: 1500 },
//     { id: 3, name: "Monitor", price: 15000 },
//     { id: 4, name: "Headphone", price: 2500 }
// ];

// productfind = products.find(product => product.id === 3);
// console.log(productfind);

// const inventory = [
//     { name: "Laptop", stock: 5 },
//     { name: "Mouse", stock: 0 },
//     { name: "Keyboard", stock: 12 }
// ];

// stock_Check = inventory.some(product => product.stock === 0);
// console.log(stock_Check);

// const students = [
//     { name: "Nir", attendance: 85 },
//     { name: "Ram", attendance: 90 },
//     { name: "Sita", attendance: 70 },
//     { name: "Hari", attendance: 80 }
// ];
// eligible_Student = students.every(student => student.attendance >= 70);
// console.log(eligible_Student);

// const cart = [
//     { name: "Mouse", price: 800, quantity: 2 },
//     { name: "Keyboard", price: 1500, quantity: 1 },
//     { name: "Headphone", price: 2000, quantity: 2 }
// ];
// const total_Amount = cart.reduce(function (total, product) {
//     return total + (product.price * product.quantity);
// },0);
// console.log(total_Amount);

// const rooms = [
//     { title: "Room A", rent: 8000, available: true },
//     { title: "Room B", rent: 12000, available: false },
//     { title: "Room C", rent: 6000, available: true },
//     { title: "Room D", rent: 15000, available: true }
// ];

// const result = rooms.map(function (room) {
//     let service_Charge = room.rent * 10 / 100;
//     total_Charge = service_Charge + room.rent;
//     return {
//         room: room.title,
//         serviceCharge: service_Charge,
//         totalRent: total_Charge,
//         status: room.available === true ? "Available" : "Booked"
//     };
// });
// console.log(result);

// const rooms = [
//     { title: "Room A", rent: 8000, available: true },
//     { title: "Room B", rent: 12000, available: false },
//     { title: "Room C", rent: 6000, available: true },
//     { title: "Room D", rent: 15000, available: true }
// ];

// const budget = 10000;
// const suitable_Room = rooms
//     .filter(room => room.available === true && room.rent <= budget)
//     .map(room => ({
//         title: room.title,
//         rent: room.rent,
//     }
//     )
//     );
// console.log(suitable_Room);

// `double` नामको arrow function बनाऊ। एउटा number parameter लिई त्यसको दोब्बर return गर्नुपर

// function double(number) {
//     return number * 2;
// };
// console.log(double(2));
// const double = (number) => {
//     return number * number;
// };
// console.log(double(10));

// const checkEven = (number) => {
//     if (number % 2 === 0) {
//         return "Even";
//     } else {
//         return "Odd";
//     }
// };
// console.log(checkEven(8));

// const getResult = (mark) => {
//     if (mark >=40) {
//         return "PASS";
//     } else {
//         return "FAIL";
//     }
// };
// console.log(getResult(88));

// const calculate_Rent = (rent, serviceCharge) => {
//     return rent + serviceCharge;
// };
// console.log(calculate_Rent(5000, 800));

//* Destructing

// const colors = ["red", "green", "blue"];

// // console.log(colors[0]);
// // console.log(colors[1]);
// // console.log(colors[2]);
// const [first, second, third] = colors;
// console.log(first);
// console.log(second);

// const fruits = ["Apple", "Mango", "Banana"];
// const [first, second, third] = fruits;
// console.log(first);
// console.log(second);
// console.log(third);

// const numbers = [100, 200, 300, 400];
// const [first, , third] = numbers;
// console.log(first);
// console.log(third);

// const student = { name: "Ram", age: 21, course: "BCSIT" };
// const { name: username, course: falulty } = student;
// console.log(username);
// console.log(falulty);

// const user = { name: "Sita", city: "Kathmandu" };
// const { city: address } = user;
// console.log(address);

// const frontend = ["HTML", "CSS", "JavaScript"];
// const backend = ["Node.js", "Express.js"];
// const output = [...frontend, ...backend];
// console.log(output);

// const numbers = [10, 20, 30];
// const newArray = [...numbers, 40];
// console.log(newArray);

// const room = {
//     title: "Room A",
//     rent: 8000,
//     available: true
// };
// const newArray = {...room, rent: 10000};
// console.log(newArray);

// function sumAll(...number) {
//     let total = 0;
//     for (let i = 0; i < number.length; i++){
//         total = total + number[i];
//     }
//     return total;
// };

// console.log(sumAll(10, 20, 30));
// console.log(sumAll(5, 5, 5, 5));
// console.log(sumAll(100, 200));

// const numbers = [10, 20, 30, 40, 50];
// const [first, ...remaining] = numbers;
// console.log("First:", first);
// console.log("Remaining:", remaining);

// const user = {
//     name: "Nir",
//     age: 20,
//     role: "tenant",
//     city: "Bhaktapur"
// };
// const newUser = {
//     ...user,
//     age: 21,
//     role: "Owner",
//     city:"Kathmandu",
// }
// console.log(newUser);

// function calculateTotal(...price) {
//     let totalPrice = 0;
//     for (let i = 0; i < price.length; i++){
//         totalPrice = totalPrice + price[i];
//     }
//     return totalPrice;
// }
// console.log(calculateTotal(800, 1500, 2000));
// console.log(calculateTotal(500, 500));
// console.log(calculateTotal(100, 200, 300, 400));

// console.log("First");

// setTimeout(function () {
//     console.log("Second");
// }, 5000);

// console.log("Third");

// function loadStudent(callback) {
//     setTimeout(function () {
//         const student = {
//             name: "Ram",
//             marks: 85
//         };

//         callback(student);
//     }, 2000);
// }

// function showResult(student) {
//     console.log(student.name);
//     console.log(student.marks);
// }

// loadStudent(showResult);