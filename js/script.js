$(document).ready(function() {
    $("body").addClass("js");

    /*Make header smaller when scrolling down page*/
    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            document.getElementById("menu-bar").style.fontSize = "16px";
            document.getElementById("page-header").style.height = "15%";
            document.getElementById("page-header").style.flexDirection = "row";
            document.getElementById("logo").style.width = "20%";
            document.getElementById("side-menu").style.height = "83%";
        } else {
            document.getElementById("menu-bar").style.fontSize = "18px";
            document.getElementById("page-header").style.height = "auto";
            document.getElementById("page-header").style.flexDirection = "column";
            document.getElementById("logo").style.width = "70%";
            document.getElementById("side-menu").style.height = "68%";
            document.getElementById("side-menu").style.bottom = "-25px";
        }
    }
    
    /*Home page question click*/
    $("#charles a").click(function() { 
        $("#feature").text("This is wrong! Charles Darwin is the father of Evolution!");
        $("#feature").css("color", "#860909");
    });

    $("#dmitri a").click(function() {
        $("#feature").text("You're certainly correct! Dmitri Mendeleev is indeed the founding father of Chemistry!");
        $("#feature").css("color", "#00613E");
    });

    $("#gregor a").click(function() { 
        $("#feature").text("Have you being dozing off in class? Gregor Mendel is the father of Genetics!");
        $("#feature").css("color", "#860909");
    });

    /*Handles non-filled out fields when trying to submit the contact form*/
    $("fieldset button").click(function() { 
        var name = $("#form-full-name").val();
        var state = $("#form-state").val();
        var city = $("#form-city").val();
        var phone = Number.parseInt($("#form-phone").val());
        var email = $("#form-email").val();
        var age = $("input[name=age]:checked").val();
        var sec = $("input[name=favourite]:checked").val();
        var comment = $("#form-comments").val();

        var complete = true;
        var incomplete = "*You haven't completed the form properly, please check you've filled in all fields.";

        if (name == "") {
            event.preventDefault();
            complete = false;
            $("#sub").text(incomplete);
            $("#name").text("*Please fill in your name.");
        } else {
            $("#name").text("");
        }

        if (state == "") {
            event.preventDefault();
            complete = false;
            $("#sub").text(incomplete);
            $("#state").text("*Please fill in your state.");
        } else {
            $("#state").text("");
        }
        
        if (city == "") {
            event.preventDefault();
            complete = false;
            $("#sub").text(incomplete)
            $("#city").text("*Please fill in your city.");
        } else {
            $("#city").text("");
        }

        if (phone == "" || Number.isInteger(phone) == false) {
            event.preventDefault();
            complete = false;
            $("#sub").text(incomplete);
            $("#phone").text("*Please fill in a valid phone number.");
        } else {
            $("#phone").text("");
        }

        if (email == "" || email.includes("@") == false) {
            event.preventDefault();
            complete = false;
            $("#sub").text(incomplete);
            $("#email").text("*Please fill in a valid email.");
        } else {
            $("#email").text("");
        }

        if (typeof age == "undefined" || age == "") {
            event.preventDefault();
            complete = false;
            $("#sub").text(incomplete);
            $("#age").text("*Please select your age.");
        } else {
            $("#age").text("");
        }

        if (typeof sec == "undefined" || sec == "") {
            event.preventDefault();
            $("#sub").text(incomplete);
            $("#fav").text("*Please select your favourite section(s).");
        } else {
            $("#fav").text("");
        }

        if (comment == "") {
            event.preventDefault();
            complete = false;
            $("#sub").text(incomplete);
            $("#other").text("*Please fill in your other comments.");
        } else {
            $("#other").text("");
        }

        if (complete) {
            alert("Thanks for giving us your feedback, " + name + ".");
        } else {
            $("#sub").text(incomplete);
        }
    });

    /*Video pop up in Acknowledgements*/
	$("#Story .learn-more .HP a").click(function(event) {
        $("body").toggleClass("show-video");
        event.preventDefault();
    });
    
    $("#video .close-button a").click(function(event) {
        $("body").toggleClass("show-video");
        event.preventDefault();
    });
    
    /*Read more text about author in Acknowledgements*/
	$("#Author article .read-more a").click(function(event) {
        $(this).parent().parent().addClass("expanded");
        event.preventDefault();
    });

    $("#Author article .read-less a").click(function(event) {
        $(this).parent().parent().removeClass("expanded");
        event.preventDefault();
    });

    /*Forming a solution from click interaction in Separating Mixtures*/
    $("#solute-animation").click(function(event) {
        $("#solute-animation img:first-child").css("animation-timing-function", "linear");
        $("#solute-animation img:first-child").css("animation-name", "disappear");
        $("#solute-animation img:first-child").css("animation-duration", "10s");
        $("#solute-animation img:first-child").css(" animation-iteration-count", "infinite");
            
        $("#solute-animation img:nth-child(3)").css("animation-timing-function", "linear");
        $("#solute-animation img:nth-child(3)").css("animation-name", "solute");
        $("#solute-animation img:nth-child(3)").css("animation-duration", "10s");
        $("#solute-animation img:nth-child(3)").css("animation-iteration-count", "infinite");
           
        $("#solute-animation img:nth-child(2)").css("animation-timing-function", "linear");
        $("#solute-animation img:nth-child(2)").css("animation-name", "appear");
        $("#solute-animation img:nth-child(2)").css("animation-duration", "10s");
        $("#solute-animation img:nth-child(2)").css("animation-iteration-count", "infinite");
    });

    /*Quiz interaction in Elements, Compounds and Mixtures*/
    var score = 0;

    $("#element").click(function(event) {
        var substance = $(".cycle-slideshow").data("cycle.opts").currSlide;
        
        if (substance == 1 || substance == 3 || substance == 4 || substance == 7) {
            score += 1;
            $("#score").text(score + " points");
            $("#right-or-wrong").text("Correct!");
        } else {
            score -= 1;
            $("#score").text(score + " points");
            $("#right-or-wrong").text("Inorrect!");
        }

        if (score == 10) {
            $("#right-or-wrong").text("Well done, you managed to correctly match 10 substances.");
        } else if (score < 0) {
            $("#right-or-wrong").text("You've still got a bit to work on!");
        }
    });

    $("#compound").click(function(event) {
        var substance = $(".cycle-slideshow").data("cycle.opts").currSlide;
        
        if (substance == 2 || substance == 5 || substance == 6) {
            score += 1;
            $("#score").text(score + " points");
            $("#right-or-wrong").text("Correct!");
        } else {
            score -= 1;
            $("#score").text(score + " points");
            $("#right-or-wrong").text("Inorrect!");
        }

        if (score == 10) {
            $("#right-or-wrong").text("Well done, you managed to correctly match 10 substances.");
        } else if (score < 0) {
            $("#right-or-wrong").text("You've still got a bit to work on!");
        }
    });

    $("#mixture").click(function(event) {
        var substance = $(".cycle-slideshow").data("cycle.opts").currSlide;
        
        if (substance == 0 || substance == 8 || substance == 9) {
            score += 1;
            $("#score").text(score + " points");
            $("#right-or-wrong").text("Correct!");
        } else {
            score -= 1;
            $("#score").text(score + " points");
            $("#right-or-wrong").text("Inorrect!");
        }

        if (score == 10) {
            $("#right-or-wrong").text("Well done, you managed to correctly match 10 substances.");
        } else if (score < 0) {
            $("#right-or-wrong").text("You've still got a bit to work on!");
        }
    });

    /*Animation click pop-up interaction in Inside the Atom*/
    $("#atom-animation img:first-child").click(function(event) {
        $("body").toggleClass("show-electron");
        event.preventDefault();
    });

    $("#electron .close-button a").click(function(event) {
        $("body").toggleClass("show-electron");
        event.preventDefault();
    });

    $("#atom-animation img:nth-child(2)").click(function(event) {
        $("body").toggleClass("show-nucleus");
        event.preventDefault();
    });

    $("#nucleus .close-button a").click(function(event) {
        $("body").toggleClass("show-nucleus");
        event.preventDefault();
    });

    /*Equation maker interaction in Chemical Change*/    
    $(".info button").click(function() {
        var equation1 = $("#equation-11").val() + $("#equation-12").val() + $("#equation-13").val() + $("#equation-14").val();
        var equation2 = $("#equation-21").val() + $("#equation-22").val() + $("#equation-23").val(); 
        var equation3 = $("#equation-31").val() + $("#equation-32").val() + $("#equation-33").val() + $("#equation-34").val();
        var equation4 = $("#equation-41").val() + $("#equation-42").val() + $("#equation-43").val() + $("#equation-44").val();

        if (equation1 == "magnesiumhydrochloric acidhydrogenmagnesium chloride" && equation2 == "copper carbonatecopper oxidecarbon dioxide" && equation3 ==  "sodium sulfate solutionbarium chloridesolid barium sulfatesodium chloride solution" && equation4 == "ironcopper sulfate solutioniron sulfate solutioncopper") {
            $(".info button").html("All Correct!").attr("disabled", true);
            $(".feedback").text("You made every equation correctly, well done!");
            $(".feedback").css("color", "#00613E");

            $("#section-3 img").css("position", "relative");
            $("#section-3 img").css("animation-timing-function", "linear");
            $("#section-3 img").css("animation-name", "congrats");
            $("#section-3 img").css("animation-duration", "5s");
            $("#section-3 img").css("animation-iteration-count", "infinite");
        } else {
            $(".info button").html("Check again!")
            $(".feedback").text("Not quite right, please double check you've built the correct equations in the correct order.");
            $(".feedback").css("color", "#860909d");
        }
    });

    /*Check knowledge quiz in Chemical Reactions*/
    $("#form-oxygen").click(function(){
        $("#combustion").text("This is wrong, try again!");
        $("#combustion").css("color", "#860909");
    });

    $("#form-fuel").click(function(){
        $("#combustion").text("This is wrong, try again!");
        $("#combustion").css("color", "#860909");
    });

    $("#form-water").click(function(){
        $("#combustion").text("Correct! In a combustion reaction, a fuel reacts with oxygen to form water and carbon dioxide.");
        $("#combustion").css("color", "#00613E");
    });

    $("#form-carbon").click(function(){
        $("#combustion").text("This is wrong, try again!");
        $("#combustion").css("color", "#860909");
    });

    /*Change colour on side menu based on current section of page*/
    var top1 = $("#section-1").offset().top;
    var top2 = $("#section-2").offset().top;
    var top3 = $("#section-3").offset().top;

    $(document).scroll(function() {
        var scrollPos = $(document).scrollTop();
        if (scrollPos >= top1 && scrollPos < top2) {
            $("#side-menu #link2 a").css("background-color", "inherit");
            $("#side-menu #link3 a").css("background-color", "inherit");

            $("#side-menu #link1 a").css("background-color", "#00613E");
            $("#side-menu #link1 a").css("border-radius", "10px");
        } else if (scrollPos >= top2 && scrollPos < top3) {
            $("#side-menu #link1 a").css("background-color", "inherit");
            $("#side-menu #link3 a").css("background-color", "inherit");

            $("#side-menu #link2 a").css("background-color", "#00613E");
            $("#side-menu #link2 a").css("border-radius", "10px");
        } else if (scrollPos >= top3) {
            $("#side-menu #link1 a").css("background-color", "inherit");
            $("#side-menu #link2 a").css("background-color", "inherit");

            $("#side-menu #link3 a").css("background-color", "#00613E");
            $("#side-menu #link3 a").css("border-radius", "10px");
        }
    });

	$("#side-menu #link1 a").click(function() { 
        $("#side-menu #link2 a").css("background-color", "inherit");
        $("#side-menu #link3 a").css("background-color", "inherit");

        $("#side-menu #link1 a").css("background-color", "#00613E");
        $("#side-menu #link1 a").css("border-radius", "10px");
    });

    $("#side-menu #link2 a").click(function() { 
        $("#side-menu #link1 a").css("background-color", "inherit");
        $("#side-menu #link3 a").css("background-color", "inherit");

        $("#side-menu #link2 a").css("background-color", "#00613E");
        $("#side-menu #link2 a").css("border-radius", "10px");
    });

    $("#side-menu #link3 a").click(function() { 
        $("#side-menu #link1 a").css("background-color", "inherit");
        $("#side-menu #link2 a").css("background-color", "inherit");

        $("#side-menu #link3 a").css("background-color", "#00613E");
        $("#side-menu #link3 a").css("border-radius", "10px");
    });
});