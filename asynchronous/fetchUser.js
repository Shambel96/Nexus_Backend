// Promise Chaining
// How they internally work

// database is on the global code
const fakeuser = {
  id: 1,
  name: "Yoni",
};

// Information is saved in a database
// to fetch from the
//  it takes 3 sec
// Fetch the User form the Database

// Promise

function fetchUserById(id) {
  return new Promise((resolve, reject) => {
    // time consuming task
    // fetching from database

    // MongoDB,MYSQL,
    setTimeout(() => {
      if (id === fakeuser.id) {
        resolve(fakeuser);
      } else {
        reject("User not Found");
      }
    }, 3000);
  });
}

// let promise = fetchUserById(1);

// console.log(promise);

// promise.then(
//   (successvalue) => {
//     console.log(successvalue);
//   },
//   (failureValue) => {
//     console.log(failureValue);
//   }
// );

async function fetchUser() {
  try {
    const successValue = await fetchUserById(1);
    console.log(successValue);
  } catch (failureValue) {
    console.log(failureValue);
  }
}
fetchUser();
//
