$( document ).ready(function() {

    $('select').niceSelect();

    function resizeViseo() {
        var video = $('video');
        if ($(window).width() < 500){
            video.css('max-width', '92%');
        }
        var videoWidth = video.width();
        var videoHeight = videoWidth*0.60;
        video.css('height',videoHeight);
    }
    resizeViseo();

    $( window ).resize(function() {
        resizeViseo();
    });

    $('.play_cover').click(function () {
        $(this).hide();
        const vid2 = document.getElementById("click-img");
        const vid = document.getElementById("top_video");
        $(vid2).hide();
        // vid.controls = false;
        vid.play();
    });

});
