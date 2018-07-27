var getUser = (id, callback) => {
  if (id < 100) {
    callback(null, 'Tao');
  } else if (id < 200) {
    callback(null, 'Xu');
  } else {
    callback(new Error('error'), null);
    console.log(`xxxxxxxxxxxxxx`);
  }
};

getUser(311, (err, data) => {
  if (err) {
    // console.log(err);
    console.log(`yyyyyyyyyyyyyy`);
    return;
  }
  console.log(data);
});