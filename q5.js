//Q5 Given a total due and an array representing the amount of change in your pocket, determine whether or not you are able to pay
//for the item. Change will always be represented in the following order: quarters, dimes, nickels, pennies.

const changeEnough = (arr, bill) => {
    let quarter = arr[0] * 0.25;
    let dime = arr[1] * 0.1;
    let nickel = arr[2] * 0.05;
    let penny = arr[3] * 0.01;
    if ((quarter + dime + nickel + penny) >= bill) {
      return true;
    } else return false;
  };
  
  console.log(changeEnough([2, 100, 0, 0], 14.11));
  console.log(changeEnough([0, 0, 20, 5], 0.75));
  console.log(changeEnough([30, 40, 20, 5], 12.55));