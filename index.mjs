import { fifaData } from './fifa.mjs';
// console.log(fifaData);

// console.log('its working');
// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data 

(a) Home Team name for 2014 world cup final*/

const finalsHomeTeam = fifaData.filter(function(item){
    return item["Year"] === 2014 && item["Stage"] === "Final"; 

});

console.log(finalsHomeTeam[0]["Home Team Name"]);

// // (b) Away Team name for 2014 world cup final

const finalsAwayTeam = fifaData.filter(function(item){
    return item["Year"] === 2014 && item["Stage"] === "Final";

});

console.log(finalsAwayTeam[0]["Away Team Name"]);

// // (c) Home Team goals for 2014 world cup final

const finalsHomeGoals = fifaData.filter(function(item){
    return item["Year"] === 2014 && item["Stage"] === "Final";

});

console.log(finalsHomeGoals[0]["Home Team Goals"]);

// // (d) Away Team goals for 2014 world cup final

const finalsAwayGoals = fifaData.filter(function(item){
    return item["Year"] === 2014 && item["Stage"] === "Final";

});

console.log(finalsHomeGoals[0]["Away Team Goals"]);


// // (e) Winner of 2014 world cup final */

const winner2014 = fifaData.filter(function(item){
    return item["Year"] === 2014 && item["Stage"] === "Final";

}).map(function(item){
    if(item["Home Team Goals"] > item["Away Team Goals"]){
        return item["Home Team Name"];
    }else{
        return item["Away Team Name"];
    }

});

console.log(winner2014[0]);


/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */

function getFinals(data){
   return data.filter(function(item){
        return item["Stage"] === "Final"
    });
};

console.log(getFinals(fifaData));

/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */

function getYears(getFinalsCb, data) {
    const years = getFinalsCb(data);

    return years.map(function(item){
        return item["Year"];
    }) 
}  

console.log(getYears(getFinals, fifaData));

/* Task 5: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */ 

function getWinners(getFinalsCb, data) {
    const winners = getFinalsCb(data);
    return winners.map(function(item){
        if(item["Home Team Goals"] > item["Away Team Goals"]){
            return item["Home Team Name"];
        }else{
            return item["Away Team Name"];
        }
    });
};

console.log(getWinners(getFinals, fifaData));

/* Task 6: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */

function getWinnersByYear(getWinnersCb, getYearsCb, data) {
    //creating variables to store new arrays
    const yearsWithFinals = getYearsCb(getFinals, data);
    const winningTeams = getWinnersCb(getFinals, data);
    //run through yearsWithFinals then match with corresponding year by index
    return yearsWithFinals.map(function(year, i) {
        const winningTeam = winningTeams[i];
        
        return `In ${year}, ${winningTeam} won the world cup!`;
    });
};

console.log(getWinnersByYear(getWinners, getYears, fifaData));

/* Task 7: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

function getAverageGoals(data) {
    const goalsTotal = data.reduce(function(accumulator, item){
        return accumulator + item["Home Team Goals"] + item["Away Team Goals"];
    }, 0)
  const averageGoals = goalsTotal / data.length;
  return averageGoals;
}

console.log(getAverageGoals(fifaData));

/// STRETCH 🥅 //

/* Stretch 1: Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(data, teamInitials) {
    //filter through all matches to find all games with the passed in teamInitials
    return data.reduce(function(accumulator, item){
        //create variables to store whether teamInitials was Home or Away
        const isHomeTeam = item["Home Team Initials"] === teamInitials;
        const isAwayTeam = item["Away Team Initials"] === teamInitials;
        //Check to see if teamInitials match and they won
        if(isHomeTeam && item["Home Team Goals"] > item["Away Team Goals"]){
            accumulator++
        }else if(isAwayTeam &&  item["Away Team Goals"] > item["Home Team Goals"]){
            accumulator++
        }
        return accumulator;
    }, 0);
};

console.log(getCountryWins(fifaData, "URU"));


/* Stretch 3: Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(data) {
    




    /* code here */

};

getGoals();


/* Stretch 4: Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

};

badDefense();

/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */
