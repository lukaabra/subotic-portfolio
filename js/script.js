$(document).ready(function() {
    // Change to container-fluid if on a 4K monitor
    if (window.innerWidth < 1800) {
        $("#front").addClass("container").removeClass("container-fluid");
    } else {
        $("#front").addClass("container-fluid").removeClass("container");

        // Turns all elements with the class 'container' to 'container-fluid' above a certain resolution
        $("div.container").addClass("container-fluid").removeClass("container");
        $("section.container").addClass("container-fluid").removeClass("container");
        $("nav.container").addClass("container-fluid").removeClass("container");
        $("#wrap").removeClass("container-fluid");
    }

    // Center the index-links if loading on a tablet or smaller device
    if (window.innerWidth < 768) {
        $(".index-link").addClass("text-center").removeClass("text-left").removeClass("text-right");
    }

    // Change index layout on mobile
    if (window.innerWidth < 471) {
        $("#front div").addClass("h-50").removeClass("h-75").removeClass("h-25");
    }
});
  
$(window).resize(function() {
    // Change to container-fluid if resizing to a 4K monitor
    if (window.innerWidth < 1800) {
        $("#front").addClass("container").removeClass("container-fluid");

        // Turns all elements with the class 'container' to 'container-fluid' above a certain resolution
        $("div.container").addClass("container").removeClass("container-fluid");
        $("section.container").addClass("container").removeClass("container-fluid");
        $("nav.container").addClass("container").removeClass("container-fluid");
        $("#wrap").addClass("container-fluid");
    } else {
        $("#front").addClass("container-fluid").removeClass("container");

        // Turns all elements with the class 'container' to 'container-fluid' above a certain resolution
        $("div.container").addClass("container-fluid").removeClass("container");
        $("section.container").addClass("container-fluid").removeClass("container");
        $("nav.container").addClass("container-fluid").removeClass("container");
        $("#wrap").removeClass("container-fluid");
    }

    // Center the index-links if resizing to a tablet or smaller device
    if (window.innerWidth < 768) {
        $(".index-link").addClass("text-center").removeClass("text-left").removeClass("text-right");
    }

    // Change index layout if resized to mobile
    if (window.innerWidth < 471) {
        $("#front div").addClass("h-50").removeClass("h-75").removeClass("h-25");
    } else {
        $("#front").children().first().addClass("h-75").removeClass("h-50");
        $("#front").children().last().addClass("h-25").removeClass("h-50");
    }
});