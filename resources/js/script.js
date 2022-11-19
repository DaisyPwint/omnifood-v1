// $(document).ready(function () {
//   $("h1").click(function () {
//     $(this).css("background-color", "#ff0000");
//   });
// });

$(document).ready(function () {
  //Sticky Nav
  $(".js--section-feature").waypoint(
    function (direction) {
      if (direction == "down") {
        $("nav").addClass("sticky");
      } else {
        $("nav").removeClass("sticky");
      }
    },
    {
      offset: "200px",
    }
  );

  // var waypoints = $('#handler-first').waypoint(function(direction) {
  //   notify(this.element.id + ' hit 25% from top of window')
  // }, {
  //   offset: '25%'
  // })

  // Scroll Nav Button Effect
  $(".js-btn-full").click(function () {
    $("html,body").animate(
      { scrollTop: $(".js--section-plan").offset().top },
      1000
    );
  });

  $(".js-btn-ghost").click(function () {
    $("html,body").animate(
      { scrollTop: $(".js--section-feature").offset().top },
      1000
    );
  });

  // Select all links with hashes
  $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function (event) {
      // On-page links
      if (
        location.pathname.replace(/^\//, "") ==
          this.pathname.replace(/^\//, "") &&
        location.hostname == this.hostname
      ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length
          ? target
          : $("[name=" + this.hash.slice(1) + "]");
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          $("html, body").animate(
            {
              scrollTop: target.offset().top,
            },
            1000,
            function () {
              // Callback after animation
              // Must change focus!
              var $target = $(target);
              $target.focus();
              if ($target.is(":focus")) {
                // Checking if the target was focused
                return false;
              } else {
                $target.attr("tabindex", "-1"); // Adding tabindex for elements not focusable
                $target.focus(); // Set focus again
              }
            }
          );
        }
      }
    });

  //Animation Scroll

  $(".js--wp-1").waypoint(
    function (direction) {
      $(".js--wp-1").addClass("animate fadeIn");
    },
    {
      offset: "60%",
    }
  );
  $(".js--wp-2").waypoint(
    function (direction) {
      $(".js--wp-2").addClass("animate__fadeInUpBig");
    },
    {
      offset: "60%",
    }
  );
  $(".js--wp-3").waypoint(
    function (direction) {
      $(".js--wp-3").addClass("animate__fadeIn");
    },
    {
      offset: "60%",
    }
  );

  //Mobile Nav

  $(".logo").click(function () {
    $(".js--main-nav").slideToggle();
    console.log("h");
  });
});
