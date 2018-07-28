
const asyncAdd = (a, b) => {
  return new Promise((resolve, reject) => {
    if (typeof a === 'number' && typeof b === 'number') {
      resolve(a + b);
    } else {
      reject({
        status: 'Cannot be added.'
      });
    }
  });
};

asyncAdd(1, '2').then((data) => {
  console.log(data);
}, (err) => {
  console.log(JSON.stringify(err, null, 2));
  console.log(err.status);
});

var somePromise = new Promise((resolve, reject) => {
  // reject('first');
  // resolve('hello world');
  // reject('yeah');
  console.log('doing nothing here');
})
.then((data) => {
  // resolve('awesome');
  console.log('data: ' + data);
})
.then(() => {
  console.log('Middle: nothing much.');
}, (err) => {
  console.log(`Middle: ${err}`);
})
.catch((err) => {
  console.log('finally: ' + err);
});
