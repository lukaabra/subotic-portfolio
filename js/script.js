$(document).ready(function() {
    // Change to container-fluid if on a 4K monitor
    if(window.innerWidth < 1800) {
        $("#front").addClass("container").removeClass("container-fluid");
    } else{
        $("#front").addClass("container-fluid").removeClass("container");
    }

    // Center the index-links if loading on a tablet or smaller device
    if(window.innerWidth < 768) {
        $(".index-link").addClass("text-center").removeClass("text-left").removeClass("text-right");
    }
});
  
$(window).resize(function() {
    // Change to container-fluid if resizing to a 4K monitor
    if(window.innerWidth < 1800) {
        $("#front").addClass("container").removeClass("container-fluid");
    } else{
        $("#front").addClass("container-fluid").removeClass("container");
    }

    // Center the index-links if resizing to a tablet or smaller device
    if(window.innerWidth < 768) {
        $(".index-link").addClass("text-center").removeClass("text-left").removeClass("text-right");
    }
});