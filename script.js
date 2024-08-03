
function greet(name) { 

    return "Hello, " + name + "!"; 

}

$('.carousel').carousel({
    interval: 5000 // Adjust the interval as needed (in milliseconds)
})

// Function to open modal and fill date and time fields
document.getElementById('openModalButton').addEventListener('click', function() {
    var currentDate = new Date();
    var dateField = document.getElementById('date');
    var timeField = document.getElementById('time');

    // Format date as YYYY-MM-DD
    var year = currentDate.getFullYear();
    var month = ('0' + (currentDate.getMonth() + 1)).slice(-2);
    var day = ('0' + currentDate.getDate()).slice(-2);
    var formattedDate = year + '-' + month + '-' + day;

    // Format time as HH:MM
    var hours = ('0' + currentDate.getHours()).slice(-2);
    var minutes = ('0' + currentDate.getMinutes()).slice(-2);
    var formattedTime = hours + ':' + minutes;

    // Set values to date and time fields
    dateField.value = formattedDate;
    timeField.value = formattedTime;

    // Open the modal
    $('#exampleModal').modal('show');
  });


  