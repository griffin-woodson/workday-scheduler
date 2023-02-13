// global variables
var currentTime = moment();
var entryCount = 1;
$("#currentDay").text(currentTime.format("MMMM Do, YYYY"));

var retrieveStorage = function () {
  $("#textarea1").val(localStorage.getItem("textarea1"));
  $("#textarea2").val(localStorage.getItem("textarea2"));
  $("#textarea3").val(localStorage.getItem("textarea3"));
  $("#textarea4").val(localStorage.getItem("textarea4"));
  $("#textarea5").val(localStorage.getItem("textarea5"));
  $("#textarea6").val(localStorage.getItem("textarea6"));
  $("#textarea7").val(localStorage.getItem("textarea7"));
  $("#textarea8").val(localStorage.getItem("textarea8"));
  $("#textarea9").val(localStorage.getItem("textarea9"));
  $("#textarea10").val(localStorage.getItem("textarea10"));
};
retrieveStorage();
for (i = 8; i < 18; i++) {
  var hour = currentTime.hour();
  var tBlock = "#textarea" + entryCount;
  if (i < hour) {
    $(tBlock).addClass("past");
  } else if (i > hour) {
    $(tBlock).addClass("future");
  } else {
    $(tBlock).addClass("present");
  }
  entryCount++;
}

$("button").click(function createTasks() {
  var task = $(this).siblings("textarea").val();
  var timeBlock = $(this).siblings("textarea").attr("id");
  localStorage.setItem(task, timeBlock);
});
