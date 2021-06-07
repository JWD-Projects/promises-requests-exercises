/*
* Problem
It is your birthday and you want to celebrate it with all your friends at the park.
But for that to happen, the weather needs to be good. No raining.
If the weather is not good, your birthday party will happen in your tiny apartment.
Unfortunately, you can't invite all your friends if your birthday party needs to be in your house.

How can your create a Promise for that situation?
Start defining the weather. Is it raining?
Then write a promise (create a promise).
Then check the promise (consume the promise).
*/

//Define the weather.
let raining = true;

//Create a promise.
const birthdayParty = new Promise((resolve, reject) => {
    if (!raining) {
        resolve('Go to the park');
    } else {
        reject('celebrate in apartment');
    }
});

//Consume the promise using then() and catch().
birthdayParty
.then((resolvedValue) => {
    console.log(resolvedValue);
})
.catch((rejectValue) => {
    console.log(rejectValue);
});