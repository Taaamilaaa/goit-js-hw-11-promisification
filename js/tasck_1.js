const delay = ms => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(ms);

      reject('Error passed into reject function :(');
    }, ms);
  });
};

const logger = time => console.log(`Resolved after ${time}ms`);

// Вызовы функции для проверки

delay(2000).then(logger);
delay(1000).then(logger);
delay(1500).then(logger);
