console.log(`Starting app`);

const dateNow = () => console.log(Date.now());

setTimeout(() => {
  console.log(`2000`);
  // dateNow();
}, 2000);

setTimeout(() => {
  console.log(`1000`);
  // dateNow();
}, 1000);

setTimeout(() => {
  // dateNow();
  console.log(`first 0`);
  // dateNow();
}, 200);

setTimeout(() => {
  console.log(`second 0`);
}, 200);

console.log(`Finishing up`);
// dateNow();

// console.log(x);
//var x = 10;
