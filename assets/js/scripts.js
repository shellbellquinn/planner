//add the current date to the #current date id in the HTML//
var dateString = moment().format("dddd, MMMM Do YYYY, h:mm a");
$("#currentDay").html(dateString);

// //create html timeblocks with for loop starting at 9 am until 5pm//
var plannedHours = [];
    
    for (var hour = 9; hour < 18; hour++) {
      plannedHours.push(moment({hour}).format('h  a'));
      $('.container').append(`<div class="row time-block"> 

       <!--//hour column//-->
           <div class="col-sm col-md-2 hour"> 
             <p id=hour>${moment({hour}).format('h  a')}</p>
           </div> 
      
       <!--//user input text area//-->
           <div class="col-sm col-md-8 d-flex description"> 
             <textarea></textarea> 
           </div> 
      
       <!--//bootstrap saveBtn//-->
           <div class="col-sm col-md-2 saveBtn"> 
             <i class="far fa-save fa-2x"></i> 
           </div> 
           </div>`);
    }
  console.log( plannedHours );

