
jQuery(() => {
    $(".addtocart").click(function() {
      var price = parseFloat($(this).attr("data-price"));
      var totalPriceElement = $("#total-price");
      var currentTotal = parseFloat(totalPriceElement.text());
      
      currentTotal += price;
      totalPriceElement.text(currentTotal.toFixed(2));
  
      var productName = $(this).closest(".card-body").find(".card-title").text();
      var cartItemsList = $("#cart-items");
      cartItemsList.append("<li>" + productName + " - $" + price.toFixed(2) + "</li>");
    });
  });


jQuery(() =>{
    let cartItems = [];
    let totalPrice = 0;

    function openCartModal() {
        $('#cart-modal').modal('show');
    }

    function closeCartModal() {
        $('#cart-modal').modal('hide');
    }


    $('.addtocart').on('click', function() {
        const price = parseFloat($(this).data('price'));
        if (!isNaN(price)) {
            cartItems.push({ price: price });
            totalPrice += price;
        }
    });

    $('.btn-cart').on('click', function() {
        openCartModal();
        updateCartDisplay();
    });
    
    $('.close').on('click', function() {
        closeCartModal();
    });
});