/// <reference types="../@types/jquery" />

// home logic


    $(".toggling").on("click", function(e) {
   
        if($('.myNav').css('left') ==='0px'){
            $(".myNav").animate({left:  "-100%"}, 500);
            $(".toggling").animate({left: 10}, 500);
            $(".header-contact").animate({left: 0}, 500);
        }
      else{
        $(".myNav").animate({left: 0}, 500);
        $(".toggling").animate({left: 200}, 500);
        $(".header-contact").animate({left: 200}, 500);
      }
        
    });

    $("#close").on("click", function(e) {
        $(".myNav").animate({left:  "-100%"}, 500);
        $(".toggling").animate({left: 10}, 500);
        $(".header-contact").animate({left: 0}, 500);
    });

    $("a[href^='#']").on("click", function(e) {
        let url = e.target.getAttribute("href"); // no need for $  it is native
   
        let sectionOffset = $(url).offset().top;
        $('body, html').animate({scrollTop: sectionOffset}, 1000)
        });



// singers logic
$('.singer-title').on('click', function(e) {
if($(e.target).next().css('display')=='block'){
    $('.singer-details').slideUp(500);
}
else{
    $('.singer-details').slideUp(500);
    $(e.target).next().slideToggle(500);
}
})


// duration logic

// from chatgpt
// Set the target date
var targetDate = new Date("July 1, 2025 00:00:00").getTime();

    // Function to start the countdown
    function startCountdown() {
        var countdownInterval = setInterval(function() {
            // Get the current date and time
            var now = new Date().getTime();

            // Calculate the time difference
            var timeDifference = targetDate - now;

          // Calculate absolute days, hours, minutes, and seconds
          var absTimeDifference = Math.abs(timeDifference);
          var days = Math.floor(absTimeDifference / (1000 * 60 * 60 * 24));
          var hours = Math.floor((absTimeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          var minutes = Math.floor((absTimeDifference % (1000 * 60 * 60)) / (1000 * 60));
          var seconds = Math.floor((absTimeDifference % (1000 * 60)) / 1000);

          // Format the time
          if (hours < 10) hours = "0" + hours;
          if (minutes < 10) minutes = "0" + minutes;
          if (seconds < 10) seconds = "0" + seconds;

          // Determine the sign for the countdown
          var sign = timeDifference < 0 ? "-" : "";

            // Display the time
            // $('#countdown').text(days + ":" + hours + ":" + minutes + ":" + seconds);
            $('.days').text(sign+days+"D")
            $('.hours').text(hours+"h")
            $('.mins').text(minutes+"m")
            $('.secs').text(seconds+"s")
            // Check if the countdown is finished
            // if (timeDifference < 0) {
            //     clearInterval(countdownInterval);
            //     $('#countdown').text("Time's up!");
            // }
            // console.log(days, hours, minutes, seconds);
        }, 1000);
       
    }

    // Start the countdown
    startCountdown();




// footer logic
//  my logic
// $('textarea').on('input',function(e) {
//     let userMessage = $(e.target).val();
//     let characterCount = userMessage.length;
//     if (characterCount <= 100){
//         remainChars = 100-characterCount
//         $('#characters').text(remainChars);
//         $('.remainText').css('display', 'inline');
//     }
//     if (remainChars ==0){
//         $('#characters').text("your available character finished");
//         $('.remainText').css('display', 'none');
//         $('#userMessage').prop('disabled', true);

//     }
    
// })





// gptPrompt();
$(document).ready(function() {
    var maxCharacters = 100; // Maximum characters allowed

    $('#userMessage').on('input', function(e) {
        var userMessage = $(this).val();
        var characterCount = userMessage.length;

        if (characterCount > maxCharacters) {
            $(this).val(userMessage.substring(0, maxCharacters)); // Trim excess characters
            characterCount = maxCharacters; // Update character count
        }

        var remainChars = maxCharacters - characterCount;
        $('#characters').text(remainChars);

        if (remainChars === 0) {
            $('#characters').text("Your available characters finished");
        }

        $('.remainText').css('display', remainChars === 0 ? 'none' : 'inline');
    });

    $('#userMessage').on('keydown', function(e) {
        var characterCount = $(this).val().length;

        // Allow backspace (8) and delete (46) keys
        if (e.which !== 8 && e.which !== 46 && characterCount >= maxCharacters) {
            e.preventDefault(); // Prevent further keypresses if limit reached
        }
    });
});