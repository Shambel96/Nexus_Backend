console.log("Asynchronous Programming - Async / Await");

function timeConsumingTask() {
  console.log("Loop Starts"); // 2 6
  //   synchronous
  for (let i = 0; i < 10000000000; i++) {}
  console.log("Loop ends"); // 3 7
}
function timeConsumingTask2() {
  console.log("Timer starts"); // 4
  //   asynchronous
  setTimeout(function () {
    console.log("First timeout completed");
  }, 5000); // in millisecond // 5sec 9
  console.log("Timer Ends"); // 5
}

// console.log("Outside of the function"); // 1
// timeConsumingTask();
// timeConsumingTask2();
// timeConsumingTask();
// console.log("Code Ended"); // 8

// //

// console.log("Timer starts");
// setTimeout(function () {
//   console.log("First timeout completed");
// }, 0); // in millisecond // 2sec
// console.log("Timer Ends");

// File Download
// save on some file
// Print
// Callback

// Callback FUnction
// Father >> 2 children
// Promise for the Children
// if both children grade 85+ , go to Lalibella >> Succeed
// if not we won't >> Fail

// function checkGradesCallback(child1, child2, successCallback, failureCallback) {
//   if (child1 >= 85 && child2 >= 85) {
//     // console.log("Going to Lalibella");
//     successCallback("We are going to Lalibella");
//   } else {
//     // Won't go to lalibella
//     failureCallback("We won't go anywhere");
//   }
// }
// function onSuccess(message) {
//   console.log("Success message", message);
// }

// function onFailure(message) {
//   console.log("Fail Message", message);
// }

// checkGradesCallback(90, 90, onSuccess, onFailure);

// Promise
// Special object
// {
//     key : value
// }
// give us a placeholder for the future execution

// {
//     state : pending, fulfill, reject
//     value : anything datatype
//    onFullFillHandler : [function]
//  onRejectionHandler : [function]
// }

// on first time
// {
// state : pending,
// value : undefined
// }

// {/
// state : pending -> fulfill = resolve
// value : "Going to Lalibela"
// /}

// {
// state : pending -> rejection = reject
// value : "Not going anywhere"
// }

function vacationPromise() {
  // will return a promise
  // creating promise
  // new Promise(function (resolve, reject) {

  // })
  return new Promise((resolve, reject) => {
    const child1 = 90;
    const child2 = 80;

    if (child1 >= 85 && child2 >= 85) {
      // Both will go to Lalibela
      resolve("Going to Lalibela");
    } else {
      reject("Not going anywhere");
    }
  });
}

function vacationPromisewithSetTimeOut() {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      const child1 = 90;
      const child2 = 80;

      if (child1 >= 85 && child2 >= 85) {
        // Both will go to Lalibela
        resolve("Going to Lalibela");
      } else {
        reject("Not going anywhere");
      }
    }, 5000);
  });
}

let promise = vacationPromisewithSetTimeOut(); // Promise
// use our promise
promise.then(
  function fullfillmentHandlerFunction(value) {}, //sucees
  function rejectionHandlerFucntion(value) {}
);
console.log(promise);

// promise.then(
//   (successValue) => {
//     console.log(successValue);
//   },
//   (failureValue) => {
//     console.log("I am here on this function");
//     console.log(failureValue);
//   }
// );

// async/ await
async function vacationAwait() {
  try {
    const value = await vacationPromisewithSetTimeOut();
    console.log(value);
    // dhsndsndsdsk
  } catch (error) {
    // fail
    console.log(error);
  }
}
// vacationAwait();
//
