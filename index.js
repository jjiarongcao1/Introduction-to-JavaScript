/************************************************************** Task 1: Warm-up! **************************************************************/
//Task a: declare a variable called votingAge, console log true if age > 18 (no function required)
let votingAge = 18;

if(votingAge > 18) {
    console.log(true);
}




//Task b: declare a variable and then use a conditional to change the value of that variable based on the value assigned to a second variable (no function required)
let variableFirst = 1;
let variableSec = 2;

if(variableSec == 2) {
     variableFirst = variableFirst + 1;
}

console.log("THe new first variable is " + variableFirst);

//Task c: Convert string ("1999") to integer (1999)  (no function required) // hint look up the Number method

let year = "1999";
year = Number(year);

console.log("The year is " + year);




//Task d: Write a function to multiply a*b 

function multiply(a, b) {
    return a * b;
}

console.log(multiply(10, 10));


/************************************************************** Task 2 **************************************************************/
//Age in Dog years
//write a function that takes your age and returns it to you in dog years - they say that 1 human year is equal to seven dog years 

function dogYears(age) {
    let dogAge = age * 7;
}

console.log(dogYears(28));


/************************************************************** Task 3 **************************************************************/
//Dog feeder 
//takes weight in pounds and age in years (note if the dog is a puppy the age will be a decimal) and returns the number of pounds of raw food to feed in a day.

//feeding requirements
// adult dogs at least 1 year 
// up to 5 lbs - 5% of their body weight
// 6 - 10 lbs - 4% of their body weight 
// 11 - 15 lbs - 3% of their body weight 
// > 15lbs - 2% of their body weight 

// Puppies less than 1 year
// 2 - 4 months 10% of their body weight
// 4 - 7 months 5% of their body weight 
// 7 - 12 months 4% of their body weight

// when you are finished invoke your function with the weight of 15 lbs and the age of 1 year - if your calculations are correct your result should be 0.44999999999999996
  
function feeder(age, pounds) {
    if(age >= 1) {
        if(pounds >= 5) {
            return pounds * 0.05;
        } else if(pounds >= 6 && pounds <= 10) {
            return pounds * 0.04;
        } else if(pounds >= 11 && pounds <= 15) {
            return pounds * 0.03;
        } else if(pounds > 15) {
            return pounds * 0.02;
        }
    }

    if(age >= 2/12 && age <= 4/12) {
        return pounds * 0.1; 
    } else if(age >= 4/12 && age <= 7/12) {
        return pounds * 0.05;
    } else if(age >= 7/12 && age <= 12/12) {
        return pounds * 0.04;
    }
}

console.log(feeder(1, 15));


/************************************************************** Task 4 **************************************************************/
// Rock, Paper, Sissors
// Your function should take a string (either rock paper or sissors)
// it should return you won or you lost based on the rules of the game (you may need to look up the rules if you have not played before)
// use math.random to determine the computers choice 
// hint while you can complete this with only conditionals based on strings it may help to equate choice to a number 

  function game(player) {
    let computer = Math.floor(Math.random() * Math.floor(3));
    
    // if computer chooses sissors
    if(computer === 0) {
        if(player = 'rock') {
            return 'You win';
        } else if(player = 'sissors') {
            return 'It is a draw.';
        } else if(player = 'papaer') {
            return 'You lose.';
        }
    }

    // if computer chooses paper
    if(computer === 1) {
        if(player = 'sissors') {
            return 'You win.';
        } else if(player = 'paper') {
            return 'It is a draw!'
        } else if(player = 'rock') {
            return 'You lose.';
        }
    }

    // if computer chooses rock
    if(computer === 2) {
        if(player = 'paper') {
            return 'You win.';
        } else if(player = 'rock') {
            return 'It is a draw!';
        } else if(player = 'sissors') {
            return 'You lose.';
        }
    }
  }

console.log("You choose " + game(paper));
console.log("You choose " + game(sissors));
console.log("You choose " + game(rock));

/************************************************************** Task 5 **************************************************************/
//Metric Converter
//a. KM to Miles - should take the number of kilometers and convert it to the equal number of miles

function converter(km) {
    let miles = km * 0.621371;
    return miles;
}
console.log(converter(12));


//b. Feet to CM - should take the number of feet and convert it to the equal number of centimeters
  
function convert(feet) {
    let cm = feet * 30.48;
    return cm;
}
console.log(convert(20));



/************************************************************** Task 6 **************************************************************/
// 99 bottles of soda on the wall
// create a function called annoyingSong
// the function should take a starting number as an argument and count down - at each iteration it should log (number) bottles of soda on the wall, (number) bottles of soda, take one down pass it around (number left over) bottles of soda on the wall`
function annoyingSong(start) {
    let bottles = 99;
    for(i=0; start > 0; start --) {
        console.log(start + ' bottles of soda on the wall.');
        console.log(start - 1 + ' bottles of soda left over.');
    }
}

annoyingSong(bottles);




/************************************************************** Task 7 **************************************************************/
//Grade Calculator
//write a javaScript program that takes a mark out of 100 and returns a corisponding letter grade 
//90s should be A 
//80s should be B 
//70s should be Cs 
//60s should be D 
//and anything below 60 should be F
function gradeCal(grade) {
    if(grade >= 90 && grade <= 100) {
        return 'You received an A';
    } else if(grade >= 80 && grade <= 90) {
        return 'You received a B.';
    } else if(grade >= 70 && grade <= 80) {
        return 'You received a C.';
    } else if(grade >= 60 && grade <= 69) {
        return 'You received a D.';
    } else {
        return 'You received an F';
    }
}
console.log(grade(93));
console.log(grade(83));
console.log(grade(73)); 
console.log(grade(63));  
console.log(grade(43));

/************************************************************** Stretch **************************************************************/
//Create a function that counts the number of vowels within a string. It should handle both capitalized and uncapitalized vowels.
// Hint - you may need to study tomorrow's traning kit on arrays 
// try looking up the .includes() method





/************************************************************** Stretch **************************************************************/
//Take Rock, Paper, Sissors further
//update your rock papers sissors code below to take a prompt from a user using the window object





