
// Iteration 1: Names and Input
let hacker1 = "Anna"
//console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Anthony"
//console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`);

} else if (hacker2.length > hacker1.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker1.length} characters.`);

} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters`);
}

// Iteration 3: Loops

for(let i = 0; i < hacker1.length; i++) {
    console.log(hacker1[i].toUpperCase())
}


for(let i = hacker2.length - 1; i >= 0; i--) {
   console.log(hacker2[i]);
}



function count(driver,navigator) { 

    let i = 0; 
    while (i < driver.length && i < navigator.length) {
        //console.log(driver[i],navigator[i]);
        
        if (driver[i] < navigator[i]) {
            console.log("The driver's name goes first.");
            return;
        } else if (driver[i] > navigator[i]) {
            console.log("Yo, the navigator goes first, definitely.")
            return;
        }   
        i++            
    }

    console.log("What?! You both have the same name");
}

count("Beatrice","Beatrice"); 









 










































