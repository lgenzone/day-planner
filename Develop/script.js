$(function () {

// global variables 
var currentHour = dayjs().format("H");

// hour blocks - turn each hour block into one array
var nine = $("#hour-9");
var ten = $("#hour-10");
var eleven = $("#hour-11");
var twelve = $("#hour-12");
var thirteen = $("#hour-13");
var fourteen = $("#hour-14");
var fifteen = $("#hour-15");
var sixteen = $("#hour-16");
var seventeen = $("#hour-17");
// hour array (elements)
hoursArray = [nine, ten, eleven, twelve, thirteen, fourteen, fifteen, sixteen, seventeen];
// hours array (time)
hours = [9, 10, 11, 12, 13, 14, 15, 16, 17];



// display current date (today is <weekday, month, day, year>)
var today = dayjs();
$('#currentDay').text(today.format('[Today is] dddd' + ' MMM D, YYYY'));



// save user input to local storage 
$(document).ready(function() {
$(".saveBtn").on("click", function() {
  let text = $(this).siblings(".description").val();
  let time = $(this).parent().attr("id")
  localStorage.setItem(text, time)});
});
 // get items from local storage 
 
 // checks if current time is equal to current hour
 function colorBlocks() {
  for (i=0; i < hours.length; i++) {
    var timeBlock = hours[i];
    
    if (currentHour == timeBlock) {
    $(hoursArray[i]).removeClass("future").addClass("past");
    }
  }
 };



  // if statement based on values for setting colors add class, remove class 
  // $ and descripton for each hour - set for each hour 
 







  // get item value for each input in local storage 
 // for (let i = 0; i < hoursEl.length; i++) {
   // textarea[i].innerHTML = localStorage.getItem(hoursEl//[i], textarea[i].value);}

  // confused on past, present, future, and how tp change colors based on this......
  // let newVar = $(this).children/siblings("?").val();
  // let newVar2 = $(this) ?
  // localStorage.setItem("","");

 



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

});
