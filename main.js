$(document).ready(function() {
    // Приховуємо всі сторінки, крім Home
    $('.aboutUsPage, .itemsPage, .ContactPage, .supportPage').hide();
    $('.homePage').css('display', 'flex');
    
    // Клік на Home
    $('.top-nav .nav-links li a').eq(0).click(function(e) {
        e.preventDefault();
        $('.aboutUsPage, .itemsPage, .ContactPage, .supportPage').hide();
        $('.homePage').css('display', 'flex');
        $('.top-nav .nav-links li a').removeClass('active');
        $(this).addClass('active');
    });
    
    $('.top-nav .nav-links li a').eq(1).click(function(e) {
        e.preventDefault();
        $('.homePage, .itemsPage, .ContactPage, .supportPage').hide();
        $('.aboutUsPage').show();
        $('.top-nav .nav-links li a').removeClass('active');
        $(this).addClass('active');
    });
    
    $('.top-nav .nav-links li a').eq(2).click(function(e) {
        e.preventDefault();
        $('.homePage, .aboutUsPage, .ContactPage, .supportPage').hide();
        $('.itemsPage').show();
        $('.top-nav .nav-links li a').removeClass('active');
        $(this).addClass('active');
    });
    
    $('.top-nav .nav-links li a').eq(3).click(function(e) {
        e.preventDefault();
        $('.homePage, .aboutUsPage, .itemsPage, .supportPage').hide();
        $('.ContactPage').show();
        $('.top-nav .nav-links li a').removeClass('active');
        $(this).addClass('active');
    });
    $('.top-nav .nav-links li a').eq(4).click(function(e) {
        e.preventDefault();
        $('.homePage, .aboutUsPage, .itemsPage, .ContactPage').hide();
        $('.supportPage').show();
        $('.top-nav .nav-links li a').removeClass('active');
        $(this).addClass('active');
    });
});