// Question 1
// create a function that waits 5 second
//then prints 'Reminder sent to ${email}
//then call the function for 3 different email accounts

async function sendReminder(email) {
  await new Promise(resolve => setTimeout(resolve, 5000));
  console.log(`Reminder sent to ${email}`);
}

async function sendReminders() {
  await sendReminder("adedayhaftu@gmail.com");
  await sendReminder("fanaasmelash@gmail.com");
  await sendReminder("hewanmehari@gmail.com");
}
sendReminders();

//Question 2
//create a function that counter starting from 0 attempts waits 1 second between each try
//if 3rd attempt print 'Successful login'
//else print`Login failed after ${attempts} attempt`

async function tryLogin() {
  let attempts = 0;
  while (attempts < 3) {
    await new Promise(resolve => setTimeout(resolve, 1000));
    attempts++;
    if (attempts === 3) {
      console.log("Successful login");
    } else {
      console.log(`Login failed after ${attempts} attempt`);
    }
  }
}
tryLogin();

//Question 3
//create a function that counts starting from 5
//subtract 1 and prints the number in every second
//if the number goes below 0, prints 'Time's up!'

function countdown() {
  let count = 5;
  const interval = setInterval(() => {
    console.log(count);
    count--;
    if (count < 0) {
      clearInterval(interval);
      console.log("Time's up!");
    }
  }, 1000);
}
countdown();

// Question 4
//create a function that prints 'Loading header...' and waits for 1 second
//prints 'Loading counter...' and waits 2 seconds
//prints 'Loading footer...' and waits 1 second
//prints 'page fully loaded'

async function loadPage() {
  console.log("Loading header...");
  await new Promise(resolve => setTimeout(resolve, 1000));
  console.log("Loading content...");
  await new Promise(resolve => setTimeout(resolve, 2000));
  console.log("Loading footer...");
  await new Promise(resolve => setTimeout(resolve, 1000));
  console.log("Page fully loaded.");
}
loadPage();

// Question 5
// creates a function that waits 2 seconds and gives the price message
// use this function to get the price for 'AAPL'
// to get the price for 'GOOG'
// print both price messages

function fetchPrice(symbol) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(`Price for ${symbol} retrieved`);
    }, 2000);
  });
}
async function getPrices() {
  const price1 = await fetchPrice("AAPL");
  console.log(price1);
  const price2 = await fetchPrice("GOOG");
  console.log(price2);
}
getPrices();



