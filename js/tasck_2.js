const users = [
  { name: 'Mango', active: true },
  { name: 'Poly', active: false },
  { name: 'Ajax', active: true },
  { name: 'Lux', active: false },
];

const toggleUserState = (allUsers, userName) => {
  return new Promise((resolve, reject) => {
    resolve({ allUsers, userName });
  });
};

const logger = arr => {
  const { allUsers, userName } = arr;
  let newAllUsers = [];
  allUsers.forEach(user => {
    if (user.name === userName) {
      user.active = !user.active;
    }
    newAllUsers.push(user);
  });

  console.table(newAllUsers);
};
// вызов функции для проверки
toggleUserState(users, 'Mango').then(logger);
toggleUserState(users, 'Lux').then(logger);