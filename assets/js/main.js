$(document).ready(function () {
    // ----- TOGGLING SIDEBAR
    $('.sideBarToggler').click(function (e) {
        e.preventDefault();
        $('body').toggleClass('toggled');
    });

    ///----- TOGGLING OPEN AND CLOSED MENU SIGN
    $(".sideBarToggler").click(function () {
        var src = $('.sideBarToggler img').attr('src');
        var newsrc = (src == 'assets/images/icons8_menu_32px.png') ? 'assets/images/icons8_delete_32px_1.png' : 'assets/images/icons8_menu_32px.png';
        $('.sideBarToggler img').attr('src', newsrc);
    });

    ///----- TOGGLING MODE IMAGES
    $(".modeToggler").click(function (e) {
        e.preventDefault();
        var src = $('.modeToggler img').attr('src');
        var newsrc = (src == 'assets/images/icons8_sun_32px.png') ? 'assets/images/icons8_moon_symbol_32px.png' : 'assets/images/icons8_sun_32px.png';
        $('.modeToggler img').attr('src', newsrc);
        $(".lightModeBall").toggleClass('lightMode');
        $(".appCard").toggleClass('lightAppCard');
        $(".appNav").toggleClass('lightAppNav');
        $(".bottomNav").toggleClass('lightBottomNav');
        $(".postCard").toggleClass('lightPostCard');
    });
});