// Задание 1
//const delay = ms => {
//     return new Promise((resolve, reject) => {

//         setTimeout(() => {

//             resolve(ms);

//             reject("Error passed into reject function :(")
//         }, ms);
//     }
//     )
// };

// const logger = time => console.log(`Resolved after ${time}ms`);

// // Вызовы функции для проверки
// delay(2000).then(logger);
// delay(1000).then(logger);
// delay(1500).then(logger);

// Задание 2

const users = [
  { name: 'Mango', active: true },
  { name: 'Poly', active: false },
  { name: 'Ajax', active: true },
  { name: 'Lux', active: false },
];

 const toggleUserState = (allUsers, userName) => {
  return new Promise((resolve, reject) => {    
      resolve(allUsers, userName);

  });
};


const logger = (allUsers, userName) => {
    const result = allUsers.map((user) => {
        if (user.name === userName) {
            user = { ...user, active: !user.active }
        }
    })
                console.table(result);

}
toggleUserState(users, 'Mango').then(logger);
toggleUserState(users, 'Lux').then(logger);
