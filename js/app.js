window.onscroll = () => {
    $('video').each(function () {
        if ($(window).scrollTop() > $(this).offset().top - 500) {
            if (!($(this).hasClass("played"))) {
                this.play();
                $(this).addClass("played");
                console.log(this)
            }
        }
    })
}