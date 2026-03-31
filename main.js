$(document).ready(function() {
    $('.aboutUsPage, .itemsPage, .ContactPage, .supportPage').hide();
    $('.homePage').css('display', 'flex');
    
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

// items start

$(`.cart`).hide(0);


async function fetchProducts() {
  const res = await fetch('https://fakestoreapi.com/products');
  const products = await res.json();
  return products;
}
let products = [];

async function loadProducts() {
  products = await fetchProducts();
  checkProducts("all");
}

loadProducts();



addItem = function(product){
  $('.itemsContainer').append(`
    <div class="item">
    <div class="itemInfo">
    <div class="itemImg">
        <img src="${product.image}">
    </div>
    <div class="itemTitle">
      <p>${product.title}</p>
    </div>
    <div class="itemPrice">
      <p>${product.price}$</p>
    </div>
    </div>
    <button>Add to cart</button>
    </div>
    `);
}
checkProducts = function(category){
  $('#itemsContainer').empty();
  for(let i = 0;i< products.length; i++){
    let product = products[i];
    if(product.category == category || category =="all"){
      addItem(product);
    }
  }
}
$('.categoriesContainer p').on('click', function() {
  const category = $(this).data('category');
  checkProducts(category);
});


$('#itemsContainer').on('click', 'button', function() {
  const item = $(this).closest('.item');

  const image = item.find('img').attr('src');
  const title = item.find('.itemTitle p').text();
  const price = item.find('.itemPrice p').text();

  $('.cartItemsContainer').append(`
    <div class="cartItem">
    <div class="itemImg">
    <img src="${image}">
    </div>
    <div class="itemTitle">
      <p>${title}</p>
    </div>
    <div class="itemPrice">
    <p>${price}</p>
    </div>
      <button class="removeCartItemBtn"><i class="fa-solid fa-trash"></i></button>
    </div>
  `);
});


$(`.cartViewBtn`).click(function(){
    $(`.cart`).show(200);
    $(`.itemsContainer`).hide(0);
    $(`.categoriesContainer`).hide(0);
});
$(`#continueShopping`).click(function(){
    $(`.cart`).hide(200);
    $(`.itemsContainer`).show(100);
    $(`.categoriesContainer`).show(200);
});
$('.cart').on('click', '.removeCartItemBtn', function() {
  $(this).closest('.cartItem').remove();
});