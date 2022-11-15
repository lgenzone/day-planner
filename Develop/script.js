// hours 
let hoursArray = [9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
// hours element 
hoursEl = [
  "#hour-9",
  "#hour-10",
  "#hour-11",
  "hour-12",
  "hour-13",
  "#hour-14",
  "#hour-15",
  "#hour-16",
  "hour-17",
  "#hour-18",
  "hour-19",
  "#hour-20",
  "#hour-21"
];



// display current date (today is <weekday, month, day, year>)
var today = dayjs();
$('#currentDay').text(today.format('[Today is] dddd' + ' MMM D, YYYY'));


// save user input to local storage 
$(document).ready(function() {
$(".saveBtn").on("click", function() {
  let newVar = $(this).siblings(".description").val();
  let newVar2 = $(this).parent().attr("id")
  localStorage.setItem(newVar, newVar2)});
});


  // get item value for each input in local storage 
 // for (let i = 0; i < hoursEl.length; i++) {
   // textarea[i].innerHTML = localStorage.getItem(hoursEl//[i], textarea[i].value);}

  // confused on past, present, future, and how tp change colors based on this......
  // let newVar = $(this).children/siblings("?").val();
  // let newVar2 = $(this) ?
  // localStorage.setItem("","");

  //localStorage.getItem(); 

  // if statement based on values for setting colors add class, remove class 
  // $ and descripton for each hour - set for each hour 


  // Wrap all code that interacts with the DOM in a call to jQuery to ensure that
  // the code isn't run until the browser has finished rendering all the elements
  // in the html.
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener


  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.

