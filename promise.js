// is method mein 3 stages hai pending fullfilled and rejected
// resolve() and reject() agar resolve ho to then() agar reject ay tu catch() yeh resolve or reject khod ke bnay hoty h inko hm koi bhe nam de skty h

function prom(complete) {
  return new Promise(function (resolve, reject) {
    console.log("Fetching Data please wait");
    setTimeout(() => {
      if (complete) {
        resolve("I am Sucessfull");
      } else {
        reject("I am rejected");
      }
    }, 2000);
  });
}

let fullfilled = (result) => {
  console.log(result);
};
let rejected = (eror) => {
  console.log(eror);
};

prom(false).then(fullfilled).catch(rejected);
