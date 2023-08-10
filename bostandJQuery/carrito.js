$(document).ready(function() {
    let cartItems = [];
    let totalPrice = 0;

    // Función para actualizar la lista y el precio total en el carrito
    function updateCartDisplay() {
        const cartItemsElement = $('#cart-items');
        const totalElement = $('#total-price');
        cartItemsElement.empty();
        cartItems.forEach(item => {
            const listItem = $('<li>').text(`Precio: ${item.price.toFixed(2)}€`);
            cartItemsElement.append(listItem);
        });
        totalElement.text(totalPrice.toFixed(2));
    }

    // Función para abrir el modal del carrito
    function openCartModal() {
        $('#cart-modal').modal('show');
    }

    // Función para cerrar el modal del carrito
    function closeCartModal() {
        $('#cart-modal').modal('hide');
    }

    // Evento para añadir al carrito
    $('.addtocart').on('click', function() {
        const price = parseFloat($(this).data('price'));
        if (!isNaN(price)) {
            cartItems.push({ price: price });
            totalPrice += price;
        }
    });

    // Evento para abrir el carrito
    $('.btn-cart').on('click', function() {
        openCartModal();
        updateCartDisplay();
    });

    // Evento para cerrar el carrito
    $('.close').on('click', function() {
        closeCartModal();
    });
});