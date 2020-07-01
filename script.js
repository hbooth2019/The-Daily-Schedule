$(document).ready(function()){
    //listen for save buttons clicks
    $(".saveBtn").on("click", function() {
  });
   function hourUpdater() {
   }
   hourUpdater();

// set up interval to check if current time needs to be updated
var interval = setInterval(hourUpdater, 15000);

// load any saved data from localStorage
$("#hour-9 .description").val(localStorage.getItem("hour-9"));
// .... all the way till hour-17

// display current day on page
$("#currentDay").text(moment().format ("dddd, MMMM, Do"));
};