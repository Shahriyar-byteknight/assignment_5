// alert("Board updated successfully");
document.getElementById("mobile-btn")
.addEventListener("click",function(event){
event.preventDefault();
const mainNumber = document.getElementById("main-number").innerText;
const mainNumberInt = parseInt(mainNumber);
const taskNumber = document.getElementById("task-number").innerText;
const taskNumberInt = parseInt(taskNumber);
document.getElementById("main-number").innerText = mainNumberInt + 1;
document.getElementById("task-number").innerText = taskNumberInt - 1;
document.getElementById("mobile-btn").disabled = true;
document.getElementById("mobile-btn").style.backgroundColor = "grey";
alert("Updated board successfully")
})
// Card 2-----------
document.getElementById("dark-btn")
.addEventListener("click",function(event){
 const mainNumber2 = document.getElementById("main-number").innerText;
 const mainNumberInt2 = parseInt(mainNumber2);
const taskNumber2 = document.getElementById("task-number").innerText;
const taskNumberInt2 = parseInt(taskNumber2);
document.getElementById("main-number").innerText = mainNumberInt2 +1;
document.getElementById("task-number").innerText = taskNumberInt2 -1;
document.getElementById("dark-btn").disabled = true ;
document.getElementById("dark-btn").style.backgroundColor = "grey";
alert("Updated board successfully");
})
// CARD 3--
document.getElementById("optimize-btn")
.addEventListener("click",function(event){
 const mainNumber3 = document.getElementById("main-number").innerText;
 const mainNumberInt3 = parseInt(mainNumber3);
const taskNumber3 = document.getElementById("task-number").innerText;
const taskNumberInt3 = parseInt(taskNumber3);
document.getElementById("main-number").innerText = mainNumberInt3 +1;
document.getElementById("task-number").innerText = taskNumberInt3 -1;
document.getElementById("optimize-btn").disabled = true ;
document.getElementById("optimize-btn").style.backgroundColor = "grey";
alert("Updated board successfully");
})
// CARD 4 ------------
document.getElementById("emoji-btn")
.addEventListener("click",function(event){
 const mainNumber4 = document.getElementById("main-number").innerText;
 const mainNumberInt4 = parseInt(mainNumber4);
const taskNumber4 = document.getElementById("task-number").innerText;
const taskNumberInt4 = parseInt(taskNumber4);
document.getElementById("main-number").innerText = mainNumberInt4 +1;
document.getElementById("task-number").innerText = taskNumberInt4 -1;
document.getElementById("emoji-btn").disabled = true ;
document.getElementById("emoji-btn").style.backgroundColor = "grey";
alert("Updated board successfully");
})
// CARD 5 -----------------
document.getElementById("openAi-btn")
.addEventListener("click",function(event){
 const mainNumber5 = document.getElementById("main-number").innerText;
 const mainNumberInt5 = parseInt(mainNumber5);
const taskNumber5 = document.getElementById("task-number").innerText;
const taskNumberInt5 = parseInt(taskNumber5);
document.getElementById("main-number").innerText = mainNumberInt5 +1;
document.getElementById("task-number").innerText = taskNumberInt5 -1;
document.getElementById("openAi-btn").disabled = true ;
document.getElementById("openAi-btn").style.backgroundColor = "grey";
alert("Updated board successfully");
})
// CARD 6--------
document.getElementById("job-btn")
.addEventListener("click",function(event){
 const mainNumber6 = document.getElementById("main-number").innerText;
 const mainNumberInt6 = parseInt(mainNumber6);
const taskNumber6 = document.getElementById("task-number").innerText;
const taskNumberInt6 = parseInt(taskNumber6);
document.getElementById("main-number").innerText = mainNumberInt6 +1;
document.getElementById("task-number").innerText = taskNumberInt6 -1;
document.getElementById("job-btn").disabled = true ;
document.getElementById("job-btn").style.backgroundColor = "grey";
alert("Updated board successfully");
})