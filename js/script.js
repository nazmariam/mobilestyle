$( document ).ready(function() {


    function resizeViseo() {
        var video = $('video');
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
