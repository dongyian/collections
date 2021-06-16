/* eslint-disable camelcase */

Promise.first = function first(promises = []) {
  const { length } = promises;

  return new Promise((resolve, reject) => {
    let count = 0;

    promises.forEach((promise) => {
      Promise.resolve(promise)
        .then(resolve)
        .catch(() => {
          count += 1;
          if (count === length) {
            reject(new Error('no resolved'));
          }
        });
    });
  });
};

Promise.last = function last(promises = []) {
  const { length } = promises;

  return new Promise((resolve, reject) => {
    let count = 0;

    promises.forEach((promise) => {
      Promise.resolve(promise)
        .then((value) => {
          count += 1;
          if (count === length) {
            resolve(value);
          }
        })
        .catch(() => {
          count += 1;
          if (count === length) {
            reject(promise);
          }
        });
    });
  });
};

Promise.none = function none(promises) {
  const list = promises.map(
    (promise) =>
      new Promise((resolve, reject) =>
        Promise.resolve(promise).then(reject, resolve)
      )
  );

  return Promise.all(list);
};

Promise.any = function any(promises) {
  const res = [];
  const list = promises.map((promise) =>
    Promise.resolve(promise)
      .then((value) => res.push(value))
      .catch(() => {})
  );

  return Promise.all(list).then(
    () =>
      new Promise((resolve, reject) => {
        const { length } = res;
        if (length > 0) {
          resolve(res);
        } else {
          reject();
        }
      })
  );
};

Promise.every = function every(promises) {
  return Promise.all(promises)
    .then(() => Promise.resolve(true))
    .catch(() => Promise.resolve(false));
};

function sleep(flag, duration) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (flag) {
        resolve(duration);
      } else {
        reject(new Error(duration));
      }
    }, duration);
  });
}

const promise_100 = sleep(false, 100);
const promise_200 = sleep(true, 200);
const promise_300 = sleep(true, 300);
const promise_400 = sleep(true, 400);
const promise_500 = sleep(false, 500);
const promise_600 = sleep(true, 600);
const promises = [
  promise_600,
  promise_200,
  promise_500,
  promise_300,
  promise_400,
  promise_100,
];

Promise.first(promises)
  .then((value) => {
    console.log('first then', value);
  })
  .catch((reason) => {
    console.error('first catch', reason);
  });

Promise.last(promises)
  .then((value) => {
    console.log('last then', value);
  })
  .catch((reason) => {
    console.error('last catch', reason);
  });

Promise.none(promises)
  .then((value) => {
    console.log('none then', value);
  })
  .catch((reason) => {
    console.error('none catch', reason);
  });

Promise.any(promises)
  .then((value) => {
    console.log('any then', value);
  })
  .catch((reason) => {
    console.error('any catch', reason);
  });
