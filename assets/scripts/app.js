$(function () {
    // Burger menu
    $("#nav_toggle").on("click", function (event) {
        event.preventDefault();
        console.log(1);

        $("#navigation").toggleClass("active");
        $("#header").toggleClass("active");
        $(this).toggleClass("active");
    })

    $('.nav_link').on('click', function () {

        $("#header").toggleClass("active");
        $("#navigation").toggleClass("active");
    })

    $('#icon_link').on('click', function () {

        $("#header").toggleClass("active");
        $("#navigation").toggleClass("active");
    })
});