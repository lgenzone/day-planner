// display current date 
var today = dayjs();
$('#currentDay').text(today.format('[Today is] dddd' + ' MMM D, YYYY'));

  
    var setHourBlock = function(hourBlock) { 
      // format date 0-23 (hour)
      var currentHour = dayjs().format("H");
      // select hour block
      var hours = hourBlock.querySelector("textarea")
      // console.log(hourBlock) 
      // convert frmo string to number
      var hourId = Number.parseInt(hourBlock.id)
      //console.log(hourId)
      // checks if current hour is less than hour block and assigns future color green 
      if (currentHour < hourId) {
        hours.classList.add("future");
        //check if current hour is greater than hour block and assigns past color grey
      } else if (currentHour > hourId) {
        hours.classList.add("past");
        // if neither, assign present color red
      } else {
        hours.classList.add("present");
      }
      // get tasks from local storage
      var getTasks = localStorage.getItem(hourId)
      //console.log(getTasks)
      hours.value = getTasks;

      // assign click event to save button, log text input
      $(".saveBtn").on("click", function() {
        let text = hours.value;
        console.log(text)
        // set items to local storage
        localStorage.setItem(hourId, (text))});
    };

    document.querySelectorAll(".row").forEach(setHourBlock);
    



   