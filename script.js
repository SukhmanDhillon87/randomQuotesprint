/******************************************
*****************************************/

/*** 
 * `quotes` array 
***/

var quotes=[];
// create an empty array
var quoteObject1 ={
    quote:'If you judge people, you have no time to love them',
    source:' Mother Teresa',
    citation:'Google',
    year:'2014'
};
var quoteObject2 ={
    quote:'All that we are is the result of what we have thought.',
    source:'Buddha',
    citation:'Google',
    
};
var quoteObject3={
    quote:'The future belongs to those who prepare for it today',
    source:' Malcolm X',
    citation:'Google',
    year:'2007'
};
var quoteObject4={
    quote:'Don’t count the days, make the days count',
    source:'Muhammad Ali',
    citation:'Twitter',
    year:'2003'
};
var quoteObject5 ={
    quote:'I like criticism. It makes you strong',
    source:'LeBron James',
    citation:'facebook',
   
};
// adding above objects in an array
quotes.push(quoteObject1);
quotes.push(quoteObject2);
quotes.push(quoteObject3);
quotes.push(quoteObject4);
quotes.push(quoteObject5);


/***
 * `getRandomQuote` function
***/
var previousIndex = 0;
var randomIndex;
function randomNumberBetween(lower, upper) {
    return Math.floor(Math.random() * (upper - lower + 1)) + lower
  }
  function getRandomQuote(){
    //get a random index
    randomIndex = randomNumberBetween(0, (quotes.length -1))
    //prevents repeated quotes if index matches previous
    while (randomIndex === previousIndex){
      randomIndex = randomNumberBetween(0, (quotes.length -1))
    }
    //set previous index
    previousIndex = randomIndex;
    return quotes[randomIndex];
  }


/***
 * `printQuote` function
***/
function printQuote(){
    var object=getRandomQuote(); // calling random function
    var htmlString ="<p class='quote'>"+object.quote+"</p><br>";
    htmlString+="<p class='source'>"+object.source+"</p><br>";

    //checking if citation and year are there

    if(object.citation){
        htmlString+="<p class='citation'>"+object.citation+"</p><br>";
    }
    if(object.year){
        htmlString+="<p class='year'>"+object.year+"</p><br>";
    }
    document.getElementById('quote-box').innerHTML=htmlString;
    return htmlString;
}
/***
 * click event listener for the print quote button
 * The code will look like the following. You need to complete it.

***/
document.getElementById('load-quote').addEventListener("click", printQuote, false);



