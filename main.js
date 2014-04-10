var total = 1000;
var action = getAction();
var account = true;

  while(!quit(action) && total >= -750){
   if (action === "d" || action === "w"){
     var amount = howMuch();
     if(action === "d" && amount < 500){
       total = total + amount;
       console.log("Your total is now " + total + ".");
       alert("Your total is now " + total + ".");
       action = getAction();
     } else if (action === "d" && amount >= 500){
        total = total + amount + 25;
        console.log("Your total is now " + total + ".");
        alert("You got a bonus $25! Your total is now " + total + ".");
        action = getAction();
     } else if (action === "w" && total - amount <= -750){
           total = total - amount;
           alert("You now owe the bank over $750. Please contact your bank immediately or you will be turned over to collections.");
           account = false;
     } else if (action === "w" && total - amount >= 0){
        total = total - amount;
        console.log("Your total is now " + total + ".");
        alert("Your total is now " + total + ".");
        action = getAction();
     } else if (action === "w" && total - amount < 0){
        total = total - amount - 50;
        console.log("Your total is now " + total + ".");
        alert("You got a $50 overdraft charge! Your total is now " + total + ".");
        action = getAction();
     }
   }
 }


function getAction () {
  var action = prompt("Would you like to (w)ithdraw, (d)eposit, or (q)uit?");
  return action;
}

function quit(letter) {
  return letter === 'q';
}

function howMuch() {
  var amount = prompt("How much?");
  return parseInt(amount);
}
